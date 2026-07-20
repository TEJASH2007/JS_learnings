function area(...args){                           //  remember args.length()  is wrong  we have to do args.length
                                                  // In Js length is not the method butjust the class member  
    if(args.length === 1){
        console.log(3.14*args[0]*args[0]);
    }else if(args.length === 2){
        console.log("Area of rect angle is : " , args[0]*args[1]);
    }else if(args.length === 3){
        console.log("area of cube : ",(args[0]*args[1] + args[1]*args[2] + args[2]*args[0])*2);
    }
}


// console.log(sum(2,3));
area(10);             // 100
area(4,5);                 //20
area(4,5,6);               // 2(20 + 30 + 24) = 148

function max(a , b , c){
    if(a==undefined){
        console.log("zero parameters are  passed");
    }else if(b==undefined){
        console.log("one parameter is passed");
    }else if(c==undefined){
        console.log("Two parameters are passed");
    }else{
        console.log("Three parameters are passed");
    }
}
max();
max(2);
max(2,3);
max(3,4,5);

function min(){
    console.log(arguments.length , " parameters are passed");
}

min();
min(2);
min(2,3);
min(3,4,5);

function numbers(a,b,c,...args){
    console.log(a," ",b," ",c," ");
    for(let i = 0;i<args.length;i++){
        console.log(args[i]," ");
    }
}
numbers(1,2,3,4,5,6,7,8,9,10);
