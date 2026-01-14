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
// mycoding.forEach((value)=>{
//     console.log(value.name);
// })

const mynum=[2,3,4,5,6,7,8,9];
// mynum.forEach(value=>{
//      console.log(value)
// })
// for(const i of mynum){
//     console.log(i);
// }

const superheroes = [
  { name: "Spider-Man", movies: 9, created: 1962, owner: "Marvel" },
  { name: "Iron Man", movies: 10, created: 1963, owner: "Marvel" },
  { name: "Captain America", movies: 9, created: 1941, owner: "Marvel" },
  { name: "Thor", movies: 8, created: 1962, owner: "Marvel" },
  { name: "Hulk", movies: 9, created: 1962, owner: "Marvel" },
  { name: "Batman", movies: 12, created: 1939, owner: "DC" },
  { name: "Superman", movies: 10, created: 1938, owner: "DC" },
  { name: "Wonder Woman", movies: 6, created: 1941, owner: "DC" },
  { name: "Flash", movies: 5, created: 1940, owner: "DC" },
  { name: "Aquaman", movies: 4, created: 1941, owner: "DC" }
];
// const power=superheroes.filter(hero=>{
//     return hero.owner==="Marvel";
// });
// console.log(power);

// const power2=superheroes.filter(hero=>{ return hero.created>1950});
// console.log(power2);

// const num=[1,2,3,4,5,6,7,8,9,10];
// const add=num.map(n=>n+10);
// console.log(add);

//chain function
const num=[1,2,3,4,5,6,7,8,9,10];
// const add=num.map(n=>n+10).map(n=>n+1).filter(n=>n%2===0);
// console.log(add);

// const red=num.reduce(function(Acc, curval){
//     console.log(`value of acc is: ${Acc}, value of curval: ${curval}`);
//     return Acc+curval
// },1);
// console.log(red);  /*used for shopping waale me*/


const red=num.reduce((Acc, curval)=>{
    console.log(`value of acc is: ${Acc}, value of curval: ${curval}`);
    return Acc+curval
},1);
console.log(red);