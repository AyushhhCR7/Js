function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

const myFather = new Person("John", "Doe", 50, "blue", nationality="indian");
const myMother = new Person("Sally", "Rally", 48, "green");
console.log(myFather);

/*person defines the structure
aur myfather ya mother uspe depend hoga, if person has eye, father will show eye too
like a class and object in oop */
Person.prototype.nationality = "Indian";
console.log(myFather.nationality); 
/*protoype is same as this. jaisa(this.nationality="indian")
but isme storing path, aur copy nahi hota kisi object me*/
console.log(JSON.stringify(Object.entries(myFather)));  //saari properties array me convert ho jaayegi
