// const arr=[1, 2, 3, 4, 5];
// console.log(arr);

//const arr2=new Array(6, 7, 8, 9, 10);
// console.log(arr[3]);
// console.log(`the array on 4th number is ${arr[3]}`);

// console.log(arr2);

// arr2.push(11);

// console.log(arr2);
// arr2.unshift(0);
// console.log(arr2);
// console.log(arr2.includes(5)); //check whether its prestn or not

// a=[10,20,30,40,50];
// b=[60,70,80,90,100];
// a.push(b)
// console.log(a);
// console.log(typeof a);

// const x=a.concat(b)
// console.log(x);


// n1=[1,2,3,[4,5],6,[7,8,9]];
// console.log(n1.flat()); //sabko ek saath kar dega




//khela hoga ab OBJECTS ke saath...
const a={
    name:"ayush",
    age:19,
    location:"kolkata"
}
console.log(a);

const person={
    firstName: "ayush",
    lastName: "kumar",
    age: 20,
    eyeColor: "black"
}
console.log(this.person);
console.log(person.firstName);

//more functions..
const player= Object.create(person);
player.firstName="AYUSH KUMAR";
// console.log(player.firstName);
// console.log(player.age);
// console.log(player);
Object.assign(player, person); //person ke sare properties player me copy kar dega
// console.log(person);
console.log(player);
const obj=Object.fromEntries(Object.entries(player));     //ye bhi copy kar dega ek object se dusre me
console.log(obj);