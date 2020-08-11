class Formater{
  constructor(date, deposit, withdrawal, current_balance){
    this.date = date
    this.deposit = deposit
    this.withdrawal = withdrawal
    this.current_balance = current_balance
  }
  
  static extract(account, callback){
    account.transactionLog.forEach(function(element){
      var deposit = 0;
      var withdrawal = 0;
      if (element.type === "Deposit"){
        deposit = element.amount
      }else{
        withdrawal = element.amount
      }

      callback.job.push(new Formater( element.date, deposit, withdrawal, deposit ))
    })
  }
}