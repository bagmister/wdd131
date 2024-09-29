const hamburgerMenu = document.querySelector('.hamburger')
const offScreenMenu = document.querySelector('.off-screen-menu')
const navigationMenu = document.querySelector('.navigation')
const galleryHeader = document.querySelector('#gallery-header')

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
});

navigationMenu.addEventListener('click', (event) => {
  const navMenuText = event.target.title;
  galleryHeader.textContent = navMenuText;
});

offScreenMenu.addEventListener('click', (event) => {
  const navMenuText = event.target.title;
  galleryHeader.textContent = navMenuText;
});

const imageUrls = [
  'images/temples/jordan_river_temple_lds.jpeg',
  'images/temples/laie_temple.jpeg',
  'images/temples/lds_temple_bountiful_utah.jpeg',
  'images/temples/logan_utah_temple_flag.jpeg',
  'images/temples/manti_temple_lds.jpeg',
  'images/temples/mesa_temple_reflection.jpeg',
  'images/temples/payson_temple_evening.jpeg',
  'images/temples/provo_city_center_temple.jpeg',
  'images/temples/salt_lake_temple.jpeg'

];

function populateGallery() {
  const gallery = document.querySelector('.gallery');

  imageUrls.forEach(url => {
      const figure = document.createElement('figure');
      const regex = /([^/]+)(?=\.jpeg$)/;
      const path = url
      const imageAlt = path.match(regex);
      const filenameWithSpaces = imageAlt[1].replace(/_/g, ' ');
      const capitalized = filenameWithSpaces
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      const img = document.createElement('img');
      img.src = url;
      img.alt = imageAlt;

      const figcaption = document.createElement('figcaption');
      figcaption.textContent = capitalized;

      figure.appendChild(img);
      figure.appendChild(figcaption);

      gallery.appendChild(figure);
  });
}
populateGallery();

