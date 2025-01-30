// Immediately Invoked Function Expressions (IIFE)

// how to make any function as iife ?

// (function (){

// });


(function fun1(){
    console.log('db committed');   
})();

//  now i want to write two iife then i have to use semicolon at first iife

(()=>{
    console.log('chna chan');
    
})();

// one more iife  and i will take parameer also 

((name)=>{
    console.log(`my name is ${name}`);
})('aman jha')
