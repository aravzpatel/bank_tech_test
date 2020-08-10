class BankAccount{
  constructor(){
    this.transactionLog = []
  }

  deposit(amount){
    if ( amount < 0) {
      throw new Error("Deposit Issue: Negative amounts are not possible")
    } else if (isNaN(amount)){
      throw new Error("Deposit Issue: Invalid input, please provide a number")
    }
    
    var incomingDeposit = { type: "Deposit", amount: amount, date: Date.now };
    this.transactionLog.push(incomingDeposit);
  };
};