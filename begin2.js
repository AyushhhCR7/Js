const str="Hello World";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.substring(0,7));


console.log("hello guys");
const readline=require("readline");
const r1=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Enter a number: ", function(a){
    console.log(`the number you eneterd is ${a} ....thank you!`);
    r1.close();
});

