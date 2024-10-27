const hamburgerMenu = document.querySelector('.hamburger')
const offScreenMenu = document.querySelector('.off-screen-menu')
const navigationMenu = document.querySelector('.navigation')
const printersListener = document.querySelector('#printers')
const fillementsListener = document.querySelector('#fillements')
const homeListener = document.querySelector('#home')


hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
});

navigationMenu.addEventListener('click', (event) => {
  const navMenuText = event.target.title;
});

offScreenMenu.addEventListener('click', (event) => {
  const navMenuText = event.target.title;
});


function lastModified(){
  let lastModifiedDate = new Date(document.lastModified);
  document.querySelector("#lastModified").innerHTML = lastModifiedDate.toLocaleString()
}

function currentYear() {
  const currentYearValue = new Date().getFullYear();
  document.querySelector("#currentyear").innerHTML = currentYearValue;
}

const Printers = [
  {
    type: "printer",
    name: "Bambu Lab A1 Mini",
    imageUrl : "images/babmulabsA1Mini.webp",
    url : "https://bambulab.com/en/a1-mini",
    description : "A bit nicer of a printer. This one is also an entry level printer. It has the ability to print multi filament. It only has the single z axis support for the printer. It does have a smaller printer bed but it has a lot of the same features of the Ender 3 V3 SE. The A1 Mini is a very well built printer."
  },
  {
    type: "printer",
    name: "Creality Ender 3 V3 SE",
    url :"https://store.creality.com/products/ender-3-v3-se-3d-printer?spm=..collection_90778a1d-d845-4ff0-a8c4-48fded4b7d74.albums_1.1&spm_prev=..collection_cc8cf8b4-3da1-49c7-bc32-dd0e246caef8.header_1.1",
    imageUrl : "https://img.staticdj.com/c5a0b938bcdb80bd46af393ebbb053a1_1080x.png",
    description : "Entry level printer to print PLA, TPU(95A) and PETG. This gives you a wide enough range with the filiments we have right now that you can print anything you are wanting. It has a print area large enough to print most things and with slicing things into smaller parts, The potential is endless."
  }
];
const filaments = [
  {
    type : "filament",
    name: "PLA+",
    url : "https://www.amazon.com/ELEGOO-Filament-Stronger-Dimensional-Accuracy/dp/B0C14PVBPB/ref=sr_1_3?sr=8-3",
    imageUrl : "https://m.media-amazon.com/images/I/81a+NTt9wLL._AC_SL1500_.jpg",
    description : "An upgraded version of PLA. This is a fantastic all around fillament. People make all kinds of parts with this. This should be used over traditional PLA. Cost is not much more than PLA."
  },
  {
    type : "filament",
    name: "PEGT",
    url : "https://www.amazon.com/Official-Creality-Precision-Toughness-Moistureproof/dp/B0C8NP63GD/ref=sr_1_4?sr=8-4",
    imageUrl : "https://m.media-amazon.com/images/I/71heBpNZffL._SL1500_.jpg",
    description : "PETG is a fantastic material. It is suseptible to water. So you need to make sure it is printed in a dry climate or you would need a dryer. This is a great filament for building things for out door use and things that would be exposed to UV light for an extended period of time."
  },
  {
    type : "filament",
    name: "TPU",
    url : "https://www.amazon.com/Creality-Filament-Printing-Resilience-Adhesive/dp/B0C7BXRD3B/ref=sr_1_10?sr=8-10",
    imageUrl : "https://m.media-amazon.com/images/I/71hqzY5ZFDL._AC_SL1500_.jpg",
    description : "This is a flexible filament and is nearly indestructable. You can make shoe souls out of it, bouncy balls, tires, gaskets and other parts that need to be flexible. When using a harder version of it like 95A. The object will be nearly indestructable."
  }
];
const indexPage = [
  {
    type : "home",
    name : "welcome",
    imageUrl : "images/myPhoto-resized.png",
    description: "Welcome! I am so glad you are here. In this website I am going to give some breif info on 3d printers and filaments that can be used on these intro printers.",
    url: "#"
  }
]

function populatePage(objects) {
  const selectors = ['.page', '.filaments', '.home', '.printer'];
  let pageElement = null;

  for (const selector of selectors) {
    pageElement = document.querySelector(selector);
    if (pageElement) break;
  }

  if (!pageElement) {
    console.error('No valid page element found.');
    return;
  }

  // Clear the content of the section on page load
  sectionToClear = document.getElementById('mySection');
  if (sectionToClear) {
    sectionToClear.innerHTML = ''; // Clear the content
  }

  let newClass = '';
  const classesToRemove = ['page', 'filaments', 'printer', 'home'];

  if (window.location.pathname.endsWith('printers.html')) {
    newClass = 'printer';
  } else if (window.location.pathname.endsWith('filaments.html')) {
    newClass = 'filaments';
  } else if (window.location.pathname.endsWith('index.html')) {
    newClass = 'home';
  }

  // Remove the relevant classes
  classesToRemove.forEach(cls => {
    if (cls !== newClass) {
      pageElement.classList.remove(cls);
    }
  });

  // Only process the array if there is a new class
  if (newClass) {
    pageElement.classList.add(newClass);
    processArray(objects, pageElement);
  }
}

function processArray(objects, pageElement) {
  objects.forEach(object => {
    let figure = document.createElement('section');
    figure.className = 'page-card';
    let img = document.createElement('img');
    let name = document.createElement('h2');
    let url = document.createElement('p');
    let description = document.createElement('p');

    img.src = object.imageUrl;
    img.loading = "lazy";

    if (object.type.includes("printer")) {
      img.alt = object.name;
      name.innerHTML = `<span class="label">Printer:</span> ${object.name}`;
      url.innerHTML = `<span class="label">Where to buy:</span> <a href="${object.url}" target="_blank">${object.url}</a>`;
      description.innerHTML = `<span class="label"></span> ${object.description}`;
    }
    if (object.type.includes("home")) {
      img.alt = object.name;
      name.innerHTML = `<span class="label">About:</span> ${object.name}`;
      url.innerHTML = `<span class="label">General Info:</span> <a href="${object.url}" target="_blank">${object.url}</a>`;
      description.innerHTML = `<span class="label"></span> ${object.description}`;
    }
    if (object.type.includes("filament")) {
      img.alt = object.name;
      name.innerHTML = `<span class="label">Filament:</span> ${object.name}`;
      url.innerHTML = `<span class="label">Where to buy:</span> <a href="${object.url}" target="_blank">${object.url}</a>`;
      description.innerHTML = `<span class="label"></span> ${object.description}`;
    }

    figure.appendChild(img);
    figure.appendChild(name);
    figure.appendChild(description);
    figure.appendChild(url);

    pageElement.appendChild(figure);
  });
}

// Event listeners for loading specific arrays based on the active page
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.endsWith('printers.html')) {
    populatePage(Printers);
  } else if (window.location.pathname.endsWith('filaments.html')) {
    populatePage(filaments);
  } else if (window.location.pathname.endsWith('index.html')) {
    populatePage(indexPage);
  }
});

window.addEventListener('load',currentYear)
window.addEventListener('load',lastModified)
