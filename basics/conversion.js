let score = "33"
// console.log(typeof score);

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

let a="33abc"
let value = Number(a)
// console.log(typeof value)
// console.log(value);

// in js here are some bugs like 33abc is converted but holding NaN which means 
// not a number so be careful when using these conversion

// null 
let b=null
let value1 = Number(a)
// console.log(typeof value1)
// console.log(value1);

/* note - 
"33"=> 33
"33abc"=>NaN
null=>NaN
true=> 1 or false=> 0
*/

let c = 0
let bolc = Boolean(c)
// console.log(bolc)

// 1 => true or 0 => false
// "" =>false 
//"aman" =>true

let some = 33 
let stringNumber = String(33)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ********************operations ***********************************
let val = 3
let negvalue = -val
// console.log(negvalue);

// console.log(2+2)
// console.log(3-2)
// console.log(3**2);
// console.log(3/2);

let str1 = "hello"
let str2 = " Aman"
let str3= str1+str2
// console.log(str3);

// postfix and prefix using the mdn documentation

let p = 100
console.log(++p);
// pre increment 
// so p is now 101
console.log(p--);
// post decrement 
// p will be 100 but it is reduced to 1 but not shown
console.log(--p);
// pre decrement 
// p will be 99 bcz in previous code p is already reduced by one so it is 100
// now we are doing pre decrement so it is 99






