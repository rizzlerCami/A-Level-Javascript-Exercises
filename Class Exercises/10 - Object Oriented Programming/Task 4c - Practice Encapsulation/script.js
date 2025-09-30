// TODO: Create a SecretMessage class with a private #message field
// Add setMessage(msg) and reveal() methods

// Uncomment and complete below:
 class SecretMessage {
   #message;
   constructor() {
     this.#message = ""
   }
   setMessage(msg) {
     this.#message = msg
   }
   reveal() {
     return this.#message
   }
 }

const secret = new SecretMessage();
document.getElementById("btnSet").onclick = function() {
   secret.setMessage("The cake is a lie!");
};
document.getElementById("btnReveal").onclick = function() {
   document.getElementById("output").innerText = secret.reveal();
};
