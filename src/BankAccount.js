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
    if (amount > this.currentBalance(this.transactionLog)){
      throw new Error("Withdrawal Issue: Cannot withdraw more than deposited")
    }

    var outgoingWithdrawal = {type: "Withdrawal", amount: amount, date: Date.now }
    this.transactionLog.push(outgoingWithdrawal)
  }

  currentBalance(transactionLog){
    var i;
    var total = 0;
    for (i=0; i < transactionLog.length; i++){
      total += transactionLog[i].amount;
    }
    return total
  }

  isValidInput(input){
    if ( input < 0) {
      throw new Error("Deposit Issue: Negative amounts are not possible");
    } else if (isNaN(input)){
      throw new Error("Deposit Issue: Invalid input, please provide a number");
    }
  }
};