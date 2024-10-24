const hamburgerMenu = document.querySelector('.hamburger')
const offScreenMenu = document.querySelector('.off-screen-menu')
const navigationMenu = document.querySelector('.navigation')
const projectheader = document.querySelector('#project-header')
const printers = document.querySelector('#printers')
const fillements = document.querySelector('#fillements')
const home = document.querySelector('#home')


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
    imageUrl : "https://cdn1.bambulab.com/a1/video/print-8bbbda52c0ea5/0.jpg",
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
    type : "filament"
  },
  {
    type : "filament"
  }
];
const indexPage = [
  {
    type : "home"
  },
  {
    type : "home"
  }
]

function populatePage(objects) {
  const pageElement = document.querySelector('.page');
  pageElement.innerHTML = "";
  if (window.location.pathname.endsWith('printers.html')) {
    pageElement.classList.remove('page');
    pageElement.classList.add('printer');
    processArray(objects)
  }
  if (window.location.pathname.endsWith('filaments.html')) {
    pageElement.classList.remove('page');
    pageElement.classList.add('filaments');
    processArray(objects)
  } 
  if (window.location.pathname.endsWith('index.html')) {
    pageElement.classList.remove('page');
    pageElement.classList.add('home');
    processArray(objects)
  }
}
function processArray(objects) {
  objects.forEach(object => {
    let figure = document.createElement('section');
    figure.className = 'page-card';
    let img = document.createElement('img');
    let name = document.createElement('h3');
    let url = document.createElement('p');
    let description = document.createElement('p');

    img.src = object.imageUrl;
    img.loading = "lazy";

    if (object.type.includes("printer")) {
      img.alt = object.printerName;
      name.textContent = object.printerName;
      name.innerHTML = `<span class="label">Printer:</span> ${object.name}`;
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


populatePage(Printers)
populatePage(filaments)
populatePage(indexPage)

window.addEventListener('load',currentYear)
window.addEventListener('load',lastModified)
