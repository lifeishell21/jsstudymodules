
// singleton
//Object.create()
const user ={
   name : "Abhi",
   age : 22,
   location: "delhi",
   email : "abhishek@gmail.com",
 "full name" : "Abhi PAndey"
};
console.log(user.age);
console.log(user.email);
console.log(user.location);
console.log(user["name"]);
console.log(user["full name"]);

user.email ="Abhishek2@gmail.com";
console.log(user.email);
// Object.freeze(user)   //  can lock the object cannot changed any attribute
 
// user.email ="Abhishek22@gmail.com";

// console.log(user.email);

user.greeting = function(){
    console.log("Hey Good Morning");
}

user.greeting1 = function(){
    console.log(`Hey Good Morning , ${this.name} `);
}


console.log(user.greeting);   // function anonymous return
console.log(user.greeting());  
console.log(user.greeting1());

/////**************************************************** */


// const tinderuser = new Object();  // singleton object

const user22 ={}
user22.id = "11"
user22.name ="Abhi"
user22.LoggedIn =false

// console.log(user22);

const regularuser ={
    email : "Abhi8345784@gmail.com",
    fullname :{
        userfulname : {
            firstname : "Abhi",
            lastname  :"pandey"
        }
    }
}
console.log(regularuser.fullname.userfulname.lastname);

// combining objects

const obj1 = {1 : "a",  2 : "b"}
const obj2 = {3 : "c",  4 : "d"}

// const obj3 = {obj1,obj2}   // problematic

// console.log(obj3);

const obj3 = Object.assign(obj1,obj2);  //assign
// console.log(obj3);

const obj4 ={...obj1,...obj2};

console.log(obj4);

console.log(Object.keys(user22));
console.log(Object.values(user22));
console.log(Object.entries(user22));

console.log(user22.hasOwnProperty('name'));


