const course ={
    coursname :"Javascript Tutorial",
    price : "1000",
    instructor :"Youtube"
}
// console.log(course.instructor);

const{instructor} = course;  // destructuring object

console.log(instructor);

//Another method
const{price: kimat} = course;

console.log(kimat);

//jason
// {
//     "name" : "abhi",
//     "price"  :"free",
//     "inst" :" youtube"
// }

