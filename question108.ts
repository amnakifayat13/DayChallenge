/* Compare two strings to check if they are identical, ignoring case sensitivity.*/

function identicalStringFunc(str1:string, str2: string) {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(identicalStringFunc("amna","Amna"));
console.log(identicalStringFunc("world", "Word"));

