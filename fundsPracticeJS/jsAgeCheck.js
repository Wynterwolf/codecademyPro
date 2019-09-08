// Write your function here:
const lifePhase = (age) => {
    if (age >= 1 && age < 3) {
      return "baby";
    } else if (age < 0) {
      return "This is not a valid age"
    } else if (age >= 4 && age <= 12) {
        return "child";
    } else if (age >= 12 && age <= 19) {
        return "teen";
    } else if (age >= 19 && age <= 64) {
        return "adult"
    } else if (age >= 64 && age <= 140) {
        return "senior citizen"
    } else {
        return "This is not a valid age"
    }
      };
  
    console.log(lifePhase(5)) //should print 'child'