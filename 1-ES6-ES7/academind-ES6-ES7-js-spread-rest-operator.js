/* ES6: ...
Important to know since this component of ES6 JS is used by React */

/* ... will serve as Spread Operator or Rest Operator depending upon use */

//Spread Operator: used to split up array elements OR object properties
const origArray = [1, 2];
const newArray = [...origArray, 3];
console.log(newArray);


// Rest Operator: used to merge a list of function arguments into an array
const filter = (...args) => {
    return args.filter(el => el > 5);
}

console.log(filter(1, 10, 15));
