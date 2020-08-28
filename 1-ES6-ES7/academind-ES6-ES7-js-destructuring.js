/* ES6: Destructuring
Important to know since this component of ES6 JS is used by React */

/* Easily extract array elements or object properties and store them in variables. Not the same as 
spread operator since spread extracts ALL while destructuring doesn't */

//Array Destructuring
[a,b] = ['Rachael', 'Nils'];
console.log(a);
console.log(b);

//Object Destructuring
//In example below, we are pulling only 'name' from an object
{name} = {name: "BillyBob", age:28}
console.log(name);
console.log(age);