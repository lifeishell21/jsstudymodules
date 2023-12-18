// function claculateprice(num1){
//    return num1;
// }
// console.log(claculateprice(2));

function cal(val1, val2, ...num1){
    return num1
}
console.log(cal(2,4,5,6))    // 5,6

function cali(...num1){    //spread operator or rest operator...
    return num1
}
console.log(cali(2,4,5,6))

const user ={
    username: "Avi",
    price : 199
}
function handleobject(anyobject){

    console.log(`username is ${anyobject.username} and price is ${anyobject.price} `)
}

// handleobject(user);

handleobject({
    username :" sam",
    price :499
})

const array =[200,100,500,6000];

function returnsecond(getarray){
   return getarray[1];
}

console.log(returnsecond(array)); //

console.log(returnsecond([200,99,123,222]));