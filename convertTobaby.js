// Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.


// Write your code here:
function convertToBaby(array) {
  for (let index = 0; index < animals.length; ++index){
    array[index] = 'baby ' +  array[index];
  }
  
  return array;
}







// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 