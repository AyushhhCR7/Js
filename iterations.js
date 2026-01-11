 for(let i=0; i<10; i++) {
    //  console.log(`outer loop has ${i}`);
    console.log(`table of ${i}`);
     for(let j=0; j<=10; j++) {
        // console.log(`   inner loop has ${j}`);
        console.log(`${i} * ${j} = ${i*j}`);
     }
}
