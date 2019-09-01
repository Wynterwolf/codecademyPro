//const and arrow function with 1 param for user choice
const getUserChoice = userInput => {
  //if user input is rock, paper scissors
  if (userInput == 'rock'|| userInput == 'paper'|| userInput == 'scissors')
{
  //return input
  return userInput;
  //lowercase it all
  userInput = userInput.toLowerCase();
} else {
  //otherwise print an error to console
  console.log('There has been an error!')
}};

// test function
//console.log(getUserChoice('paper'));

const getComputerChoice = () => {
  Math.floor(Math.random() * 3)
//switch for getComputerChoice
switch (getComputerChoice) {
  case 1:
    return "rock";
  case 2:
    return "paper";
  case 3:
    return "scissors";

};
//check to see if it works in console
console.log(getComputerChoice());
