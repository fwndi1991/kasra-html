const allImages = [
{ src: 'images/02394819-4606-4338-b999-29e0829ffd79.JPG', alt: 'عکس ۱' },
{ src: 'images/918a4063-8a7b-4012-ac15-55bcc09f4e02.JPG', alt: 'عکس ۱۲' },
  { src: 'images/IMG_5835.jpg', alt: 'عکس ۷۶' },
  { src: 'images/149cd08b-c080-4160-a214-5ab1483c3d40.JPG', alt: 'عکس ۳' },
  { src: 'images/9b3748f5-1874-4dc9-93a2-0ed94ceb7ace.JPG', alt: 'عکس ۱۶' },
  { src: 'images/9258e3b6-c83e-4813-a3de-225da88c6f1c.JPG', alt: 'عکس ۱۳' },
  { src: 'images/IMG_6946.jpg', alt: 'عکس ۹۶' },
  { src: 'images/367cf43c-bc3f-493f-8f7c-05b490b859b8.JPG', alt: 'عکس ۴' },
  { src: 'images/IMG_1604.jpg', alt: 'عکس ۴۲' },
  { src: 'images/5b32a788-c805-4e9c-9b9c-7938fe8ae976.JPG', alt: 'عکس ۶' },
  { src: 'images/IMG_2076.jpg', alt: 'عکس ۴۵' },
  { src: 'images/IMG_6859.jpg', alt: 'عکس ۹۲' },
  { src: 'images/IMG_4174.PNG', alt: 'عکس ۶۹' },
  { src: 'images/6D7AABE4-EC43-4F43-80A5-7AC45275FF6E.JPG', alt: 'عکس ۸' },
  { src: 'images/IMG_6852.jpg', alt: 'عکس ۹۰' },
  { src: 'images/3d23e36c-2c80-4ca9-8ad8-c997c21593ee.JPG', alt: 'عکس ۵' },
  { src: 'images/IMG_9496.jpg', alt: 'عکس ۱۰۷' },
  { src: 'images/IMG_0287.jpg', alt: 'عکس ۲۸' },
  { src: 'images/E0ADBDB9-2B7E-40D5-B28C-6FF7196E4E51.JPEG', alt: 'عکس ۲۰' },
  { src: 'images/IMG_9679.JPG', alt: 'عکس ۱۰۹' },
  { src: 'images/IMG_0274.jpg', alt: 'عکس ۲۵' },
  { src: 'images/IMG_1983.jpg', alt: 'عکس ۴۴' },
  { src: 'images/IMG_7349.jpg', alt: 'عکس ۹۸' },
  { src: 'images/IMG_5837.jpg', alt: 'عکس ۷۷' },
  { src: 'images/IMG_9492.JPG', alt: 'عکس ۱۰۶' },
  { src: 'images/IMG_6041.JPG', alt: 'عکس ۸۳' },
  { src: 'images/IMG_1090.jpg', alt: 'عکس ۳۷' },
  { src: 'images/IMG_5157.jpg', alt: 'عکس ۷۱' },
  { src: 'images/IMG_5244.jpg', alt: 'عکس ۷۴' },
  { src: 'images/IMG_0954.jpg', alt: 'عکس ۳۴' },
  { src: 'images/IMG_6864.jpg', alt: 'عکس ۹۵' },
  { src: 'images/IMG_6307.PNG', alt: 'عکس ۸۸' },
  { src: 'images/8F7CA234-F916-404B-8ED6-88158A19DB41.JPG', alt: 'عکس ۱۱' },
  { src: 'images/D7ABC97F-24E0-439B-9743-EC7B97E8D6B7.JPG', alt: 'عکس ۱۹' },
  { src: 'images/D073E2BB-2E83-48CC-B404-700225DF9E0B.JPG', alt: 'عکس ۱۷' },
  { src: 'images/IMG_0946.jpg', alt: 'عکس ۳۳' },
  { src: 'images/b4671d42-8c26-4454-aebc-697d288568b7.JPG', alt: 'عکس ۱۱۱' },
  { src: 'images/IMG_3688.jpg', alt: 'عکس ۶۵' },
  { src: 'images/IMG_0280.jpg', alt: 'عکس ۲۷' },
  { src: 'images/IMG_1467.jpg', alt: 'عکس ۴۰' },
  { src: 'images/IMG_6040.JPG', alt: 'عکس ۸۲' },
  { src: 'images/IMG_3625.jpg', alt: 'عکس ۶۴' },
  { src: 'images/IMG_1468.jpg', alt: 'عکس ۴۱' },
  { src: 'images/IMG_2349.jpg', alt: 'عکس ۵۱' },
  { src: 'images/IMG_2204.PNG', alt: 'عکس ۴۶' },
  { src: 'images/93fe143d-b722-4278-a612-006af41f37a9.JPG', alt: 'عکس ۱۴' },
  { src: 'images/IMG_2700.JPG', alt: 'عکس ۵۳' },
  { src: 'images/da69c6d4-1c1d-4258-91f5-08b04f8483a9.JPG', alt: 'عکس ۱۱۳' },
  { src: 'images/IMG_7249.jpg', alt: 'عکس ۹۷' },
  { src: 'images/IMG_6045.JPG', alt: 'عکس ۸۵' },
  { src: 'images/IMG_6028.JPG', alt: 'عکس ۸۱' },
  { src: 'images/IMG_6004.PNG', alt: 'عکس ۸۰' },
  { src: 'images/IMG_2933.jpg', alt: 'عکس ۵۶' },
  { src: 'images/IMG_2205.PNG', alt: 'عکس ۴۷' },
  { src: 'images/IMG_0889.jpg', alt: 'عکس ۳۲' },
  { src: 'images/IMG_2349-2.JPG', alt: 'عکس ۵۰' },
  { src: 'images/IMG_9680.JPG', alt: 'عکس ۱۱۰' },
  { src: 'images/9EF1B169-7FED-4BD2-9B1F-BDC74E775C3D.JPEG', alt: 'عکس ۱۵' },
  { src: 'images/IMG_1607.jpg', alt: 'عکس ۴۳' },
  { src: 'images/IMG_0279.jpg', alt: 'عکس ۲۶' },
  { src: 'images/IMG_6860.jpg', alt: 'عکس ۹۳' },
  { src: 'images/IMG_9489.jpg', alt: 'عکس ۱۰۵' },
  { src: 'images/FullSizeRender.JPG', alt: 'عکس ۲۴' },
  { src: 'images/IMG_2351 2.JPG', alt: 'عکس ۵۲' },
  { src: 'images/IMG_3273.JPG', alt: 'عکس ۵۹' },
  { src: 'images/FDC7CCDC-6A3C-4590-A11A-D0D2B80D62AB.JPEG', alt: 'عکس ۲۳' },
  { src: 'images/IMG_5179 2.jpg', alt: 'عکس ۷۲' },
];

const images = allImages;

let lightboxIndex = null;

function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = images.map((img, idx) => {
    if (img.type === 'video') {
      return `
        <div class="gallery-item gallery-video" onclick="openLightbox(${idx})">
          <video src="${img.src}" muted></video>
          <div class="video-play-icon">
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>`;
    }
    return `
      <div class="gallery-item" onclick="openLightbox(${idx})">
        <img src="${img.src}" alt="${img.alt}" loading="lazy">
      </div>`;
  }).join('');
}

function openLightbox(idx) {
  lightboxIndex = idx;
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');

  const item = images[idx];
  lightboxImage.innerHTML = '';

  if (item.type === 'video') {
    const video = document.createElement('video');
    video.src = item.src;
    video.controls = true;
    video.autoplay = true;
    video.style.cssText = 'width:100%;height:100%;object-fit:contain;border-radius:0.75rem;';
    lightboxImage.appendChild(video);
  } else {
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;
    img.style.cssText = 'width:100%;height:100%;object-fit:contain;border-radius:0.75rem;';
    lightboxImage.appendChild(img);
  }

  lightbox.classList.add('active');
}

function closeLightbox() {
  lightboxIndex = null;
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  lightboxImage.querySelectorAll('video').forEach(v => { v.pause(); v.src = ''; });
  lightbox.classList.remove('active');
}

function nextImage() {
  if (lightboxIndex !== null && lightboxIndex < images.length - 1) {
    openLightbox(lightboxIndex + 1);
  }
}

function prevImage() {
  if (lightboxIndex !== null && lightboxIndex > 0) {
    openLightbox(lightboxIndex - 1);
  }
}

document.getElementById('lightbox').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (e) => {
  if (lightboxIndex === null) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') nextImage();
  if (e.key === 'ArrowRight') prevImage();
});

let touchStartX = 0;
let touchStartY = 0;

document.getElementById('lightbox').addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });

document.getElementById('lightbox').addEventListener('touchend', (e) => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
    if (dx < 0) nextImage();
    else prevImage();
  }
}, { passive: true });

renderGallery();
