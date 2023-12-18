// when referring current context.....

// 
const user ={
    username :"abhi",
    price :299,

    welcomemessage : function(){
     console.log(`${this.username} ,  welcome `);  
     
        console.log(this); 
    }
}
user.welcomemessage();
// user.username ="sambhu"
// user.welcomemessage();


console.log(this);  // empty in node environment.........




// function chai(){
//     console.log(this);
// }
// chai();

function chai(){
    let usern ="Shubahm"
    // console.log(this.usern);   //  undefined work only under object
}
// chai();

/// arrow function

const chai2 =()=>{
    let username ="nitish"
    console.log(this);
    console.log(this.username);
}
chai2();

const addit =(num1, num2)=>{
   return num1 +num2;
}
console.log(addit(3,4));

// const addit1 =(num1, num2)=> num1 +num2
const addit1 =(num1, num2)=> (num1 +num2)

console.log(addit1(10,20));


///IIFE ........ immediately invoked function  Expression 


( function here() {    //named IIFE
    console.log("Db connected");
   })();

   ( ()=>  {
    console.log("Db connected 2");
   })();

   ( (name)=>  {
    console.log(`Db connected 3 ${name}`);
   })('abhishek');



























