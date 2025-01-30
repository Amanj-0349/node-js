let user = 'aman'
if (user) {
    // console.log(user);
}

let temp = 40

if (temp === 41) {
    console.log('garmi bhut h yrr');
}
else{
    console.log('kam garmi h yrr');
} 

// here == is used for comparison and it doesnot check the datatype of object 
// so we use thus === (strict check) and it and it can  check the datatype also 

if (1==='1') {
    console.log('hayye garmi');
    
}
else{
    console.log('km garmi hh ');
}

//  there is another method but not a good practise 

if (true) console.log('hello aman jha'); 

// i can write multiplr conditions together 

username = true
useremail = true
userlogin = false

if (username && useremail) {
    console.log('everything good buddy !');
} else {
    console.log('not good ');
    
}

if (username || userlogin) {
    console.log('everything good buddy !');
} else {
    console.log('not good ');
    
}

/*****************************switch case ***************** */

const marks  = 95

switch (marks) {
    case 70:
        console.log('c');
        break;
    case 80:
        console.log('B');
        break;
    case 95:
        console.log('A');
        break;
    default:
        console.log('koi grade nhi milega apko jii');
        break;
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
