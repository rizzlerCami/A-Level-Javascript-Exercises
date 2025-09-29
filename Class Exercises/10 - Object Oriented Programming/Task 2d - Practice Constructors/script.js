// TODO: Create a Song class with a constructor that takes title and artist
// Add a details() method that returns a string like: "'Title' by Artist"

// Uncomment and complete below:
 class Song {
   constructor(title, artist) {
     this.name = title
     this.maker = artist
   }
   details() {
     return this.name + " By " + this.maker
   }
 }

document.getElementById("btnSong1").onclick = function() {
   const song = new Song("Imagine", "John Lennon");
   document.getElementById("output").innerText = song.details();
};

document.getElementById("btnSong2").onclick = function() {
   const song = new Song("Bad Guy", "Billie Eilish");
   document.getElementById("output").innerText = song.details();
};
