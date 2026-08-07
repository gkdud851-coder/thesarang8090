const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '../public/images');

const files = fs.readdirSync(imgDir);

console.log('Listing files in public/images:');
files.forEach(f => {
  const stat = fs.statSync(path.join(imgDir, f));
  if (stat.size > 2000 && !f.endsWith('.svg')) {
    console.log(`REAL IMAGE: ${f} (${stat.size} bytes)`);
  }
});

// Auto replace placeholders with real images
files.forEach(f => {
  if (f.endsWith('-1.jpg')) {
    const baseName = f.replace('-1.jpg', '.jpg');
    const sourcePath = path.join(imgDir, f);
    const destPath = path.join(imgDir, baseName);
    const stat = fs.statSync(sourcePath);
    if (stat.size > 2000) {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Copied ${f} -> ${baseName}`);
    }
  }
});

// Special name mappings if needed
if (fs.existsSync(path.join(imgDir, '아침.jpg'))) {
  const stat = fs.statSync(path.join(imgDir, '아침.jpg'));
  if (stat.size > 2000) {
    fs.copyFileSync(path.join(imgDir, '아침.jpg'), path.join(imgDir, '아침죽과일부추김치요플레.jpg'));
    console.log('Copied 아침.jpg -> 아침죽과일부추김치요플레.jpg');
  }
}

if (fs.existsSync(path.join(imgDir, '점심저녁2.jpg'))) {
  const stat = fs.statSync(path.join(imgDir, '점심저녁2.jpg'));
  if (stat.size > 2000) {
    fs.copyFileSync(path.join(imgDir, '점심저녁2.jpg'), path.join(imgDir, '점심저녁.jpg'));
    console.log('Copied 점심저녁2.jpg -> 점심저녁.jpg');
  }
}
