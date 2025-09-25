// TODO: Create a City class with a constructor that takes name and population
// Add a method getInfo() that returns a string like: "Name has Population people"

 // Uncomment and complete below:
 class City {
   constructor(name, population) {
     this.skib = name
     this.doob = population
   }
   getInfo() {
     return this.skib + " with " + this.doob + " many people."
   }
 }

// Example usage (leave this):
document.getElementById("btnShow").onclick = function() {
   const city = new City("London", 9000000);
   document.getElementById("output").innerText = city.getInfo();
};
