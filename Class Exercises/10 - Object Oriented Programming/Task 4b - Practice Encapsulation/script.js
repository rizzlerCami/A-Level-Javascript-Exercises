// TODO: Create a Counter class with a private #value field
// Add increment() and getValue() methods

// Uncomment and complete below:
 class Counter {
   #value;
   constructor() {
     this.#value = 0
   }
   increment() {
     this.#value += 1
   }
   getValue() {
     return this.#value
   }
 }

const counter = new Counter();
document.getElementById("btnInc").onclick = function() {
   counter.increment();
};
document.getElementById("btnShow").onclick = function() {
   document.getElementById("output").innerText = `Value: ${counter.getValue()}`;
};
