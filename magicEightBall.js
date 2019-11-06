//define variable to empty string
let userName = "Sammy";
//ternary expression if user enter name
userName ? console.log(`hello ${userName}`) : console.log("Hello!");
// variable userQuestion
let userQuestion = "Will I get a boyfriend?";
//console log of username and question
console.log(`${userName} asked: "${userQuestion}"`);
//random number gen
randomNumber = Math.floor(Math.random() * 8);
// eighball variable with empty string
let eightBall = "";

//switch statement for answers
switch (randomNumber) {
  case 0:
    eightBall = "Try again later!";
    break;
  case 1:
    eightBall = "It is certain";
    break;
  case 2:
    eightBall = "It is decidedly so";
    break;
  case 3:
    eightBall = "Reply hazy try again";
    break;
  case 4:
    eightBall = "Cannot predict now";
    break;
  case 5:
    eightBall = "Do not count on it";
    break;
  case 6:
    eightBall = "My sources say no";
    break;
  case 7:
    eightBall = "Outlook not so good";
    break;
  case 8:
    eightBall = "Signs point to yes";
  default:
    eightBall = "Broken!";
}

//console log to print answer
console.log(`The Magic Eightball Says: ${eightBall}`);
