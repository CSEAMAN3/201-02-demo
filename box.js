"use strict";

console.log("script logged boom shacka lacka");

let points = 0;

// welcome the user with a message
alert("welcome to my guessing game!");

// Ask the user for thier name
let user = prompt("I'm Chris! What is your name?");
console.log(user);

// the response could be a string, an empty string or null
// if user is an empty string or null, keep asking the user for thier name
// empty string and null are falsy values, so if user is false ask for thier name
// I will need a loop that runs until the condition is not meet
// everytime the loop runs ask the question again

// (!) esclamation mark is logical not

while (!user) {
  user = prompt("What is your name? We can not progress without it!").toLowerCase();
}

// falsy values
// null - the absence of any value
// undefined - A variable that has not been assigned a value
// false - boolean value
// NaN - not a number
// 0 - the number 0
// -0 - the number negative 0
// "" - an empty string including "", '', ``

//this is the not equals comparison operator

if (user !== "chris") {
  alert("to bad you're not a Chris, Chris is a great name!");
}

alert("Hi " + user + "! I am so glad you decided to come to my site");

let answer = prompt("Is my favourite food popcorn? type yes or no").toLowerCase();
console.log(answer);

// Arrays

// Arrays allow us to hold more than one value in a single variable
// Array indexes start from 0
// Each item in an array is named an element
// Arrays should be declared using const as they cannot be reassinged
// Arrays can be manipulated using a variety of array methods

// Array methods we will look at today
// .length - tells us the length of the array
// .push - adds an element to the end of the array
// . pop - removes an element from the end of an array
// . unshift - adds an element to the start of an array
// .shift - removes an element from the start of an array
// .indexOf - tells you the index of an array

const foodsChrisLikes = ["mash potato", "porridge", "bananas"];

console.log(foodsChrisLikes[0]);
console.log(foodsChrisLikes[1]);
console.log(foodsChrisLikes[2]);
console.log(foodsChrisLikes.length);
console.log(foodsChrisLikes);

// more often than not the for loop is used to loop through an array

for (let i = 0; i < foodsChrisLikes.length; i++) {
  console.log(foodsChrisLikes[i]);
}

console.log(foodsChrisLikes);

// .push
foodsChrisLikes.push("cheese");
console.log(foodsChrisLikes);

// .pop
foodsChrisLikes.pop();
console.log(foodsChrisLikes);

// .unshift
foodsChrisLikes.unshift("apple pie");
console.log(foodsChrisLikes);

// shift
foodsChrisLikes.shift();
console.log(foodsChrisLikes);

// .indexOf
let index = foodsChrisLikes.indexOf("porridge");
console.log(index);

// Please look into
// .splice() array
// .slice() array

// Also look do while loop

// do while loop
// The do while loop is a variant of the while loop
// This loop will execute the code block once, before checking if the condition is true
// then it will repeat the loop as long as the condition is true
// example : based on points variable above initialised as 0

let userPoints = 0;

do {
  userPoints++;
  console.log(userPoints);
} while (userPoints < 5);
// the variable used in the condition must increment in this case if not the loop will never end.

// question 6
// create a number that the user has to guess (if you can make it random)
// Ask the user to guess a number and that they have 3 attempts
// allow the user to have 3 attempts, it may be best to countdown rather than up.
// if the user has 0 attempts left alert them to tell them.
// if they guess to low let them know the number was to low
// if the number was to high let them know the number is to high
// if the guess is not to low and not to high give the user a point, alert them to congratulate them and the stop the code running using break
//

// solution

const number = 7;
// const number = Math.floor(Math.random() * 10 + 1);
console.log(number);

// let guess = prompt("Guess a number between 1 and 10! You have 3 attempts to guess the answer");
// console.log(guess);
for (let i = 2; i >= 0; i--) {
  let guess = prompt("Guess a number between 1 and 10! You have " + i + " attempts to guess the answer");
  // if (i === 0) {
  //   alert("You're out of attempts! Better luck next 😜!");
  //   break;
  // }
  if (guess < number) {
    alert("to low, you have " + i + " remaining");
    // guess = prompt("Guess a number between 1 and 10! You have " + i + " attempts to guess the number");
  } else if (guess > number) {
    alert("to high, you have " + i + " remaining");
    // guess = prompt("Guess a number between 1 and 10! You have " + i + " attempts to guess the number");
  } else {
    points++;
    console.log(points);
    alert("congrats, you guessed the number 🤯");
    break;
  }
  if (i === 0) {
    alert("You're out of attempts! the number you were looking for was " + number + " better luck next 😜!");
    break;
  }
}
