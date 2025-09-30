// BankAccount class with encapsulation using private fields
class BankAccount {
  constructor(owner, initialBalance = 0) {
    this.owner = owner;
    this.#balance = initialBalance;
  }
  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) this.#balance -= amount;
  }
  getBalance() {
    return this.#balance;
  }
  getInfo() {
    return `${this.owner}'s account balance is £${this.#balance}`;
  }
}

document.getElementById("btnShow").onclick = function() {
  const account = new BankAccount("Sam", 100);
  account.deposit(50);
  account.withdraw(30);
  document.getElementById("output").innerText = account.getInfo();
};
