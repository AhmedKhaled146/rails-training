import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";


const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-84c34-default-rtdb.firebaseio.com/"
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
console.log(database);

console.log(app);

const referenceInDB = ref(database, 'leads');
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("save-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

function render(leads) {
    ulEl.innerHTML = "";
    for (let i = 0; i < leads.length; i++) {
        ulEl.innerHTML += `
            <li>
                <a href='${leads[i]}' target='_blank'>
                    ${leads[i]}
                </a>
            </li>
        `;
    }
}

onValue(referenceInDB, function(snapshot) {
    const snapshotDoesExist = snapshot.exists();
    if (snapshotDoesExist) {
        const snapshotVal = snapshot.val();
        const leads = Object.values(snapshotVal);
        render(leads);
    } else {
        ulEl.innerHTML = "";
    }
});

deleteBtn.addEventListener("dblclick", function() {
    remove(referenceInDB);
    ulEl.innerHTML = "";
});

inputBtn.addEventListener("click", function() {
    push(referenceInDB, inputEl.value);
    inputEl.value = "";
});
