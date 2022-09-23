const insertName = prompt("Say Halo");

if (insertName == "halo" || insertName == "Halo") {
  window.alert("Nice to meet you!");
} else {
  window.alert("something wrong");
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
