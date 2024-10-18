const selectElement = document.querySelector('#product-array');


const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];


products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
});

function getDedicatedDate(value) {
    const regex = /(\d{4})/;
    const found = regex.exec(value);
    return found ? parseInt(found[1], 10) : null;
}

function lastModified() {
    let lastModifiedDate = new Date(document.lastModified);
    document.querySelector("#lastModified").innerHTML = lastModifiedDate.toLocaleString()
}

function currentYear() {
    const currentYearValue = new Date().getFullYear();
    document.querySelector("#currentyear").innerHTML = currentYearValue;
}

window.addEventListener('load', currentYear)
window.addEventListener('load', lastModified)