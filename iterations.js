//  for(let i=0; i<10; i++) {
//     //  console.log(`outer loop has ${i}`);
//     console.log(`table of ${i}`);
//      for(let j=0; j<=10; j++) {
//         // console.log(`   inner loop has ${j}`);
//         console.log(`${i} * ${j} = ${i*j}`);
//      }
// }

// const myarr=['apple', 'banana', 'cherry'];
// for(const i in myarr) {
//    console.log(`value is ${myarr[i]}`);

//    if (myarr.includes('banana')) {
//       console.log('banana found');
//       break;
//    }
// }
const a="ayush";
for(const i in a){
   console.log(a[i]);
}
//BOTH ARE SAME THING
const b= "AYUSH";
for(const char of b){
   if(char==='Y'){
      continue;
   }    console.log(char);


}