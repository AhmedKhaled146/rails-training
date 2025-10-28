// task 1, let vs const and template strings

const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"

let points = 0
let hasWon = false

points += 100
hasWon = true

if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}

// task 2, log out items in an array

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

function logCourses(courses) {
    for (let i = 0; i < courses.length; i++) {
        console.log(courses[i])
    }
}

logCourses(myCourses)

// task 3, Save values to local storage.

function saveCourses(courses) {
    localStorage.setItem("courses", JSON.stringify(courses))
}

saveCourses(myCourses)

// task4, addEventListener.

let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

const button = document.getElementById("show-score-button")

button.addEventListener("click", function() {
    console.log(`Jane's score is: ${data[0].score}`)
})

// task 5, generate sentence.

function generateSentence(desc, arr) {
    let baseString = `The ${desc} are `
    const lastIndex = arr.length - 1

    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i] + "."
        } else {
            baseString += arr[i] + ", "
        }
    }

    return baseString
}

const sentence = generateSentence("most popular courses", myCourses)
console.log(sentence)

// task 6, render images
const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const container = document.getElementById("container")

function renderImages() {
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDOM
}

renderImages()


// task 7, ROUNDING NUMBERS

const totalPrice = "420.69235632455"
const btn = document.getElementById("buy-btn")
btn.textContent = `Buy €${ Number(totalPrice).toFixed(2) }`
