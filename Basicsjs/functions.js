// console.log("A");
// console.log("b");
// console.log("h");
// console.log("i");

function saymyname(){
    console.log("A");
    console.log("b");
    console.log("h");
    console.log("i");
    

}
saymyname();

function add(a,b){  // not need to declare data type parameter
    console.log(a+b);
}

add(2,3);     // Argument need to be passed

console.log();
const result = add(4,5);
console.log( "Result", result);  // undefined 
add(3,"4");

function add1(a,b){  // not need to declare data type parameter
     let res = a +b ;
      return res;
      // return a + b;
}

const res1 = add1(4,5);
console.log( "Result", res1);


function loginuser(username){
    if(username===undefined){
        console.log("please enter a username ");
        return;
    }
    return `${username}  just logged in ` 
}

console.log(loginuser("Abhishek"));
console.log(loginuser());   // undefined





