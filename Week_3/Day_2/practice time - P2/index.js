// exercise 1, create an object that has three properties: name, age, and country.

let person = {
    name: "Ahmed",
    age: 26,
    country: "Egypt"
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

logData()

// exercise 2, create a conditional statement if - else if.

let age = 15;

if (age < 6) {
    console.log("Free")
} else if (age < 18) {
    console.log("Child Discount")
} else if (age < 27) {
    console.log("Student Discount")
} else if (age < 67) {
    console.log("Full Price")
} else {
    console.log("Senior Citizen Discount")
}

// exercise 3, create a for loop that logs countries.

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

for (let i = 0; i < largeCountries.length; i++) {
    console.log(largeCountries[i])
}

// exercise 4, Push & Pop.

let largeCountries2 = ["Tuvalu","India","USA","Indonesia","Monaco"]

largeCountries2.pop()
largeCountries2.push("Pakistan")
largeCountries2.shift()
largeCountries2.unshift("China")

console.log(largeCountries2)

// exercise 5, create a conditional statement that logs a scary face on Friday the 13th.

let dayOfMonth = 13
let weekday = "Tuesday"


if (dayOfMonth === 13 && weekday === "Friday") {
    console.log("😱")
}


// exercise 6, random item from an array.

let hands = ["rock", "paper", "scissors"]

function randomHand() {
    let randomIndex = Math.floor(Math.random() * hands.length)
    return hands[randomIndex]
}

console.log(randomHand())

// exercise 7, emoji fighter.

let fighters = ["🤖", "👾", "👻"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {

    let randomIndexOne = Math.floor( Math.random() * fighters.length )
    let randomIndexTwo = Math.floor( Math.random() * fighters.length )
    stageEl.textContent = fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo]
})

// exercise 8, fruits

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]

let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sortFruits() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎"
        } else if (fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊"
        }
    }
}

sortFruits()