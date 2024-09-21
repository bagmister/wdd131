
function lastModified(){
    let lastModifiedDate = new Date(document.lastModified);
    document.getElementById("lastModified").innerHTML = lastModifiedDate
}

function currentYear(){
    let currentYear = new Date(document.currentYear);
    document.getElementById("currentyear").innerHTML = currentYear
}