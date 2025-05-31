const galleries = {
  sewing: [
    { src: 'sewing1.png', alt: 'Sewing Project 1' },
    { src: 'sewing2.png', alt: 'Sewing Project 2' },
  ],
  writing: [
    { src: 'writing1.png', alt: 'Writing Sample 1' },
  ],
  calligraphy: [
    { src: 'calligraphy1.png', alt: 'Calligraphy Art 1' },
  ],
  'graphic-design': [
    { src: 'graphic1.png', alt: 'Graphic Design 1' },
  ],
};

const galleryContainer = document.getElementById('gallery-container');
const flipbookContainer = document.querySelector('#flipbook-container');
const modal = document.querySelector('.modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');
const modalClose = document.getElementById('modal-close');

let pageFlipInstance = null;

function showGallery(category) {
  galleryContainer.innerHTML = '';

  // Destroy existing flipbook if switching category
  if (pageFlipInstance) {
    pageFlipInstance.destroy();
    pageFlipInstance = null;
  }

  if (category === 'zines') {
    flipbookContainer.style.display = 'block';
    galleryContainer.style.display = 'none';

  } else {
    flipbookContainer.style.display = 'none';
    galleryContainer.style.display = 'flex';

    if (!galleries[category]) {
      console.warn(`No gallery found for category: ${category}`);
      return;
    }

    galleries[category].forEach((imgData, index) => {
      const img = document.createElement('img');
      img.src = imgData.src;
      img.alt = imgData.alt;
      img.className = 'thumbnail';
      img.dataset.category = category;
      img.dataset.index = index;
      img.style.cursor = 'pointer';
      img.loading = 'lazy';

      img.addEventListener('click', () => openModal(category, index));
      galleryContainer.appendChild(img);
    });
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const swiper1 = new Swiper('.zine-swiper-1', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    allowTouchMove: false,
    navigation: {
      nextEl: '.zine-next-1',
      prevEl: '.zine-prev-1',
    },
  });

  const swiper2 = new Swiper('.zine-swiper-2', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    allowTouchMove: false,
    navigation: {
      nextEl: '.zine-next-2',
      prevEl: '.zine-prev-2',
    },
  });

  const swiper3 = new Swiper('.zine-swiper-3', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    allowTouchMove: false,
    navigation: {
      nextEl: '.zine-next-3',
      prevEl: '.zine-prev-3',
    },
  });
});  // <-- Close your DOMContentLoaded listener here
