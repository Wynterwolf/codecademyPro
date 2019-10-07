// Write your code below
const bobsFollowers = ['he', 'she', 'them', 'they'];
const tinasFollowers = ['he', 'she', 'Pat'];
const mutualFollowers = [];
for (let b = 0; b < bobsFollowers.length; b++) {
  for (let t = 0; t < tinasFollowers.length; t++) {
    if(bobsFollowers[b] === tinasFollowers[t]){

       mutualFollowers.push(tinasFollowers[t]);
    }
  }
}
console.log(mutualFollowers);