const insertName = prompt("Input your name");

if (insertName == "halo" || insertName == "Halo") {
  window.alert("Nice to meet you!");
} else {
  window.alert(`Halo ${insertName} Lets play`);
}

const fullName = "Denny Setyawan Huda";
const age = 20;

console.log(fullName, age);

const animals = ["cat", "dog", "cow", "chicken", "bear"];

animals.push("duck");
animals.forEach((animal, index) => {
  console.log(`ke-${index} = ${animal}`);
});

function multipleNumber(number) {
  let result = number ** 2;
  return result;
}

console.log(multipleNumber(9));

function sayName(firstName, lastName = "oke") {
  console.log(`Hai ${firstName} ${lastName}`);
}

sayName("akbar");

console.log("Let's Play The game");

let secretNumber = 28;

let chance = 3;

function guessTheNumber(userNumber) {
  if (userNumber != secretNumber) {
    chance = chance - 1;
    console.log(`Opps... Your chance left is ${chance}`);
  } else {
    console.log(`Good Job.. the secret number is ${secretNumber}`);
  }
}

guessTheNumber(78);
