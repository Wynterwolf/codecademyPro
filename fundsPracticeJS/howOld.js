// Write your function here:
const howOld = (age, year) => {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;
    const future = year - birthYear;
    const past = birthYear - year
    const present = year - birthYear
    
    if (year > birthYear && year < currentYear) {
      return `You were ${present} in the year ${year}`;
    } else if (year > birthYear) {
      return `You will be ${future} in the year ${year}`;
    } else if (year < birthYear) {
      return `The year ${year} was ${past} years before you were born`
    }};
 
 // Once your function is written, write function calls to test your code!
 console.log(howOld(43, 1960))//The year 1960 was 59 years before you were born
 console.log(howOld(43, 1994))//You were 15 in the year 1994
 console.log(howOld(43, 2025))//You will be 41 in the year 2025