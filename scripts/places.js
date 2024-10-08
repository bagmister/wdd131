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

const computeWindChill = function(windSpeed, temperature) {
  return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
};