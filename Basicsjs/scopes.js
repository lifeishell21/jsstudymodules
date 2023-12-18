// let a =10;
// const b =20;
// var c =30;

// console.log(a);
// console.log(b);
// console.log(c);

// 
if(true){
    // let a =10;   // not print a out of scope........
    // const b =20;   //  same case here.......
    var c =30;
}
// console.log(a);
// console.log(b);
console.log(c);

let d =300;

if(true){
   let  d =30;
   console.log("inner value : ", d);
}
console.log(d);

function one(){
    const username1 ="avish"
    function two(){
      const web ="facebook"
      console.log(username1);
    }
    // console.log(web);
    two();
}

one();

if(true){
    const use_r ="Abhishek"
    if(use_r==="Abhishek"){
        const website ="youtube"
        console.log(use_r+" "+ website);
    }
    // console.log(website);   // out of scope trying to use it.......
}
// console.log(use_r);


//*****************IMPORTANT EXAMPLE ************************** */
  ///  hoisting concept>>>>>  Declaration and store in variable
//  want to use the function before...........
  console.log(subone(5));
function subone(num){
    return num+1;
}


// console.log(addtwo(5));  hoisting we cannnot do it....
const addtwo =function(num){
    return num+2;
}
console.log(addtwo(5));