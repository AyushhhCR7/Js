// const map=new Map();
// map.set(1,"AYUSH");
// map.set(2,"KUMAR");
// map.set(3,"Boxing");
// // console.log(map);
// // for(const i of map){
// //     console.log(i);
// // }

// // for(const [key, value] of map){
// //     console.log(key,`----`, value);
// // }

// const a={
//     name:"Ayush",
//     age:21,
//     type:"Boxer"
// }
// console.log(a);
// console.log(Object.keys(a));
// // for(const [key, value] of Object.entries(a)){
// //     console.log(key,`----`, value);
// // }
// for(const key in a){
//     console.log(key);
// }

const myarr=["RONALDO", "BIVOL", "MESSI", "CANELO"];
// for(const i in myarr){
//     console.log(myarr[i]);
// }
// for(const i of myarr){
//     console.log(i);
// }
// myarr.forEach(function(value){
//     console.log(value);
// })

// myarr.forEach((value)=>{
//     console.log(value);
// })

const mycoding=[
    {
        name:"Ayush",
        age:"twenty",
        type:"Boxer"
    },
    {
    },
    {                          //what we are doing here is...
                               //creating an array of objects
                               //and accessing elemetns from each objects
    },
]
mycoding.forEach((value)=>{
    console.log(value.name);
})