'use strict';

/**
 * Generates the ACC 101 app icons with zero dependencies.
 * Pure-Node PNG writer (node:zlib + node:fs only):
 *   - navy rounded-square background (#14365e)
 *   - gold border (#c9a227)
 *   - gold block-letter "A" built from rectangles
 *
 * Outputs:
 *   public/icons/icon-192.png
 *   public/icons/icon-512.png
 *   public/icons/apple-touch-icon.png (180px)
 */

const fs = require('node:fs');
const path = require('node:path');
const zlib = require('node:zlib');

const NAVY = [0x14, 0x36, 0x5e]; // #14365e
const GOLD = [0xc9, 0xa2, 0x27]; // #c9a227

/* ---------------- CRC32 (needed for PNG chunks) ---------------- */

const crcTable = new Int32Array(256);
for (let n = 0; n < 256; n += 1) {
  let c = n;
  for (let k = 0; k < 8; k += 1) c = (c & 1) ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  crcTable[n] = c;
}

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i += 1) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crc]);
}

/* ---------------- pixel art ---------------- */

function inRoundedRect(x, y, size, radius, inset) {
  const x0 = inset;
  const y0 = inset;
  const x1 = size - inset;
  const y1 = size - inset;
  if (x < x0 || x >= x1 || y < y0 || y >= y1) return false;
  const r = Math.max(0, radius - inset);
  if (r <= 0) return true;
  // Inside the straight-edge bands?
  if ((x >= x0 + r && x < x1 - r) || (y >= y0 + r && y < y1 - r)) return true;
  // Otherwise check the four corner circles.
  const corners = [
    [x0 + r, y0 + r],
    [x1 - 1 - r, y0 + r],
    [x0 + r, y1 - 1 - r],
    [x1 - 1 - r, y1 - 1 - r],
  ];
  for (const [cx, cy] of corners) {
    const dx = x - cx;
    const dy = y - cy;
    if (dx * dx + dy * dy <= r * r) return true;
  }
  return false;
}

/** Block-letter "A" from rectangles: two legs, a top bar, and a crossbar. */
function letterRects(size) {
  const w = size * 0.42;          // letter width
  const h = size * 0.50;          // letter height
  const t = size * 0.075;         // bar thickness
  const cx = size / 2;
  const top = (size - h) / 2;
  const left = cx - w / 2;
  return [
    { x0: left, y0: top, x1: left + t, y1: top + h },                 // left leg
    { x0: left + w - t, y0: top, x1: left + w, y1: top + h },        // right leg
    { x0: left, y0: top, x1: left + w, y1: top + t },                // top bar (apex)
    { x0: left, y0: top + h * 0.55, x1: left + w, y1: top + h * 0.55 + t }, // crossbar
  ];
}

function inRect(x, y, r) {
  return x >= r.x0 && x < r.x1 && y >= r.y0 && y < r.y1;
}

function renderIcon(size) {
  const radius = Math.round(size / 7);
  const borderW = Math.max(4, Math.round(size / 14));
  const rects = letterRects(size);
  const raw = Buffer.alloc(size * (1 + size * 4));
  let o = 0;
  for (let y = 0; y < size; y += 1) {
    raw[o] = 0; // filter type: None
    o += 1;
    for (let x = 0; x < size; x += 1) {
      let r = 0; let g = 0; let b = 0; let a = 0;
      if (inRoundedRect(x, y, size, radius, 0)) {
        a = 255;
        r = NAVY[0]; g = NAVY[1]; b = NAVY[2];
        if (!inRoundedRect(x, y, size, radius, borderW)) {
          r = GOLD[0]; g = GOLD[1]; b = GOLD[2]; // gold border ring
        }
        for (const rect of rects) {
          if (inRect(x, y, rect)) { r = GOLD[0]; g = GOLD[1]; b = GOLD[2]; break; }
        }
      }
      raw[o] = r; raw[o + 1] = g; raw[o + 2] = b; raw[o + 3] = a;
      o += 4;
    }
  }
  return raw;
}

function writePng(size, outPath) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;  // bit depth
  ihdr[9] = 6;  // color type: RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  const idat = zlib.deflateSync(renderIcon(size), { level: 9 });
  const png = Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', idat),
    chunk('IEND', Buffer.alloc(0)),
  ]);
  fs.writeFileSync(outPath, png);
  return png.length;
}

/* ---------------- main ---------------- */

function main() {
  const outDir = path.join(__dirname, '..', 'public', 'icons');
  fs.mkdirSync(outDir, { recursive: true });

  const targets = [
    { size: 192, name: 'icon-192.png' },
    { size: 512, name: 'icon-512.png' },
    { size: 180, name: 'apple-touch-icon.png' },
  ];

  for (const t of targets) {
    const p = path.join(outDir, t.name);
    const bytes = writePng(t.size, p);
    // Verify: file exists, non-empty, and starts with the PNG signature.
    const buf = fs.readFileSync(p);
    const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
    if (bytes <= 0 || !buf.subarray(0, 8).equals(sig)) {
      throw new Error('Icon verification failed for ' + p);
    }
    console.log('wrote ' + p + ' (' + t.size + 'x' + t.size + ', ' + bytes + ' bytes) — verified PNG');
  }
}

if (require.main === module) {
  main();
}

module.exports = { main };
