/* Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.

The .forEach() function should apply politelyDecline() directly; it should NOT merely receive argument function that uses politelyDecline().

You can test your function when you’re ready by passing in the veggies array or by making your own array! */

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
const declineEverything = (array) => {
    array.forEach(function(array){
      console.log(politelyDecline())
    })
    };
  
  declineEverything(veggies)