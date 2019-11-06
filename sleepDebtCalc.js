//create a function returning night's num of hours rested
const getSleepHours = day => {
  //use if else for rest of week
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 8;
  } else if (day === "wednesday") {
    return 8;
  } else if (day === "thursday") {
    return 8;
  } else if (day === "friday") {
    return 8;
  } else if (day === "saturday") {
    return 8;
  } else if (day === "sunday") {
    return 8;
  }
};
//console test
//console.log(getSleepHours('monday'));

//implicit return function getActualSleepHours()
const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");
//log check
//console.log(getActualSleepHours());
const getIdealSleepHours = () => {
  const idealHours = 6;
  return idealHours * 7;
};

//console test
//console.log(getActualSleepHours());
//console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
};

//if/else for results.
if (getActualSleepHours === getIdealSleepHours) {
  console.log("You are getting the perfect amount of sleep!");
} else if (getActualSleepHours > getIdealSleepHours) {
  console.log("Overslept!");
} else {
  console.log(
    "Sleep More! You only got " +
      (getActualSleepHours() - getIdealSleepHours()) +
      " of sleep this week!"
  );
}
calculateSleepDebt();
