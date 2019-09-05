//const and arrow function with 1 param for user choice
const getUserChoice = userInput => {
  //if user input is rock, paper scissors
  if (userInput == 'rock'|| userInput == 'paper'|| userInput == 'scissors' || userInput == 'bomb')
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
// for computer choice we make:
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

//console.log(determineWinner('rock', 'paper'));
//console.log(determineWinner('paper','paper')); //tie
//console.log(determineWinner('paper', 'rock'))
// setup complete, start the game and log results
// function for playgame
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`)
  console.log(determineWinner(userChoice, computerChoice))
};
playGame();
