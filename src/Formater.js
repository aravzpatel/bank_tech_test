class Formater{
  constructor(date, deposit, withdrawal, current_balance){
    this.date = date
    this.deposit = deposit
    this.withdrawal = withdrawal
    this.current_balance = current_balance
  }
  
  static extract(account, callback){
    var sortedtransactionLog = this.sortTransactionLog(account.transactionLog)
    
    sortedtransactionLog.forEach(function(element){
      var deposit = 0;
      var withdrawal = 0;
      if (element.type === "Deposit"){
        deposit = element.amount
      }else{
        withdrawal = element.amount
      }
      var isodate = element.date.toISOString().split("T")[0];
      callback.job.push(new Formater( isodate, deposit.toFixed(2), 
        withdrawal.toFixed(2), element.current_balance.toFixed(2))  
      )
    })
  }

  static sortTransactionLog(log){
    return log.sort((a,b) => b.date - a.date)
  }
}