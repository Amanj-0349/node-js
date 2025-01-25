// singleton objects
// object.create 

// object literals

const myinfo = {
    name : 'Aman jha',
    email : 'amanj@gmail.com',
    phone:9821095951,
    degree:'btech',
    location:'New delhi'
}

// console.log(myinfo);

/******* how to access the elements of the object **********/ 

// console.log(myinfo.name);
// console.log(myinfo.location);
// console.log(myinfo.degree);
// console.log(myinfo.phone);

// /***other ways is */
// console.log(myinfo['degree']);
// console.log(myinfo['email']);

// basically object is the pair of key and value 
// so if the key is given in the string format in between quotes then its better to use square brackets
// to access the items of the object 

/**************************** we can also freeze the value of any key */

Object.freeze(myinfo)

// after this step i can not change any thing in the object 

myinfo.name = "chacha choudhary"

// console.log(myinfo.name);

/**********singleton object  */

// const user = new Object() 
// if i create something using this called singleton object 

const user = {}

user.id='aman'
user.password = 1234
user.mail = 'aman@gmail.com'

// console.log(user);

/************we can also see something like object inside the object ********** */

const user1 = {
    email : 'amanj03gmail',
    fullname: {
        userfullname : {
            first :'aman',
            last : 'jha'
        }
    }
}

// console.log(user1);

/**********************other exampe of grouping objects******************/

const obj1 = {
    1:'a',
    2:'b'
}

const obj2 = {
    3:'c',
    4:'d'
}
const obj3 = {
    5:'e',
    6:'f'
}

const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

// we can also get array of objects 

const newuser = [
    {
        id:1,
        name:'aman'
    },
    {
        id:2,
        name:'richa'
    },
    {
        id:3,
        name:'shiva'
    }
]

// console.log(newuser);

/**********to get the keys  */

console.log(Object.keys(newuser));
console.log(Object.values(newuser));
console.log(Object.entries(newuser));





