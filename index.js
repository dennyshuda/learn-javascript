console.log("Let's play a number guesssing game");

let chance = 3;
let secretNumber = 28;

for (let attempt = 1; attempt <= chance; attempt++) {
  let guessedNumber = prompt("Guess the number:");
  let chanceLeft = chance - attempt;

  if (guessedNumber != secretNumber) {
    console.log(`Opps... Your chance left is ${chanceLeft}`);
  } else {
    console.log(`Good Job.. the secret number is ${secretNumber}`);
    break;
  }
}
