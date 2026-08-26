export type ProdukTemplate = {
  nomor: string;
  slug: string;
  nama: string;
  kategori: string;
  deskripsi: string;
  gambar: string;
  demo: string;
  demoSheet: string;
  tautan: string;
  fitur: string[];
};

export type PortofolioKustom = {
  nomor: string;
  slug?: string;
  nama: string;
  kategori: string;
  deskripsi: string;
  gambar: string;
  demo: string;
  demoSheet?: string;
};

export const produkTemplate: ProdukTemplate[] = [
  {
    nomor: "01",
    slug: "Financial-Planner-V3",
    nama: "Financial Planner V3",
    kategori: "Personal Finance",
    deskripsi: "Template pengelolaan keuangan pribadi untuk mencatat pemasukan, pengeluaran, tabungan, dan saldo bank dalam satu tempat. Semua transaksi dan perkembangan keuangan langsung terupdate otomatis di dashboard.",
    gambar: "/Financev3.png",
    demo: "/demo/Financial-Planner-V3",
    demoSheet: "https://docs.google.com/spreadsheets/d/18urex3EZim3foztiirTTKnCQ8pV2g9Jd2jrGX_NBqLk/edit?gid=1556662875#gid=1556662875",
    tautan: "https://lynk.id/daysheet/41mmqo71ln5v",
    fitur: ["Arus kas", "Rekap pemasukan dan pengeluaran", "Ringkasan keuangan bulanan"],
  },
  {
    nomor: "02",
    slug: "F&B-FINANCE",
    nama: "Finance FnB + HPP Calculator",
    kategori: "F&B Finance",
    deskripsi: "Sistem spreadsheet untuk mencatat penjualan dan keuangan bisnis, menghitung HPP berdasarkan biaya termasuk upah karyawan, serta memantau omzet dan laba secara otomatis.",
    gambar: "/f&b.png",
    demo: "/demo/F&B-FINANCE",
    demoSheet: "https://docs.google.com/spreadsheets/d/1MZ4Y7opLUpe-3hYmMIKDaRauRUUiLxM_QZ4ux7EiG6U/edit?gid=1246299419#gid=1246299419",
    tautan: "https://lynk.id/daysheet/jg5erj23l7ve",
    fitur: ["Ringkasan KPI", "Visualisasi data", "Filter laporan berkala"],
  },
  {
    nomor: "03",
    slug: "inventory-control-v1",
    nama: "Inventory Control V1",
    kategori: "Inventory",
    deskripsi: "Semua pencatatan stok jadi lebih rapi dalam satu template. Mulai dari stok masuk, keluar, opname, adjustment, sampai monitoring kondisi stok.",
    gambar: "/produk1.png",
    demo: "/demo/inventory-control-v1",
    demoSheet: "https://docs.google.com/spreadsheets/d/1cb1jeyUpv3ODewUhXNHwf1Fr7XWDkTGuwxC6UVjwI0s/edit?gid=1519444436#gid=1519444436",
    tautan: "https://lynk.id/daysheet/pyrexx1d1e4d",
    fitur: ["Ringkasan stok", "Pencatatan barang masuk dan keluar", "Tampilan laporan yang mudah dibaca"],
  },
  {
    nomor: "04",
    slug: "template-04",
    nama: "Template 04",
    kategori: "Penjualan",
    deskripsi: "Sistem pencatatan penjualan yang membantu tim memantau transaksi dan performa secara berkala.",
    gambar: "",
    demo: "#kontak-produk",
    demoSheet: "",
    tautan: "#",
    fitur: ["Rekap transaksi", "Performa produk", "Laporan penjualan"],
  },
  {
    nomor: "05",
    slug: "template-05",
    nama: "Template 05",
    kategori: "Operasional",
    deskripsi: "Template operasional untuk membuat proses kerja rutin lebih terstruktur dan mudah ditinjau.",
    gambar: "",
    demo: "#kontak-produk",
    demoSheet: "",
    tautan: "#",
    fitur: ["Daftar pekerjaan", "Monitoring progres", "Rekap aktivitas tim"],
  },
];

export const portofolioKustom: PortofolioKustom[] = [
  { nomor: "01", slug: "Sistem-Monitoring-Sertifikat-Pegawai", nama: "Sistem Monitoring Sertifikat Pegawai", kategori: "Data Management", deskripsi: "Sistem spreadsheet untuk memantau sertifikat pejabat perbendaharaan, mulai dari status aktif, masa berlaku, hingga sertifikat yang mendekati kedaluwarsa.", gambar: "/kementrian1.png", demo: "/demo/Sistem-Monitoring-Sertifikat-Pegawai", demoSheet: "https://docs.google.com/spreadsheets/d/1_ajRs7bQTjAqI4-NUERbDnheOL1frYYoBFfdYVpUfEs/edit?gid=360465779#gid=360465779" },
  { nomor: "02", slug: "Dashboard-Quality-Assurance-Laboratory", nama: "Dashboard Quality Assurance Laboratory", kategori: "QUALITY CONTROL", deskripsi: "Dashboard monitoring hasil pengujian laboratorium untuk memantau jumlah sampel, rata-rata hasil sampling, kesesuaian terhadap standar, serta tren kualitas produk secara berkala.", gambar: "/pas.png", demo: "/demo/Dashboard-Quality-Assurance-Laboratory", demoSheet: "https://datastudio.google.com/embed/reporting/0b3708bd-7924-4663-8de5-1b06576e6667/page/TCM5F" },
  { nomor: "03", slug: "Dashboard-Operasional-Photo-Studio", nama: "Dashboard Operasional Photo Studio", kategori: "Pelaporan", deskripsi: "Dashboard untuk memantau order, pemasukan, pengeluaran, pendapatan bersih, jenis layanan, serta performa fotografer dalam operasional photo studio.", gambar: "/nadya.png", demo: "/demo/Dashboard-Operasional-Photo-Studio", demoSheet: "https://docs.google.com/spreadsheets/d/1dhKQAJ3ZwlYARtrt2u3a4j9VP6W932ZAsWGFjB_prMU/edit?gid=801995491#gid=801995491" },
  { nomor: "04", slug: "Task-Planner", nama: "Task Planner", kategori: "PRODUKTIVITAS", deskripsi: "Dashboard perencanaan untuk memantau tugas, project, dan lomba berdasarkan prioritas, deadline, progres pengerjaan, serta sisa waktu secara terstruktur.", gambar: "/forbitask.png", demo: "/demo/Task-Planner", demoSheet: "https://docs.google.com/spreadsheets/d/1o5_YkNC727ZGEsHS0wk5omv-ZrfdKc4e-tu5aQwfc60/edit?gid=1682383852#gid=1682383852" },
  { nomor: "05", slug: "Sistem-Keuangan-Proyek", nama: "Sistem Keuangan Proyek", kategori: "Otomatisasi", deskripsi: "Sistem spreadsheet untuk mengelola keuangan proyek, mulai dari pemasukan, pengeluaran, margin, nilai kontrak, piutang, pembayaran, hingga status proyek.", gambar: "proyek.png", demo: "/demo/Sistem-Keuangan-Proyek", demoSheet: "https://docs.google.com/spreadsheets/d/1IU4a7pGTjr35I97zytX-3nxlVnqF4JsiaRh2dzNOV-I/edit?gid=306612997#gid=306612997" },
];
