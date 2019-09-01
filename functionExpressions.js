//plants need watering once a week on Wednesday. define function expression to help
//variable with anonymous function
const plantNeedsWater = function (day, plantNeedWater) {
  // if conditional checks day
  if (day === 'Wednesday') {
    return true
    //else statement for other days
  } else {
    return false
  }
};
//call and pass tuesday arg
plantNeedsWater('Tuesday')
//log to check
console.log(plantNeedsWater('Tuesday'))
