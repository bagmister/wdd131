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




window.addEventListener('load',currentYear)
window.addEventListener('load',lastModified)
