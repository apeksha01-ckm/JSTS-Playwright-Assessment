/**
 * 1. Identify the datatype
Create variables for the following values and identify their datatype:
- 25
- "JavaScript"
- true
- undefined
- null
- 123.45
- 12345678901234567890n
- Symbol("id")
Task: Print both the value and its datatype.
 */
let a=25;
let b="JavaScript";
let c=true;
let d=undefined;
let e=null;
let s=123.45;
let f=1234567890n;
let g=Symbol("id");
console.log(`Type of ${a} is ${typeof a}`); //number
console.log(`Type of ${b} is ${typeof b}`); //string
console.log(`Type of ${c} is ${typeof c}`); //boolean
console.log(`Type of ${d} is ${typeof d}`); //undefined
console.log(`Type of ${e} is ${typeof e}`); //object
console.log(`Type of ${s} is ${typeof s}`); //number
console.log(`Type of ${f} is ${typeof f}`); //bigint
console.log(`Type of ${String(g)} is ${typeof g}`); //symbol 

/* OUTPUT:
Type of 25 is number
Type of JavaScript is string
Type of true is boolean
Type of undefined is undefined
Type of null is object
Type of 123.45 is number
Type of 1234567890 is bigint
Type of Symbol(id) is symbol */
