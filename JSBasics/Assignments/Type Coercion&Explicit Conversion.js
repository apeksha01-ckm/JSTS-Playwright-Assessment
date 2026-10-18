/* Problem 1 — UI Price and Quantity
A product page returns the following values as strings:
let price = "500";
let quantity = "3";
Calculate the total price.

Expected Output:
1500*/

let price = "500";
let quantity = "3";
let totalPrice= Number(quantity)*Number(price);
console.log("total price : " , totalPrice);

/*Problem 2 — UI Price + Tax
The UI returns:
let price = "1000";
let tax = "200";
Calculate the final price.

Expected Output:
1200*/
let price1 = "1000";
let tax = "200";
let finalPrice=Number(price1)+Number(tax);  //coverting to number befoe adding 
console.log("Final Price : " , finalPrice);

/*Problem 3 — Understand + Coercion
Consider:
let actual = "100";
let expected = 20;
What will be the output of:
console.log(actual + expected);*/

let actual = "100";
let expected = 20;
console.log(actual + expected); 
//Answer : 10020 

/*Problem 4 — Understand - Coercion
Consider:
let actual = "100";
let expected = 20;
What will be the output of:
console.log(actual - expected);*/ 
let actual1 = "100";
let expected1 = 20;
console.log(actual1 - expected1);  
//Answer : 80 , "100" is converted to number while using - operator

/*Problem 5 — UI Value and Assertion
A UI displays:
100
The automation code receives it as:
let actualPrice = "100";
let expectedPrice = 100;
Check the result of:
console.log(actualPrice == expectedPrice);
console.log(actualPrice === expectedPrice);*/

let actualPrice = "100";
let expectedPrice = 100;
console.log(actualPrice == expectedPrice);   //true , compares values after coverting types 
console.log(actualPrice === expectedPrice);  //false , checks both data type and value

/*Problem 6 — Fix the Assertion
The following automation code is failing:
let actualPrice = "500";
let expectedPrice = 500;
console.log(actualPrice === expectedPrice);*/
//automation code is failing bcz actualprice is in string and expectedprice is number
let actualPrice1 = "500";     
let expectedPrice1 = 500;
console.log(Number(actualPrice1) === expectedPrice1); //coveting to number 

/*Modify the code so that the assertion gives:
true

Problem 7 — Environment Variable
An automation framework reads the timeout from an environment variable:
let timeout = "30000";
Convert it into a number and print:
The value
Its data type

Expected Output:
30000
number*/

let timeout = "30000";
timeout = Number(timeout);          //converting to number
console.log("Value of timeout : " + timeout);
console.log("datatype of timeout : "+typeof timeout);

/**Problem 8 — Order ID
An API returns:
let orderId = 12345;
Convert the order ID into a string and create:
ORDER-12345 */
let orderId = 12345;
orderId= "ORDER-"+String(orderId);

console.log(orderId );

/*Problem 9 — Boolean API Value
An API returns:
let status = "true";
Convert this value into an actual Boolean.

Expected Output:
true
boolean*/

let status1 = "true";
status1= Boolean(status1);
console.log(status1);
console.log(typeof status1);

console.log("-------------------");

/*Problem 10 — Input Field Value
A Playwright test retrieves a quantity from an input field:
let quantity = "5";
The expected quantity is:
let expectedQuantity = 5;*/

let quantity1 = "5";
let expectedQuantity=5;
console.log(Number(quantity1)===expectedQuantity);  //true

/*Problem 11 — Calculate Cart Total
An e-commerce application provides:
let price = "799";
let quantity = "2";
let discount = "100";
Calculate:
(price × quantity) - discount

Expected Output:
1498 */

let price2 = "799";
let quantity2 = "2";
let discount = "100";
let finalAmount = (Number(price2)*Number(quantity2))-Number(discount);
console.log("Total :" +finalAmount); 
