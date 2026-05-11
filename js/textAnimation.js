
const roles = [
    "Engineer",
    "A Fellow Human Being"
];

let index = 0;

const text = document.getElementById("changing-text");

setInterval(() => {

    index++;

    if(index >= roles.length){
        index = 0;
    }

    text.textContent = roles[index];

}, 2500);
