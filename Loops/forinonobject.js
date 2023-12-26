// for in use in object.................
const myobject ={
    js :"javascript",
    cpp :"C++",
    rb : " ruby"
}
  // key
for (const key in myobject) {
  console.log(key);
}
   // for object value
for (const key in myobject) {
    console.log(myobject[key]);
    
  }
  for (const key in myobject) {
    console.log(`${key} shortcut is for ${myobject[key]}`);
    
  }

  //forin also used in array............

  const array1 = [1,2,4,5,6,7,8];

  for (const key in array1) {      //key is the index of array
    console.log(key);
  }

  for (const key in array1) {    
    console.log(array1[key]);
  }

//   const map = new Map();   // unique value
//   map.set('IN', "india");
//   map.set('USA', "United states of America");
//   map.set('Fr', "france");
//   map.set('IN', "india");

//   for (const key in map) {      // not done 
//     console.log(key);
//   }



  