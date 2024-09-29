const hamburgerMenu = document.querySelector('.hamburger')
const offScreenMenu = document.querySelector('.off-screen-menu')

hamburgerMenu.addEventListener('click',() => {
  hamburgerMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})

const imageUrls = [
  'images/temples/jordan_river_temple_lds_large.jpeg',
  'images/temples/laie_temple_large.jpeg',
  'images/temples/lds_temple_bountiful_utah (1)',
  'images/temples/logan_utah_temple_flag_large',
  'images/temples/manti_temple_lds_large',
  'images/temples/mesa_temple_reflection_large',
  'images/temples/payson_temple_evening_large',
  'images/temples/provo_city_center_temple_large',
  'images/temples/salt_lake_temple_large'
  // Add more images as needed
];

// Function to create and append image divs to the gallery
function populateGallery() {
  const gallery = document.getElementById('gallery');

  imageUrls.forEach(url => {
      const imageContainer = document.createElement('div');
      imageContainer.classList.add('image-container');

      const img = document.createElement('img');
      img.src = url;
      img.alt = 'Image';

      imageContainer.appendChild(img);
      gallery.appendChild(imageContainer);
  });
}

// Call the function to populate the gallery
populateGallery();


