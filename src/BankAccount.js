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
    this.isValidInput(amount)
    if (amount > this.currentBalance(this.transactionLog)){
      throw new Error("Withdrawal Issue: Cannot withdraw more than deposited")
    }

    var outgoingWithdrawal = {type: "Withdrawal", amount: amount, date: Date.now }
    this.transactionLog.push(outgoingWithdrawal)
  }

  currentBalance(transactionLog){
    var i, total = 0
    for (i=0; i < transactionLog.length; i++){
      if(transactionLog[i].type === "Withdrawal"){
        total -= transactionLog[i].amount;  
      } else{
        total += transactionLog[i].amount;
      }
    }
    return total
  }

  isValidInput(input){
    if ( input < 0) {
      throw new Error("Input Issue: Negative amounts are not possible");
    } else if (isNaN(input)){
      throw new Error("Input Issue: Invalid input, please provide a number");
    }
  }
};