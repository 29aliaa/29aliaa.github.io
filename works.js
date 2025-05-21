// Your gallery data - update image paths & alt text as needed
const galleries = {
  sewing: [
    { src: 'sewing1.png', alt: 'Sewing Project 1' },
    { src: 'sewing2.png', alt: 'Sewing Project 2' },
    // add more images
  ],
  zines: [
    { src: 'zine1.png', alt: 'Zine 1' },
    { src: 'zine2.png', alt: 'Zine 2' },
  ],
  writing: [
    { src: 'writing1.png', alt: 'Writing sample 1' },
  ],
  calligraphy: [
    { src: 'calligraphy1.png', alt: 'Calligraphy Art 1' },
  ],
  'graphic-design': [
    { src: 'graphic1.png', alt: 'Graphic Design 1' },
  ],
};

const galleryContainer = document.getElementById('gallery-container');
const modal = document.querySelector('.modal');       // use class selector to match your CSS
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');
const modalClose = document.getElementById('modal-close');

// Show default gallery on page load
showGallery('sewing');

// Function to show images grid
function showGallery(category) {
  galleryContainer.innerHTML = '';
  if (!galleries[category]) return;

  galleries[category].forEach((imgData, index) => {
    const img = document.createElement('img');
    img.src = imgData.src;
    img.alt = imgData.alt;
    img.className = 'thumbnail';
    img.dataset.category = category;
    img.dataset.index = index;

    img.addEventListener('click', () => {
      openModal(category, index);
    });

    galleryContainer.appendChild(img);
  });
}

// Open modal to view large image
function openModal(category, index) {
  const imgData = galleries[category][index];
  modal.style.display = 'flex';     // show modal (flex from your CSS)
  modalImg.src = imgData.src;
  modalImg.alt = imgData.alt;
  modalCaption.textContent = imgData.alt;
}

// Close modal when clicking X
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Also close modal if clicking outside image in modal
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Link category buttons to update gallery
document.querySelectorAll('.buttons a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // prevent page reload
    // Get category from alt text of image inside the link, convert spaces to hyphens
    const category = link.querySelector('img').alt.toLowerCase().replace(/\s+/g, '-');
    showGallery(category);
  });
});
img.style.cursor = 'pointer';
