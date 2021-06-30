// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let numOne = 1;
while(numOne <= 5) {
   console.log(numOne);
   numOne+=1;
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let numTwo = 1;
 do {
  console.log(numTwo);
  numTwo+=1;
} while (numTwo <= 5);
  
// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for (let i = 1;  i <= 5; i++) {
 console.log(i);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let numFourVOne = 10;
while(numFourVOne >= 1){
  console.log(numFourVOne);
  numFourVOne-=1;
}

let numFourVTwo = 10;
do{
  console.log(numFourVTwo);
  numFourVTwo-=1;
} while(numFourVTwo >= 1);

let numFourVThree = 0;
for(let i = 10; i > numFourVThree; i--){
  console.log(i);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let numFiveVOne = 7;
while (numFiveVOne <= 27) {
  console.log(numFiveVOne);
  numFiveVOne+=1;
}

let numFiveVTwo = 7; 
do {
  console.log(numFiveVTwo);
  numFiveVTwo+=1;
} while (numFiveVTwo <= 27);

let numFiveVThree = 27;
for(let i = 7; i <= numFiveVThree; i++){
   console.log(i);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let numSixVOne = 0;
while(numSixVOne <= 100){
    console.log(numSixVOne);
    numSixVOne+=10;
}

let numSixVTwo = 0;
do {console.log(numSixVTwo);
    numSixVTwo+=10;
} while(numSixVTwo <= 100);

let numSixVThree = 100;
for(let i = 0; i <= numSixVThree; i+=10){
  console.log(i);
}

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

//The following loop is an infinite loop and will never stop running because counterFour will always be true when set to one and we are always decrementing to counterFour in the while loop therefore it will always print "Help me." There needs to be a condition or soemthing in the code block that stops the condition from being true. We can stop the loop by create an if statement that breaks the loop when it counterFour equals to -100.

let counterFour = 1;
while (counterFour < 2) {
  if (counterFour === -100) {
    console.log("Break counterFour!");
    break;
  }
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
let num8 = 11;
for(let i = 0; i <= num8; i++){
    console.log(i);
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)
let favNum = 11;
for (let i = 0; i <= 100; i++){
  if(i === favNum){
    console.log(favNum + " my favorite number!");
  } else {
    console.log(i + " not my favorite number");
  }
}


// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

//I would decide which type of loops to use based on the usage or problem. I would use a for loop to iterate through a set boundary like an array. For a for while loop, I would use it if I have to iterate a value until the statement is either true or false such as using a boolean in a while loop with an if statement until  the condition is met. For a do, while statement, I would choose this if I want to initialize something first before performing a function of code. 

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter > 0; insideCounter--) {
    console.log("inside", insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//I found the exercise medium to easy in difficulty once I got to research the structure of a do while loop and how it functions. To do that, I reviewed problems on FreeCodeCamp's Basic JavaScript course and looked at the "Iterate with JavaScript Do...While Loops." I also ran into difficulty on how to make a JavaScript break statement in exercise 7. It helped for me to learn more about a break statement through w3schools.com website where they explained and had an example of how to do it.

// Email your file to us or commit your file to GitHub and email us a link.
