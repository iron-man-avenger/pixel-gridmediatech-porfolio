import fs from 'fs';
import path from 'path';
import potrace from 'potrace';

function traceMask(maskPath, color) {
  return new Promise((resolve, reject) => {
    const params = {
      color: color,
      threshold: 128,
      optCurve: true,
      turnPolicy: potrace.Potrace.TURNPOLICY_MINORITY,
      turdSize: 2,
      alphaMax: 1
    };
    potrace.trace(maskPath, params, (err, svg) => {
      if (err) reject(err);
      else resolve(svg);
    });
  });
}

const extractPath = (svgStr, fill) => {
  const pMatch = svgStr.match(/<path\s+[^>]*d="([^"]+)"[^>]*>/);
  return pMatch ? `<path fill="${fill}" fill-rule="evenodd" d="${pMatch[1]}" />` : '';
};

async function buildSvgPair(tealMask, orangeMask, outFile, label) {
  const publicDir = 'C:/Users/LOTUS IT SOLUTION/OneDrive - PIYTECH SOLUTIONS/Documents/pixelgrid/public';
  const scratchDir = 'C:/Users/LOTUS IT SOLUTION/.gemini/antigravity/brain/d923de3a-45ae-4eae-8f9d-3406c0f2fd54/scratch';

  console.log(`Generating ${label}...`);
  const tealSvg = await traceMask(path.join(scratchDir, tealMask), '#063037');
  const orangeSvg = await traceMask(path.join(scratchDir, orangeMask), '#C45B2B');

  const vbMatch = tealSvg.match(/viewBox="([^"]+)"/);
  const viewBox = vbMatch ? vbMatch[1] : '0 0 1000 1000';

  const tealPath = extractPath(tealSvg, '#063037');
  const orangePath = extractPath(orangeSvg, '#C45B2B');

  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="100%" height="100%">
  <!-- PixelGrid™ ${label} - Infinitely Scalable Vector (Print, Business Cards, 300+ DPI, Billboards) -->
  <g id="pixelgrid-teal" fill="#063037">
    ${tealPath}
  </g>
  <g id="pixelgrid-orange" fill="#C45B2B">
    ${orangePath}
  </g>
</svg>`;

  fs.writeFileSync(path.join(publicDir, outFile), svgContent);
  console.log(`Saved: ${outFile}`);
}

async function run() {
  await buildSvgPair('teal_mask_horiz.png', 'orange_mask_horiz.png', 'pixelgrid-logo.svg', 'Horizontal Lockup');
  await buildSvgPair('teal_mask_mark.png', 'orange_mask_mark.png', 'pixelgrid-mark.svg', 'P Grid Icon Mark');
  await buildSvgPair('teal_mask_stacked.png', 'orange_mask_stacked.png', 'pixelgrid-stacked.svg', 'Stacked Logo');
  console.log('ALL VECTOR SVG ASSETS GENERATED SUCCESSFULLY!');
}

run().catch(console.error);
