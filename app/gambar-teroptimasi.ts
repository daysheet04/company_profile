export function normalisasiAlamatGambar(sumber: string) {
  if (!sumber || sumber.startsWith("http")) return sumber;
  return sumber.startsWith("/") ? sumber : `/${sumber}`;
}

export function gambarWebp(sumber: string, lebar: number) {
  const alamat = normalisasiAlamatGambar(sumber);
  const namaFile = alamat.split("/").at(-1)?.replace(/\.(?:png|jpe?g)$/i, "");
  return namaFile ? `/optimized/${namaFile}-${lebar}.webp` : alamat;
}

export function srcSetWebp(sumber: string, daftarLebar: readonly number[]) {
  return daftarLebar.map((lebar) => `${gambarWebp(sumber, lebar)} ${lebar}w`).join(", ");
}
