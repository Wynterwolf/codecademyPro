/* Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays */

//Your Code Here

const justCoolStuff = 

const coolStuffList = []
for (let cs = 0; cs < coolStuffList.length; cs++) {
  for (let ms = 0; ms < myStuff.length; ms++) {
    if (coolStuffList[cs] === myStuff[ms]){
      coolStuffList.push(coolStuffList[cs]);
    }
  }
}


// Feel free to uncomment the code below to test your function

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

