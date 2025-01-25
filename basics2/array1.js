const heroes = ["ironman",'shaktiman',"hulk"]
const dc_heroes=['supermna','flash','batman']

// heroes.push(dc_heroes) 
//after pushing 

// console.log(heroes);
// after doing this push statement we are getting nested array 

/*******************************other way**********************************/

const allHeroes = heroes.concat(dc_heroes)
// console.log(allHeroes);

// we have also the spread operator by which we can do this 

const newheroes =[...heroes,...dc_heroes]
// console.log(newheroes);

/**********************other ways to create the array *********** */

// console.log(Array.from('Aman jha'));
// console.log(Array.from({name:'Aman jha'}));  // look at this carefully

const a= 100
const b=200
const c=300

console.log(Array.of(a,b,c));


const fruits = ['apple',"banana","mango"]
const vegi = ['potato','tomato','cabbage']

console.log(Array.of(fruits,vegi));

// by doing this we are also geting the nested array

// to get the normal array 

console.log(Array.of(...fruits,...vegi));



