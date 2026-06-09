const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  { name: 'hero-building.webp', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80' },
  { name: 'mid-building.webp', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80' },
  { name: 'house-side.webp', url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80' },
  { name: 'corridor.webp', url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80' },
  { name: 'carousel-building.webp', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80' },
  { name: 'house-circle.webp', url: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80' },
  { name: 'store-small.webp', url: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=600&q=80' },
  { name: 'store-large.webp', url: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1600&q=80' }
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      }
      const writeStream = fs.createWriteStream(filepath);
      res.pipe(writeStream);
      writeStream.on('finish', () => {
        writeStream.close();
        resolve();
      });
    }).on('error', reject);
  });
};

async function main() {
  const dir = path.join(__dirname, 'public', 'images');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  for (const img of images) {
    console.log(`Downloading ${img.name}...`);
    try {
      await downloadImage(img.url, path.join(dir, img.name));
      console.log(`Saved ${img.name}`);
    } catch (e) {
      console.error(`Failed ${img.name}:`, e);
    }
  }
}

main();
