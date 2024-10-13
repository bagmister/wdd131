const hamburgerMenu = document.querySelector('.hamburger')
const offScreenMenu = document.querySelector('.off-screen-menu')
const navigationMenu = document.querySelector('.navigation')
const galleryHeader = document.querySelector('#gallery-header')
const oldTemples = document.querySelector('#old')
const newTemples = document.querySelector('#new')
const homeTemples = document.querySelector('#home')
const largeTemples = document.querySelector('#large')
const smallTemples = document.querySelector('#small')
oldTemples.addEventListener("click",() => {
  populateGallery(temples.filter(temple => getDedicatedDate(temple.dedicated)<=1900))
});
newTemples.addEventListener("click",() => {
  populateGallery(temples.filter(temple => getDedicatedDate(temple.dedicated)>=2000))
});
homeTemples.addEventListener("click",() => {
  populateGallery(temples.filter(temple => temple.area >0))
});
largeTemples.addEventListener("click",() => {
  populateGallery(temples.filter(temple => temple.area >= 90000))
});
smallTemples.addEventListener("click",() => {
  populateGallery(temples.filter(temple => temple.area <= 10000))
});

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

function populateGallery(filteredTemples) {
  document.querySelector('.gallery').innerHTML = "";
  filteredTemples.forEach(temple => {
      let figure = document.createElement('section');
      let img = document.createElement('img');
      let name = document.createElement('h3')
      let location = document.createElement('p')
      let dedication = document.createElement('p')
      let area = document.createElement('p')
      img.src = temple.imageUrl;
      img.alt = temple.templeName;
      img.loading = "lazy"
      name.textContent = temple.templeName
      location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
      dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
      area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;

      figure.appendChild(img);
      figure.appendChild(name)
      figure.appendChild(location)
      figure.appendChild(dedication)
      figure.appendChild(area)

      document.querySelector('.gallery').appendChild(figure);
  });
}

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Logan Utah",
    location: "Logan, Utah, United States",
    dedicated: "1884, May, 17",
    area: 113000,
    imageUrl:
    "images/temples/logan_utah_temple.webp"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "images/temples/payson_utah_temple.webp"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Jordan River Utah",
    location: "West Jordan, Utah",
    dedicated: "1981, November, 13",
    area: 91000,
    imageUrl:
    "images/temples/jordan_river_temple.webp"
  },
  {
    templeName: "Lai'e Hawaii",
    location: "Lai'e, Hawaii",
    dedicated: "1919, November, 27",
    area: 11200,
    imageUrl:
    "images/temples/laie_temple.webp"
  }
];

function getDedicatedDate(value) {
  const regex = /(\d{4})/;
  const found = regex.exec(value);
  return found ? parseInt(found[1], 10) : null;
}

function lastModified(){
  let lastModifiedDate = new Date(document.lastModified);
  document.querySelector("#lastModified").innerHTML = lastModifiedDate.toLocaleString()
}

function currentYear() {
  const currentYearValue = new Date().getFullYear();
  document.querySelector("#currentyear").innerHTML = currentYearValue;
}

populateGallery(temples)

window.addEventListener('load',currentYear)
window.addEventListener('load',lastModified)
