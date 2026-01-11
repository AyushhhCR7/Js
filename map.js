const map=new Map();
map.set(1,"AYUSH");
map.set(2,"KUMAR");
map.set(3,"Boxing");
// console.log(map);
// for(const i of map){
//     console.log(i);
// }

// for(const [key, value] of map){
//     console.log(key,`----`, value);
// }

const a={
    name:"Ayush",
    age:21,
    type:"Boxer"
}
console.log(a);
console.log(Object.keys(a));
// for(const [key, value] of Object.entries(a)){
//     console.log(key,`----`, value);
// }
for(const key in a){
    console.log(key);
}