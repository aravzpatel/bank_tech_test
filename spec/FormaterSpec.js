describe('Formater', function(){
  var account, deposit, printer;

  beforeEach(function(){
    deposit = {type: "Deposit", amount: 40, date: Date.now};
    
    account = {};
    account.transactionLog = [];
    account.transactionLog.push(deposit);

    printer = {};
    printer.job = [];
  })

  it('should store formatted transactionLogs on a printer', function(){
    Formater.extract(account, printer)
    log1 = new Formater(Date.now, 40, 0, 40)
    expect(printer.job).toEqual([log1])
  })
})