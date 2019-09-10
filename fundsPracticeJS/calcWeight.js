/* Write a function, calculateWeight(). It should:

have two parameters: earthWeight and planet
expect earthWeight to be a number
expect planet to be a string
return a number representing what that Earth-weight would equate to on the planet passed in.
Handle the following cases:
'Mercury' weight = earthWeight * 0.378
'Venus' weight = earthWeight * 0.907
'Mars' weight = earthWeight * 0.377
'Jupiter' weight = earthWeight * 2.36
'Saturn' weight = earthWeight * 0.916
For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.' */

// Write your function here:
const calculateWeight = (earthWeight, planet) => {
	switch (planet) {
    case 'Murcury':
    	console.log(earthWeight * 0.378);
    	break;
    case 'Venus':
    	console.log(earthWeight * 0.907);
    	break;
    case 'Mars':
    	console.log(earthWeight * 0.377);
    	break;
    case 'Jupiter':
    	console.log(earthWeight * 2.36);
      break;
    case 'Saturn':
    	console.log(earthWeight * 0.916)
    	break;
    default:
    	console.log('Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.')
      break;
  }};






// Uncomment the line below when you're ready to try out your function
console.log(calculateWeight(100, 'Jupiter')) // Should print 236

// We encourage you to add more function calls of your own to test your code!