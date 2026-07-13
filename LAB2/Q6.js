let n1 = prompt("Enter the first operand");
let op = prompt("Enter the operand from { + , - , * , / , ** , % } ");
let n2 = prompt("Enter the second operand");

if(isNaN(n1) ||isNaN(n2)){
    console.log("Invalid Operands");
}else{
    n1 = Number(n1);
    n2 = Number(n2);
    switch(op){
        case '+' : console.log(n1 + n2);
        break;
        case '-' : console.log(n1 - n2);
        break;
        case '*' : console.log(n1 * n2);
        break;
        case '/' : console.log(n1/n2);
        break;
        case '**' : console.log(n1**n2);
        break;
        case '%' : console.log(n1%n2);
        break;
        default : console.log("Invalid Operator");
    } 
}
