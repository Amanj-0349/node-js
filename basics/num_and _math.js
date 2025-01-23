const score = 500
// console.log(score);

// we can also do this 
const balance = new Number(600)
// console.log(balance);

// i can convert my number into the string by using the toString an then u can use any string functions and methods 
// console.log(balance.toString());

// console.log(balance.toFixed(2));

const hundreds = 10000000
// console.log(hundreds.toLocaleString());

// by default it is of international system'
// to make it in indian system i can do 'en-IN'
// console.log(hundreds.toLocaleString('en-IN'));


/*******************************************Maths********************************* */

// console.log(Math);
// console.log(Math.abs(-95));
// console.log(Math.round(50.3));
// // ceil will always return the upper value
// console.log(Math.ceil(95.6));
// // floor will always return the lower value
// console.log(Math.floor(4.9));
// console.log(Math.min(4 , 8 , 6 , 5 , 1 , 23));
// console.log(Math.max(4 , 8 , 6 , 5 , 1 , 23));


console.log(Math.random());
// now i want value b/w only in integer not in float
console.log((Math.random()*10)+1);
// now for round value
console.log(Math.floor((Math.random()*10)+1))


// now here we also some formula that we use 
const min =10
const max = 20

console.log(Math.floor((Math.random()*(max-min+1)+min)));
