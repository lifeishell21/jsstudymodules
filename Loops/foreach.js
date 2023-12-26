const arr =[1,3,4,5,6,7,8,9];

arr.forEach(function (val){
    console.log(val);
})

arr.forEach((item)=>{
   console.log(item);
})


// function printme(item){
//     console.log(item);
// }

// printme.forEach(printme);

arr.forEach((item, index, arr)=>{
    console.log(item,index,arr);
 })

const mycoding =[
    {
      languageName : "javascript",
      languageFileName : "js"  
    },

    {
        languageName : "python",
        languageFileName : "py"  
      },
      {
        languageName : "java",
        languageFileName : "java"  
      }
]
mycoding.forEach((item)=>{
    console.log(item.languageName);
})

mycoding.forEach((item)=>{
    console.log(item.languageFileName);
})












