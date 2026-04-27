// control flow and conditional logic
/* Write a JavaScript program that takes a variable score and uses a switch statement to print a grade:
A: 90–100
B: 80–89
C: 70–79
D: 60–69
F: below 60
Then, use a ternary operator to check if the student has passed (60 or above) or failed, and print the result.
 */

let test_score = 95

let grade;

switch(true) {
    case (test_score>=90 && test_score<=100):
        grade="A";
        break;

    case (test_score>=80 && test_score<=89):
        grade="B";
        break;

    case (test_score>=70 && test_score<=79):
        grade="C";
        break;

    case (test_score>=60 && test_score<=69):
        grade="D";
        break;

    case (test_score<60):
        grade="F";
        break;

    default:
        grade="Invalid entry";

}

console.log("Grade:", grade);

let result = (test_score >= 60)? "Passed" : "Failed";
console.log("Result",result);