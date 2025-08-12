// Array of image paths
const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg'
];

let currentIndex = 0;
const sliderImage = document.getElementById('slider-image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Display the current image
function showImage(index) {
  sliderImage.src = images[index];
}

// Show next image
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Show previous image
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Event listeners
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Automatic slideshow every 3 seconds
setInterval(nextImage, 3000);

// Show first image on load
window.onload = () => showImage(currentIndex);
