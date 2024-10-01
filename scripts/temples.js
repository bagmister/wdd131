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
  'images/temples/bountiful_temple.webp',
  'images/temples/jordan_river_temple.webp',
  'images/temples/laie_temple.webp',
  'images/temples/logan_utah_temple.webp',
  'images/temples/manti_temple.webp',
  'images/temples/mesa_arizona_temple.webp',
  'images/temples/payson_utah_temple.webp',
  'images/temples/provo_city_center_temple.webp',
  'images/temples/salt_lake_temple.webp'

];

function populateGallery() {
  const gallery = document.querySelector('.gallery');

  imageUrls.forEach(url => {
      const figure = document.createElement('figure');
      const regex = /([^/]+)(?=\.webp$)/;
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

function lastModified(){
  let lastModifiedDate = new Date(document.lastModified);
  document.querySelector("#lastModified").innerHTML = lastModifiedDate.toLocaleString()
}

function currentYear() {
  const currentYearValue = new Date().getFullYear();
  document.querySelector("#currentyear").innerHTML = currentYearValue;
}


window.addEventListener('load',currentYear)
window.addEventListener('load',lastModified)

populateGallery();

