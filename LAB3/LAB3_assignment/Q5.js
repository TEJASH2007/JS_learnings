const GCD = (a,b=a*3)=>{
    while(b!=0){
        let temp = b;
        b = a%b;
        a = temp;
    }
    return a;
}

function check(f){
    if(typeof(f)=="function"){
        console.log("variable of function type");
    }else{
        console.log("Variable is not of the function type");
    }
}
check(GCD);