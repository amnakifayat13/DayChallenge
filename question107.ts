/*  Write a condition using logical operators that checks if a number is divisible by both 2 and 3.*/

function logicalFunc(num: number) {
    return num %2 === 0 && num % 3 === 0;

}
console.log(logicalFunc(6));
console.log(logicalFunc(8));
console.log(logicalFunc(15));

