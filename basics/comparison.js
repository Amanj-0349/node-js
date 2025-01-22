// console.log(2>3);
// console.log(3==3);
// console.log(3<=4);

// these will do normal conversions 

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);

// in case1 and case2 it will give false 
// and in case 3 it will give true bcz
// working of(==) is diffrent from > < <= >= it will treat null equal to 0
// so i case 3 => 0 >= 0 it gives True


// if we comapre anything with undefined it will give false 
// console.log(undefined>0);
// console.log(undefined==0);
// console.log(undefined>=0);


// === (strict check) - it will check the datatype also 
// console.log("2"==2); 
// in this case it will give us true bcz internally it will convvert "2" as number

console.log("2"===2);




