describe('Formater', function(){
  var account, deposit, printer;

  beforeEach(function(){
    deposit = {type: "Deposit", amount: 40, date: new Date('2019-10-14'), current_balance: 40};
    
    account = {};
    account.transactionLog = [];
    account.transactionLog.push(deposit);

    printer = {};
    printer.job = [];
  })

  it('should store formatted transactionLogs on a printer', function(){
    Formater.extract(account, printer)
    
    date = new Date('2019-10-14');
    isodate = date.toISOString().split("T")[0];
    
    log1 = new Formater(isodate, 40, 0, 40)
    expect(printer.job).toEqual([log1])
  })

  it('should calculate the running current balance', function(){
    withdrawal = {type: "Withdrawal", amount: 20, date: new Date('2020-11-05'), current_balance: 20};
    account.transactionLog.push(withdrawal)

    date = new Date('2020-11-05');
    isodate = date.toISOString().split("T")[0];

    Formater.extract(account, printer)
    log2 = new Formater( isodate, 0, 20, 20)

    expect(printer.job).toEqual([log2, log1])
  })
})