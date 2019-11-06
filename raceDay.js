//race numbers are assigned randomly
let raceNumber = Math.floor(Math.random() * 1000);
// early registration boolean
let earlyRegister = true;
//runners age variable
let runnerAge = "23";
// check if running is adult && registered if true add 1000
if (runnerAge > 18 && earlyRegister) {
  raceNumber += 1000;
}
//control flow for first starting race
if (raceNumber > 1000) {
  console.log(`Racer ${raceNumber}, the race begins at 9:30am.`);
  //else if for other races
} else if (runnerAge > 18 && !earlyRegister) {
  console.log(`Racer ${raceNumber}, the race begins at 11:00am.`);
  //youth races
} else if (runnerAge < 18) {
  console.log(`Racer ${raceNumber}, Youth registrants run at 12:30pm.`);
} else {
  console.log("Please go to the registration desk");
}
