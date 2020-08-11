describe("Printing a bank account", function(){
  var account, deposit, printer;

  beforeEach(function(){
    account = new BankAccount();
    account.deposit(40)
    account = {};
    account.transactionLog = [];
    deposit = {type: "Deposit", amount: 40, date: Date.now};

    account.transactionLog.push(deposit);
    printer = Printer
  })

  describe("printing a statement", function(){
    it("should be able to print the account log", function(){
      var consoleTable = jasmine.createSpy("console.table");
      Printer.statement(account, consoleTable)
      expect(consoleTable).toHaveBeenCalledWith([{date: Date.now, deposit: 40, withdrawal: 0 , current_balance: 40 }])
    })
  })
})