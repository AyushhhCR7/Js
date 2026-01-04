function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); 

const mufunc= function(a,b){
    return a*b
};
let x= mufunc(4,5);
console.log(x);


const myFunction = new Function("a", "b", "return a * b");
let y = myFunction(4, 3);  /* agar new use karega to string me hi dalna hoga*/
console.log(y);

multi(5);
function multi(z){
    let result=z*z;
    console.log(result);
}