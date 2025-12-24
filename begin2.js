console.log("hello guys");
const readline=require("readline");
const r1=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Enter a number: ", function(a){
    console.log(a);
    r1.close();
});