const fs = require('fs');
const path = require('path');

const filenames = [
  '센터사진43', '실내산책', '센터사진6', '건강체크', '대표원장 인삿말', '원장인삿말',
  '사연자어르신숲체험사진', '어르신등산화', '등산화와함께찰칵',
  '숲체험', '숲체험2', '숲체험4', '무등산숲체험', '가을숲체험',
  '맛집탐방', '맛집탐방2', '맛집탐방3', '맛집탐방4', '맛집탐방5',
  '토요시장체험', '토요시장체험2', '가족과함께참여하는프로그램',
  '슬링', '바디스파이크2', '스모비운동기구', '족욕', '아침체조',
  '인지프로그램', '인지프로그램2', '팀대결', '딸기실내체험',
  '문화예술공연', '문화예술공연2', '문화예술공연3', '문화예술공연4', '어르신들송년공연', '어르신들이준비한송년공연2', '생신체험',
  '건강체크1', '아침죽과일부추김치요플레', '점심저녁', '오후간식떡케이크주스',
  '센터사진', '센터사진2', '센터사진3', '센터사진5', '센터사진7', '센터사진8카페테리아'
];

const dirs = [
  path.join(__dirname, '../public/images'),
  path.join(__dirname, '../images')
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

filenames.forEach(name => {
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <rect width="100%" height="100%" fill="#E8EDE4"/>
  <rect x="20" y="20" width="760" height="560" fill="none" stroke="#7A9070" stroke-width="2" stroke-dasharray="8 8" rx="8"/>
  <circle cx="400" cy="260" r="60" fill="#1F3D2B" opacity="0.15"/>
  <path d="M360 300 L400 230 L440 300 Z" fill="#1F3D2B" opacity="0.4"/>
  <path d="M380 300 L420 220 L460 300 Z" fill="#7A9070" opacity="0.5"/>
  <text x="400" y="380" font-family="'Pretendard', sans-serif" font-size="24" font-weight="bold" fill="#1F3D2B" text-anchor="middle">${name}</text>
  <text x="400" y="420" font-family="'Pretendard', sans-serif" font-size="16" fill="#7A9070" text-anchor="middle">더사랑 주간보호센터</text>
</svg>`;

  dirs.forEach(dir => {
    fs.writeFileSync(path.join(dir, `${name}.jpg`), svgContent);
    fs.writeFileSync(path.join(dir, `${name}.svg`), svgContent);
  });
});

console.log('Successfully generated image placeholders');
