console.log("Let's play a number guesssing game");

let chance = 3;

for (let attempt = 1; attempt <= chance; attempt++) {
  let guessedNumber = prompt("Guess the number:");
  let secretNumber = 28;

  if (userNumber != secretNumber) {
    chance = chance - 1;
    console.log(`Opps... Your chance left is ${chance}`);
    break;
  } else {
    console.log(`Good Job.. the secret number is ${secretNumber}`);
    break;
  }
}
