/*Write a function named greetingBot that:
Takes a user’s name and a boolean value isMorning.
If
isMorning is true, return "Good morning, [name]!"; otherwise, return
"Hello, [name]!". Use logical operators and template literals to build
your output.
Then test your function with different inputs.
 */

function greetingBot(name, isMorning) {
    let message;

    if (isMorning === true) {
        message = "Good morning, " + name + "!";
    } else {
        message = "Hello," + name + "!";
    }

    return message;

}

console.log(greetingBot("Alex", true));
console.log(greetingBot("Sam", false));