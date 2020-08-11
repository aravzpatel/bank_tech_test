class BankAccount{
  constructor(){
    this.transactionLog = []
  }
  
  deposit(amount){
    this._isValidInput(amount)
    
    var incomingDeposit = { type: "Deposit", amount: amount, date: new Date(), 
      current_balance: this._currentBalance(this.transactionLog)+amount 
    };
    
      this.transactionLog.push(incomingDeposit);
  }

  withdraw(amount){
    this._isValidInput(amount)
    this._isValidWithdrawal(amount, this.transactionLog)

    var outgoingWithdrawal = {type: "Withdrawal", amount: amount, date: new Date(),
      current_balance: this._currentBalance(this.transactionLog)-amount 
    };

    this.transactionLog.push(outgoingWithdrawal)
  }

  _currentBalance(transactionLog){
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

  _isValidInput(amount){
    if ( amount < 0) {
      throw new Error("Input Issue: Negative amounts are not possible");
    } else if (isNaN(amount)){
      throw new Error("Input Issue: Invalid input, please provide a number");
    }
  }

  _isValidWithdrawal(withdrawalAmount, transactionLog){
    if (withdrawalAmount > this._currentBalance(transactionLog)){
      throw new Error("Withdrawal Issue: Cannot withdraw more than deposited")
    }
  }
}