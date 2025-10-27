let firstCard = 8;
let secondCard = 7;
let sum = firstCard + secondCard;

console.log("Sum: " + sum);

if (sum <= 20) {
    console.log("Do you want to draw a new card?");
} else if (sum === 21) {
    console.log("Blackjack!");
} else {
    console.log("is greater than 21, you lose");
}