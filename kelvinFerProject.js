//create variable assign equal to 293
const kelvin = 0;
// celcius is kelvin - 273
const celsius = kelvin - 273;
// equation for fahrenheit & round with math.floor
const fahrenheit = Math.floor(celsius * (9/5) + 32);
//string interpolation to log
console.log(`The temperature is ${fahrenheit} degrees Fehrenheit.`)

//extra practice convert celsius to Newton scale
//convert to newton and round
const newton = Math.floor(celsius * (33/100));
//print out
console.log(`The temperature is ${newton} on the Newton scale.`)
