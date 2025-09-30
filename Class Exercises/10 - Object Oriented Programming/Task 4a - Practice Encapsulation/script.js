// TODO: Create a BankAccount class with a private #balance field
// Add deposit(amount) and getBalance() methods

// Uncomment and complete below:
 class BankAccount {
   #balance;
   constructor() {
     this.#balance = 0
   }
   deposit(amount) {
     this.#balance += 50
   }
   getBalance() {
     return this.#balance
   }
 }

const account = new BankAccount();
document.getElementById("btnDeposit").onclick = function() {
  account.deposit(50);
};
document.getElementById("btnShow").onclick = function() {
  document.getElementById("output").innerText = `Balance: $${account.getBalance()}`;
};
