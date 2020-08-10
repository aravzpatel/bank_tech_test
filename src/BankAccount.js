class BankAccount{
  constructor(){
    this.transactionLog = []
  }

  deposit(amount){
    this.isValidInput(amount)
    
    var incomingDeposit = { type: "Deposit", amount: amount, date: Date.now };
    this.transactionLog.push(incomingDeposit);
  };

  withdraw(amount){
    if(amount>this.transactionLog[0].amount){
      throw new Error("Withdrawal Issue: Cannot withdraw more than deposited")
    }
    var outgoingWithdrawal = {type: "Withdrawal", amount: amount, date: Date.now }
    this.transactionLog.push(outgoingWithdrawal)
  }

  isValidInput(input){
    if ( input < 0) {
      throw new Error("Deposit Issue: Negative amounts are not possible");
    } else if (isNaN(input)){
      throw new Error("Deposit Issue: Invalid input, please provide a number");
    }
  }
};