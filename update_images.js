const fs = require('fs');

let content = fs.readFileSync('data/characters.ts', 'utf8');
const generatedImages = ['yoichi-isagi', 'meguru-bachira', 'hyoma-chigiri', 'seishiro-nagi', 'baro-shinjo', 'reo-mikage'];

const newContent = content.replace(/image: '\/images\/fallback-avatar\.svg'/g, (match, offset, str) => {
  const beforeStr = str.substring(Math.max(0, offset - 100), offset);
  const idMatch = beforeStr.match(/id:\s*'([^']+)'/);
  if (idMatch && idMatch[1]) {
    const id = idMatch[1];
    if (generatedImages.includes(id)) {
      return `image: '/images/characters/${id}.png'`;
    } else {
      const parts = id.split('-');
      const initial = parts.length > 1 
        ? parts[0][0].toUpperCase() + parts[1][0].toUpperCase() 
        : parts[0][0].toUpperCase();
      return `image: 'https://api.dicebear.com/7.x/initials/svg?seed=${initial}&backgroundColor=1e293b,0ea5e9&textColor=ffffff&fontWeight=700'`;
    }
  }
  return match;
});

fs.writeFileSync('data/characters.ts', newContent);
console.log('Updated characters.ts');
