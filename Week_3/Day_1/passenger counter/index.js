count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");


function increment() {
    count += 1;
    countEl.innerText = count;
}

function save() {
    let previousEntries = saveEl.textContent;
    saveEl.textContent = previousEntries + " " + count + " - ";
    count = 0;
    countEl.textContent = count;
    console.log(count);
}