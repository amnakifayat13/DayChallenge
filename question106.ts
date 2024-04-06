/* Determine if a given year is a leap year using comparison operators.*/

function leapYearFunc(year:number){
    return (year % 4 === 0 && year %100 !== 100) || year % 4 === 0;
}
console.log(leapYearFunc(2024));
console.log(leapYearFunc(2015));

