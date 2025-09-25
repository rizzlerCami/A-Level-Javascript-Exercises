// TODO: Create a Movie class with a constructor that takes title and year
// Add a method getInfo() that returns a string like: "Title (Year)"

// Uncomment and complete below:
 class Movie {
   constructor(title, year) {
     this.title = title
     this.year = year
   }
   getInfo() {
     return this.title + " from " + this.year
   }
 }

// Example usage (leave this):
document.getElementById("btnShow").onclick = function() {
   const movie = new Movie("The Matrix", 1999);
   document.getElementById("output").innerText = movie.getInfo();
};
