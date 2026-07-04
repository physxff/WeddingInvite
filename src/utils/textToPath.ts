import * as opentype from "opentype.js";

let fontPromise: Promise<any> | null = null;

async function loadFont() {
  if (!fontPromise) {
    fontPromise = fetch("/fonts/BadScript-Regular.ttf")
      .then((res) => res.arrayBuffer())
      .then((buffer) => opentype.parse(buffer));
  }

  return fontPromise;
}

export async function textToPath(text: string) {
  const font = await loadFont();

  const fontSize = 140;
  const path = font.getPath(text, 0, 140, fontSize);

  return path.toPathData();
}