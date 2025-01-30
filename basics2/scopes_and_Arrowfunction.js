let a=10
var b =20
const c =30

// console.log(a);
// console.log(b);
// console.log(c);


var n3 = 4000

if (true) {
    let n1 = 20
    const n2 = 30
    var n3 = 40
    // console.log(n3);
    
}

// console.log(n3);

// we use let instead of var because scope of var is not so well defined 
// so we use only let and const 

/*********************other example ************************* */

let num1 =20
if (true) {
    let num1 = 50
    const num2 = 100
    // console.log(`INNER SCOPE of num1 is ${num1}`);   
}

// console.log(`outer scope of num1 is ${num1}`);

/**************functions inside the functions ******************* */

function fun1(){
    const firstName  = "Aman"

    function fun2(){
        const lastName = " jha"
    //     console.log('inner scope of func2',firstName);
    //     console.log(firstName+lastName); 
     }
    fun2()
}

// fun1  // if we write like this we are just taking the refrence not calling the function
fun1()
// console.log(firstName);

/********************************functions with objects ******************************* */

const user = {
    username : 'aman jha',
    price : 1000,
    message : function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);  
    }
}

// user.message()

// user.username='dhanush'
// user.message()

// console.log(this);
// this is {} empty object 

/************************** method 1*************************** */

function method1(){
    console.log('pehla method');
}

// method1()

const chai =  () => {
    let username = "hitesh"
    console.log(username);
}


// chai()


const fun4 = () => {
    let vr = 'dhoom machale'
    console.log(`${vr},machayega kya !!!!!!!`);    
}

// fun4()

const addTwo = (num1, num2) => {
    return num1 + num2
}
// this is called explicit function 

// const addTwo = (num1, num2) =>  num1 + num2
// this is implicit function 

const mul = (n1,n2) => (n1*n2)
console.log(mul(5,6));


// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()