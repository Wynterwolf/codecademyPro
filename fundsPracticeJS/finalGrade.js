/* Write a function, finalGrade(). It should:

take three arguments of type number
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
0-59 should return: ‘F’
60-69 should return: ‘D’
70-79 should return: ‘C’
80-89 should return: ‘B’
90-100 should return: ‘A’ */

// Write your function here:

const finalGrade = (test1, test2, test3) => {
  if (
    test1 < 0 ||
    test1 > 100 ||
    (test2 < 0 || test2 > 100) ||
    (test3 < 0 || test3 > 100)
  )
    return "You have entered an invalid grade.";
  const average = (test1 + test2 + test3) / 3;

  if (average >= 0 && average <= 60) {
    return "F";
  }
  if (average >= 60 && average <= 69) {
    return "D";
  }
  if (average >= 70 && average <= 79) {
    return "C";
  }
  if (average >= 80 && average <= 89) {
    return "B";
  }
  if (average >= 90 && average <= 100) {
    return "A";
  }
};
// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(87, 75, 90)); // Should print 'A'

// We encourage you to add more function calls of your own to test your code!
