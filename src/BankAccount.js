class BankAccount{
  constructor(){
    this.transactionLog = []
  }

  deposit(amount){
    if ( amount < 0){
      throw new Error("Deposit Issue: Negative amounts are not possible")
    }
    var incomingDeposit = { type: "Deposit", amount: amount, date: Date.now };
    
    this.transactionLog.push(incomingDeposit);
  };
};