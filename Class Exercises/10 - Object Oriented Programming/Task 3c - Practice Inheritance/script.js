// TODO: Create a Person class with a constructor that takes a name
// Create a Student class that extends Person and adds a study() method

// Uncomment and complete below:
 class Person {
   constructor(name) {
     this.name = name
   }
 }
 class Student extends Person {
   study() {
     return this.name + " is studyig rn"
   }
 }

document.getElementById("btnStudent").onclick = function() {
   const student = new Student("Ava");
   document.getElementById("output").innerText = student.study();
};
