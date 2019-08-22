//const and arrow function with 1 param for user choice
const getUserChoice = userInput => {
  //if user input is rock, paper scissors
  if (userInput == 'rock'|| userInput == 'paper'|| userInput == 'scissors')
{
  //lowercase it all
  userInput = userInput.toLowerCase();
  //return input
  return userInput;
  
} else {
  //otherwise print an error to console
  console.log('There has been an error!')
}};

// test function
//console.log(getUserChoice('paper'));

const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3)

  //switch for getComputerChoice
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  };
};
//check to see if it works in console
console.log(getComputerChoice());
