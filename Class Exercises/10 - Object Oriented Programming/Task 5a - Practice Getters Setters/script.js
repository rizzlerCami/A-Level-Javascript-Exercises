// TODO: Create a Person class with a getter and setter for name

// Uncomment and complete below:
 class Person {
   constructor(name) {
     this.name = name
   }
   getname() {
     return this.name
   }
   setname(newName) {
     this.name = newName
   }
 }

const person = new Person("Alice");
document.getElementById("btnSet").onclick = function() {
   person.name = "Bob";
};
document.getElementById("btnGet").onclick = function() {
   document.getElementById("output").innerText = person.getname();
};
