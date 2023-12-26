// for of Array specific loops...........

const arr =[1,2,3,4,5];
for (const num of arr) {
       console.log(num);       
}

const greeetings = "Hello world!";
for (const greet of greeetings) {    
    console.log(`Each char is ${greet}`);
    
}

//maps.......

const map = new Map();   // unique value
map.set('IN', "india");
map.set('USA', "United states of America");
map.set('Fr', "france");
map.set('IN', "india");

console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key , value] of map) {
    console.log(key, " : ",value);
}

 
const myobj ={
    'game1' : ' cricket',
    'game2' : 'Football'
}
// we cannot do this way in case of object..................
// for (const [key , value] of myobj) {
//     console.log(key, " : ",value);
// }

