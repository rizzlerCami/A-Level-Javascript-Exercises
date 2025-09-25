// TODO: Create a Book class with a constructor that takes title and author
// Add a method getInfo() that returns a string like: "Title by Author"

// Uncomment and complete below:
 class Book {
   constructor(title, author) {
     this.title = title
     this.author = author
   }
   getInfo() {
     return this.title + " by " + this.author
   }
 }

// Example usage (leave this):
document.getElementById("btnShow").onclick = function() {
   const book = new Book("1984", "George Orwell");
   document.getElementById("output").innerText = book.getInfo();
};
