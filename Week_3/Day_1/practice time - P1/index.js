// exercise 1: Concatenate first name and last name to create full name

let firstName = "Ahmed";
let lastName = "Khaled";
let fullName = firstName + " " + lastName;

console.log(fullName);

// exercise 2: Concatenat two strings in a function

let name = "Ahmed";
let greeting = "Hi there ";

function getHiThere() {
    console.log(greeting + ", " + name + "!");
}


// exercise 3: Incrementing and decrementing

let myPoints = 3;

function add3Points() {
    myPoints += 3;
}

function remove1Point() {
    myPoints -= 1;
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();

console.log(myPoints);


// exercise 4: strings and numbers

// Try to predict what each of the lines will log out
console.log("2" + 2) //  "22"
console.log(11 + 7) // 18
console.log(6 + "5") // "65"
console.log("My points: " + 5 + 9) // "My points: 59"
console.log(2 + 2) // 4
console.log("11" + "14") // "1114"


// exercise 5: Rendering an error message

let error = document.getElementById("error");

function renderError() {
    error.textContent = "Something went wrong, please try again!";
}


// exercise 6: calculator challenge

let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

sumEl = document.getElementById("sum-el");

function add() {
    sumEl.textContent = "Sum: " + (num1 + num2);
}

function subtract() {
    sumEl.textContent = "Sum: " + (num1 - num2);
}

function multiply() {
    sumEl.textContent = "Sum: " + (num1 * num2);
}

function divide() {
    sumEl.textContent = "Sum: " + (num1 / num2);
}

// exercise 7: basketball scoreboard

let team1Score = 0;
let team2Score = 0;

let team1El = document.getElementById("team1-score");
let team2El = document.getElementById("team2-score");

function add1PointTeam1() {
    team1Score += 1;
    team1El.textContent = team1Score;
}

function add2PointsTeam1() {
    team1Score += 2;
    team1El.textContent = team1Score;
}

function add3PointsTeam1() {
    team1Score += 3;
    team1El.textContent = team1Score;
}

function add1PointTeam2() {
    team2Score += 1;
    team2El.textContent = team2Score;
}

function add2PointsTeam2() {
    team2Score += 2;
    team2El.textContent = team2Score;
}

function add3PointsTeam2() {
    team2Score += 3;
    team2El.textContent = team2Score;
}

function resetScores() {
    team1Score = 0;
    team2Score = 0;
    team1El.textContent = team1Score;
    team2El.textContent = team2Score;
}

