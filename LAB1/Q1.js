// Que      :   What is const? When should we use it?

// Ans      :   Const is the keyword in JS when we want to declare which remains constant in whole
//              code then we should use it;
// Remark   :   We can not redeclare or reassign the some value to it 
//              If we try to do like that then it shows the error message in console

const PI = 3.14;

// error :  Assignment to constant variable
PI = 3.15;

// error : PI is already declared
const PI = 3.14;