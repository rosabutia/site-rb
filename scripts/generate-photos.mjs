/**
 * Gera as galerias do site a partir das imagens em `src/images/2026 *`.
 *
 * O que faz:
 *  1. Lê apenas os arquivos soltos na raiz de cada pasta "2026 ..." (ignora subpastas).
 *  2. Escolhe no máximo 16 imagens por galeria, uniformemente distribuídas quando há mais.
 *  3. Gera versões redimensionadas/comprimidas (400 / 800 / 1600 px) em
 *     `src/images/galeria/` usando `sips` (nativo do macOS) — é isso que vai pro build.
 *  4. Escreve `src/photos/photos.js` com `srcSet` responsivo para cada foto.
 *
 * Uso: npm run photos
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const IMAGES_DIR = join(ROOT, "src", "images");
const OUT_IMAGES_DIR = join(IMAGES_DIR, "galeria");
const OUT_FILE = join(ROOT, "src", "photos", "photos.js");

const MAX_PER_GALLERY = 16;
const WIDTHS = [400, 800, 1600];
const QUALITY = 72;
const IMAGE_RE = /\.(jpe?g|png)$/i;

const GALLERIES = [
  { folder: "2026 chalé 1", key: "chale1", alt: "Chalé #1 — Villa Rosa Butiá" },
  { folder: "2026 chalé 2", key: "chale2", alt: "Chalé #2 — Villa Rosa Butiá" },
  { folder: "2026 chalé 3", key: "chale3", alt: "Chalé #3 — Villa Rosa Butiá" },
  { folder: "2026 externas", key: "externas", alt: "Villa Rosa Butiá — áreas externas" },
];

/** Amostra `max` itens uniformemente distribuídos ao longo de `arr` (mantém 1º e último). */
function pickEvenly(arr, max) {
  if (arr.length <= max) return arr;
  const out = [];
  for (let i = 0; i < max; i++) {
    out.push(arr[Math.round((i * (arr.length - 1)) / (max - 1))]);
  }
  return out;
}

/** Lê largura/altura em pixels via `sips`. */
function imageSize(absPath) {
  const output = execFileSync(
    "sips",
    ["-g", "pixelWidth", "-g", "pixelHeight", absPath],
    { encoding: "utf8" },
  );
  const width = Number(output.match(/pixelWidth:\s*(\d+)/)?.[1]);
  const height = Number(output.match(/pixelHeight:\s*(\d+)/)?.[1]);
  if (!width || !height) throw new Error(`sips não retornou dimensões para ${absPath}`);
  return { width, height };
}

/** Redimensiona (lado maior = `maxSide`) e recomprime como JPEG. */
function resample(srcPath, destPath, maxSide) {
  execFileSync("sips", [
    "-s", "format", "jpeg",
    "-s", "formatOptions", String(QUALITY),
    "-Z", String(maxSide),
    srcPath,
    "--out", destPath,
  ]);
}

rmSync(OUT_IMAGES_DIR, { recursive: true, force: true });
mkdirSync(OUT_IMAGES_DIR, { recursive: true });

const sections = GALLERIES.map(({ folder, key, alt }) => {
  const dir = join(IMAGES_DIR, folder);
  const files = readdirSync(dir)
    .filter((name) => IMAGE_RE.test(name))
    .sort((a, b) => a.localeCompare(b, "pt", { numeric: true, sensitivity: "base" }));

  const chosen = pickEvenly(files, MAX_PER_GALLERY);
  console.log(`${folder}: ${chosen.length}/${files.length} imagens`);

  const entries = chosen.map((name, i) => {
    const srcPath = join(dir, name);
    const { width, height } = imageSize(srcPath);
    const scale = (w) => Math.min(1, w / Math.max(width, height));
    const slug = `${key}-${String(i + 1).padStart(2, "0")}`;

    const sizes = WIDTHS.map((maxSide) => {
      const file = `${slug}-${maxSide}.jpg`;
      resample(srcPath, join(OUT_IMAGES_DIR, file), maxSide);
      return {
        file,
        width: Math.round(width * scale(maxSide)),
        height: Math.round(height * scale(maxSide)),
      };
    });

    const full = sizes[sizes.length - 1];
    const srcSet = sizes
      .map((s) => `{ src: img(${JSON.stringify(s.file)}), width: ${s.width}, height: ${s.height} }`)
      .join(", ");

    return (
      `    {\n` +
      `      src: img(${JSON.stringify(full.file)}),\n` +
      `      width: ${full.width},\n` +
      `      height: ${full.height},\n` +
      `      alt: ${JSON.stringify(alt)},\n` +
      `      srcSet: [${srcSet}],\n` +
      `    },`
    );
  });

  return `  ${key}: [\n${entries.join("\n")}\n  ],`;
});

const body = `// ARQUIVO GERADO por scripts/generate-photos.mjs — não edite à mão.
// Para atualizar as galerias, rode: npm run photos

const assets = import.meta.glob("../images/galeria/*.jpg", {
  eager: true,
  import: "default",
  query: "?url",
});

function img(file) {
  const match = Object.entries(assets).find(([key]) => key.endsWith(\`/\${file}\`));
  if (!match) throw new Error(\`Imagem não encontrada: \${file}\`);
  return match[1];
}

export const galleries = {
${sections.join("\n")}
};
`;

writeFileSync(OUT_FILE, body);
console.log(`\nEscrito: ${OUT_FILE}`);
console.log(`Imagens otimizadas: ${OUT_IMAGES_DIR}`);
