// function for user input
const getUserChoice = (userInput) => {

  //check user input
  if (userInput === 'rock'|| userInput === 'paper'|| userInput === 'scissors')
    {
      //if okay return user input
        // put in lowercase
  userInput = userInput.toLowerCase();
      return userInput;

    } else {
      //error if user input is wrong
      console.log('User input error!')
    }
};
// check for function
//console.log(getUserChoice('paper'))

//function for computer
const getComputerChoice = () => {
  //find random #
  const random = Math.floor(Math.random() * 3) 
//switch statement for computer's choice
switch (random) {
  case 0:
    return "rock";
  case 1:
    return "paper";
  case 2:
    return "scissors"
}};
//check console
//console.log(getComputerChoice())

//determine winner function
function determineWinner(userChoice, computerChoice) {
if (userChoice === computerChoice) {
  return 'The game is a tie!';
} // closing if tie clause!!!
  
else if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
     return 'Computer Won!';
  } else {
     return 'You won!';
 } 
}

else if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'Computer won!';
  } else {
    return 'You won!';
  }
} 
else if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'Computer won!';
  } else {
    return 'You won!';
    
  }
 }
}
const playGame = () => {
  const userChoice = 
        getUserChoice();
  const computerChoice =
        getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('Computer threw: ' + computerChoice)
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();