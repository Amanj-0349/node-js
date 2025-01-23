const name = "Aman"
// if i want to write like this i have to use backticks in js 
// console.log(`hello my name is ${name} jha`);


//**********************************/
// string declaration using string constructor 
// here string is of object type 
const gameName = new String("Aman_jha")
// console.log(gameName);
// as you can see the o/p => [String: 'Aman jha'] 
// console.log(gameName.__proto__)

// console.log(gameName.charAt(6));
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('A'));

// how to do substring in string 
// substring does not take negative value 

const newString = gameName.substring(0,4)
// console.log(newString);

// how to slice in string 
// while using the slice we can use the negative value also
const anotherString = gameName.slice(-6,4)
// console.log(anotherString);

const otherString = "      hello Aman    "
// console.log(otherString);
// console.log(otherString.trim());
// console.log(otherString.trimStart());
// console.log(otherString.trimEnd());
// basically trim will remove the starting and ending whitespace and endline characters 
// we have also trimstart and trimend

const url ="amanj0349@gmail.com"
// console.log(url.replace('0349','-'));

// console.log(url.includes('aman'));
// console.log(url.includes('jha'));

// console.log(gameName.split('_')); 
// whenever we use split ot will convert string into the list 

// console.log(url.at(0));








