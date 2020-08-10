class BankAccount{
  constructor(){
    this.transactionLog = []
  }

  deposit(amount){
    this.isValidInput(amount)
    
    var incomingDeposit = { type: "Deposit", amount: amount, date: Date.now };
    this.transactionLog.push(incomingDeposit);
  };

  isValidInput(input){
    if ( input < 0) {
      throw new Error("Deposit Issue: Negative amounts are not possible")
    } else if (isNaN(input)){
      throw new Error("Deposit Issue: Invalid input, please provide a number")
    }
  }
};