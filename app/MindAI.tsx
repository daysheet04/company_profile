"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";

type Pesan = {
  role: "user" | "assistant";
  content: string;
};

const pesanAwal: Pesan = {
  role: "assistant",
  content: "Halo! Aku MindAI, Admin Daysheet AI. Mau cari template, tanya layanan custom spreadsheet, atau lihat portofolio?",
};

const saranPertanyaan = [
  "Produk Daysheet apa saja?",
  "Bantu pilih sheet untuk usaha saya",
  "Saya ingin konsultasi kebutuhan custom",
];

function linkWhatsAppDenganRiwayat(messages: Pesan[], karenaLimit = false) {
  const riwayatLengkap = messages
    .map((pesan) => `${pesan.role === "user" ? "Pengunjung" : "MindAI"}: ${pesan.content.trim()}`)
    .join("\n\n");
  const pembuka = karenaLimit
    ? "Halo Daysheet, saya ingin melanjutkan konsultasi dari MindAI karena layanan AI sedang mencapai batas sementara."
    : "Halo Daysheet, saya ingin melanjutkan hasil konsultasi MindAI melalui WhatsApp.";
  const pesanWhatsApp = `${pembuka}\n\nRiwayat percakapan:\n\n${riwayatLengkap}`;

  return `https://wa.me/6285117238331?text=${encodeURIComponent(pesanWhatsApp)}`;
}

function formatIsiPesan(teks: string, riwayat: Pesan[]) {
  const bagian = teks.split(/(https?:\/\/[^\s]+|\*\*[^*]+\*\*)/g);
  return bagian.map((item, index) => {
    if (/^https?:\/\//.test(item)) {
      const tandaAkhir = item.match(/[.,;)]$/)?.[0] ?? "";
      const url = tandaAkhir ? item.slice(0, -1) : item;
      const urlTujuan = url === "https://wa.me/6285117238331"
        ? linkWhatsAppDenganRiwayat(riwayat)
        : url;
      const label = url.includes("wa.me/")
        ? "Hubungi WhatsApp"
        : url.includes("instagram.com/")
          ? "Buka Instagram"
          : url.includes("tiktok.com/")
            ? "Buka TikTok"
            : url.includes("lynk.id/daysheet/")
              ? "Lihat produk"
              : "Buka tautan";
      return <span key={`${item}-${index}`}><a href={urlTujuan} target="_blank" rel="noreferrer">{label}</a>{tandaAkhir}</span>;
    }
    if (item.startsWith("**") && item.endsWith("**")) return <strong key={`${item}-${index}`}>{item.slice(2, -2)}</strong>;
    return item;
  });
}

function IkonMindAI({ nama }: { nama: "spark" | "send" | "close" }) {
  if (nama === "send") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 4 17 8-17 8 3-8-3-8Z" /><path d="M7 12h14" /></svg>;
  if (nama === "close") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 7 10 10M17 7 7 17" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8c.5 5.2 2.8 7.5 8 8-5.2.5-7.5 2.8-8 8-.5-5.2-2.8-7.5-8-8 5.2-.5 7.5-2.8 8-8Z" /><path d="M19 3v4M21 5h-4M5 17v3M6.5 18.5h-3" /></svg>;
}

export default function MindAI() {
  const [terbuka, setTerbuka] = useState(false);
  const [messages, setMessages] = useState<Pesan[]>([pesanAwal]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const wadahMindAI = useRef<HTMLElement>(null);
  const daftarPesan = useRef<HTMLDivElement>(null);
  const kolomInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!terbuka) return;

    function tutupSaatKlikDiLuar(event: PointerEvent) {
      if (wadahMindAI.current && !wadahMindAI.current.contains(event.target as Node)) {
        setTerbuka(false);
      }
    }

    document.addEventListener("pointerdown", tutupSaatKlikDiLuar);
    return () => document.removeEventListener("pointerdown", tutupSaatKlikDiLuar);
  }, [terbuka]);

  useEffect(() => {
    if (!terbuka) return;

    const areaPesan = daftarPesan.current;
    if (!areaPesan) return;

    const frame = window.requestAnimationFrame(() => {
      areaPesan.scrollTo({
        top: areaPesan.scrollHeight,
        behavior: messages.length > 1 ? "smooth" : "auto",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [messages, loading, terbuka]);

  useEffect(() => {
    if (!terbuka || !window.matchMedia("(min-width: 581px) and (pointer: fine)").matches) return;
    const timer = window.setTimeout(() => kolomInput.current?.focus(), 180);
    return () => window.clearTimeout(timer);
  }, [terbuka]);

  async function kirim(teks: string) {
    const pesan = teks.trim().slice(0, 500);
    if (!pesan || loading) return;

    const pesanBaru: Pesan[] = [...messages, { role: "user", content: pesan }];
    setMessages(pesanBaru);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/mindai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: pesanBaru.slice(1) }),
      });
      const data = await response.json() as { answer?: string; error?: string };
      if (response.status === 429) {
        const linkWhatsApp = linkWhatsAppDenganRiwayat(pesanBaru, true);
        setMessages((lama) => [...lama, {
          role: "assistant",
          content: `MindAI sedang mencapai batas layanan sementara. Kamu bisa melanjutkan konsultasi melalui WhatsApp. Riwayat chat dan pertanyaan terakhirmu sudah disiapkan otomatis di dalam pesan. Tinggal periksa lalu tekan Kirim di WhatsApp.\n\n${linkWhatsApp}`,
        }]);
        return;
      }
      if (!response.ok || !data.answer) throw new Error(data.error || "MindAI gagal menjawab.");
      setMessages((lama) => [...lama, { role: "assistant", content: data.answer! }]);
    } catch (error) {
      setMessages((lama) => [...lama, {
        role: "assistant",
        content: error instanceof Error ? error.message : "Maaf, MindAI sedang bermasalah. Silakan coba lagi.",
      }]);
    } finally {
      setLoading(false);
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void kirim(input);
  }

  return (
    <aside ref={wadahMindAI} className={`mindai ${terbuka ? "mindai-terbuka" : ""}`} aria-label="MindAI Admin Daysheet AI">
      <section className="mindai-panel" role="dialog" aria-modal="false" aria-label="Percakapan dengan MindAI">
        <header className="mindai-header">
          <span className="mindai-avatar"><IkonMindAI nama="spark" /></span>
          <div><strong>MindAI</strong><small><i /> Admin Daysheet AI</small></div>
          <button type="button" onClick={() => setTerbuka(false)} aria-label="Tutup MindAI"><IkonMindAI nama="close" /></button>
        </header>

        <div ref={daftarPesan} className="mindai-messages" aria-live="polite">
          {messages.map((pesan, index) => <div className={`mindai-message ${pesan.role}`} key={`${pesan.role}-${index}`}><span>{formatIsiPesan(pesan.content, messages)}</span></div>)}
          {messages.length === 1 && <div className="mindai-suggestions">{saranPertanyaan.map((saran) => <button type="button" key={saran} onClick={() => void kirim(saran)}>{saran}</button>)}</div>}
          {loading && <div className="mindai-message assistant mindai-loading" aria-label="MindAI sedang mengetik"><span><i /><i /><i /></span></div>}
        </div>

        <form className="mindai-form" onSubmit={submit}>
          <input ref={kolomInput} value={input} onChange={(event) => setInput(event.target.value)} maxLength={500} placeholder="Tanyakan tentang Daysheet..." aria-label="Pesan untuk MindAI" disabled={loading} />
          <button type="submit" disabled={!input.trim() || loading} aria-label="Kirim pesan"><IkonMindAI nama="send" /></button>
        </form>
        <small className="mindai-note">MindAI dapat membuat kesalahan. Konfirmasi kebutuhan lewat WhatsApp.</small>
      </section>

      <button className="mindai-trigger" type="button" onClick={() => setTerbuka(!terbuka)} aria-expanded={terbuka} aria-label={terbuka ? "Tutup MindAI" : "Buka MindAI"}>
        <span><IkonMindAI nama={terbuka ? "close" : "spark"} /></span>
        <div><strong>Ask MindAI</strong><small>Admin Daysheet AI</small></div>
      </button>
    </aside>
  );
}
