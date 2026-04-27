/*
Create two arrays of numbers, merge them using the spread operator, and print the combined array.

Use a for loop to print the following pattern:

            *
         *    *
      *    *    *
   *     *    *    *
*     *    *    *    *

Use a while loop to print numbers from 10 down to 1.
 */

//Array
let array1 = [1,2,3];
let array2 = [4,5,6];

let merged_array = [...array1, ...array2];
console.log("Merged array: ",merged_array);


//pattern
let row = 5
//logic says - we print 5 rows, add gaps per row with each gap being row-1 --> this means row 1 will have 0 gaps.
// Then we print a star in each row.
//chat did help because it kept printing without the spaces
for(let i = 1; i <= row; i++) {
    let line = "  ";

    //spaces
    for(let j = 1; j<= row -i; j++){
        line += "   ";
    }

    for (let k = 1; k <= i; k++) {
        line += "*     ";
    }
    console.log(line);

}



//numbers 1-10
let num = 10;

while (num>=1){
    console.log(num);
    num--;
}