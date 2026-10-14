import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const publicDir = path.join(root, "public");
const outputDir = path.join(publicDir, "optimized");

const images = [
  { file: "hero-chaos-spreadsheet.png", widths: [480, 640, 720, 960, 1280], quality: 78 },
  { file: "gambarhome.png", widths: [320, 480, 640, 720, 960], quality: 82 },
  { file: "Financev3.png", widths: [320, 480, 640, 720, 960], quality: 84 },
  { file: "f&b.png", widths: [320, 480, 640, 720, 960], quality: 84 },
  { file: "produk1.png", widths: [320, 480, 640, 720, 960], quality: 84 },
  { file: "kementrian1.png", widths: [320, 480, 640, 720, 960], quality: 84 },
  { file: "pas.png", widths: [320, 480, 640, 720, 960], quality: 84 },
  { file: "nadya.png", widths: [320, 480, 640, 720, 960], quality: 84 },
  { file: "forbitask.png", widths: [320, 480, 640, 720, 960], quality: 84 },
  { file: "proyek.png", widths: [320, 480, 640, 720, 960], quality: 84 },
  { file: "simple.png", widths: [320, 480, 640, 720, 960], quality: 84 },
  { file: "logo-daysheet.png", widths: [96, 192], quality: 90 },
];

await mkdir(outputDir, { recursive: true });

for (const image of images) {
  const input = path.join(publicDir, image.file);
  const base = path.parse(image.file).name;

  for (const width of image.widths) {
    const output = path.join(outputDir, `${base}-${width}.webp`);
    await sharp(input)
      .resize({ width, withoutEnlargement: false })
      .webp({ quality: image.quality, effort: 5, smartSubsample: true })
      .toFile(output);
  }
}

await sharp(path.join(publicDir, "logo-daysheet.png"))
  .resize({ width: 192 })
  .png({ compressionLevel: 9, palette: true })
  .toFile(path.join(outputDir, "logo-daysheet-192.png"));

console.log(`Generated ${images.reduce((total, image) => total + image.widths.length, 1)} optimized images in ${outputDir}`);
