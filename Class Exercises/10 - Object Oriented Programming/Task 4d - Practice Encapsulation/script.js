// TODO: Create a Safe class with a private #code field
// Add setCode(code) and unlock(guess) methods

// Uncomment and complete below:
 class Safe {
   #code;
   constructor() {
    this.#code = ""
   }
   setCode(code) {
     this.#code = code
   }
   unlock(guess) {
    let right = "hm"
     if (guess === this.#code) {
      right = "Yes!"
     } else {
      right = "No :("
     }
     return right
   }
 }

const safe = new Safe();
document.getElementById("btnSet").onclick = function() {
   safe.setCode("1234");
};
document.getElementById("btnUnlock").onclick = function() {
   document.getElementById("output").innerText = safe.unlock("1204");
};
