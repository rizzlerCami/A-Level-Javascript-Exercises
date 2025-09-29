// TODO: Create an Animal class with a constructor that takes a name
// Create a Dog class that extends Animal and adds a bark() method

// Uncomment and complete below:
 class Animal {
   constructor(name) {
     this.name = name
   }
   names() {
    return "My names " + this.name
   }
 }
 class Dog extends Animal {
   bark() {
     return "Bark"
   }
 }

document.getElementById("btnDog").onclick = function() {
   const dog = new Dog("Rex");
   document.getElementById("output").innerText = dog.bark();
   document.getElementById("output").innerText += dog.names();
};
