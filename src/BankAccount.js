class BankAccount{
  constructor(){
    this.transactionLog = []
  }

  deposit(amount){
    var incomingDeposit = { type: "Deposit", amount: amount, date: Date.now };
    
    this.transactionLog.push(incomingDeposit);
  };
};