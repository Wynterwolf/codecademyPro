// function named getSleepHours with single param day
const getSleepHours = (day) => {
  //use if else for rest of week
  if (day === 'monday'){
    return 8;
  } else if 
  (day === 'tuesday'){
    return 8;
  } else if
  (day === 'wednesday'){
    return 8;
  } else if
  (day === 'thursday'){
    return 8;
  } else if
  (day === 'friday'){
    return 8;
  } else if
  (day === 'saturday'){
    return 8;
  } else
  (day === 'sunday')
    return 8;

// test with console log
console.log(getSleepHours('monday'))
//calculate sleep debt
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
	const idealSleepHours = getIdealSleepHours();
};
//calculate
if (actualSleepHours === idealSleepHours){
  console.log('You are getting the perfect amount of sleep!');
} else if (actualSleepHours > idealSleepHours){
    console.log('Overslept!');
  } else {
      console.log('Sleep More!');
    }};
console.log(calculateSleepDebt());
