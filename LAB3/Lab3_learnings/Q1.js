// console.log("Hi") ;// log is the function

//syntax

//function_name(param){
//    so some task
//}

// for call pass the arguments  
// viva Que :  Difference b/w the arguments and parameters

// function myFunction(){
//     console.log("DDU");
// }

// arrow function

// const function_name = (params) =>{
//     // do somework
// };

// don't write the let keyword infront of var in function
// parameters
const mul = (a,b)=> { 
    return a*b;
}

let val = mul(2,3);

function fact(a){
    if(a==0) return 0;
    return fact(a)*fact(a-1);
}
console.log(val);