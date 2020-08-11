describe('Formater', function(){
  var account, deposit, printer, log1;

  beforeEach(function(){
    deposit = {type: "Deposit", amount: 40, date: new Date('2019-10-14'), current_balance: 40};
    var withdrawalAmount = 0
    
    account = {};
    account.transactionLog = [];
    account.transactionLog.push(deposit);

    printer = {};
    printer.job = [];

    var date = new Date('2019-10-14');
    var isodate = date.toISOString().split("T")[0];
    
    log1 = new Formater(isodate, deposit.amount.toFixed(2), withdrawalAmount.toFixed(2), deposit.current_balance.toFixed(2))
  })

  it('should store formatted transactionLogs on a printer', function(){
    Formater.extract(account, printer)
    
    expect(printer.job).toEqual([log1])
  })

  it('should calculate the running current balance', function(){
    var withdrawal = {type: "Withdrawal", amount: 20, date: new Date('2020-11-05'), current_balance: 20};
    var depositAmount = 0
    account.transactionLog.push(withdrawal)

    var date2 = new Date('2020-11-05');
    var isodate2 = date2.toISOString().split("T")[0];

    Formater.extract(account, printer)
    var log2 = new Formater( isodate2, depositAmount.toFixed(2), withdrawal.amount.toFixed(2), withdrawal.current_balance.toFixed(2))

    expect(printer.job).toEqual([log2, log1])
  })
})