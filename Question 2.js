/* Create a program that:Takes a string input like "25" and converts it into a number.
Tests whether different values (0, "", "hello", null, undefined, NaN) are truthy or falsy using if statements.
Print out which values are truthy and which are falsy.
*/

let input = prompt("Enter a number:");

let numbered_string = Number(input);
console.log("Converted number",numbered_string, "| Its new type is now", typeof numbered_string)

console.log("---Truthy|Falsey Test---");


let values = [0, "", "hello", null, undefined, NaN];
