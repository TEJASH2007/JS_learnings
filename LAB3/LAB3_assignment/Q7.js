const mul = (a,b)=>{
    return a*b;
}
const sum = (a,b) => (a+b) ;
const divide = (a,b) => ( a/b );

function calculator(f , a , b){
    console.log(f(a,b));
}

calculator(mul,2,3);//6
calculator(sum,2,3); // 5
calculator(divide,2,3) // 0.66

