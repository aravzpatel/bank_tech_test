describe("Printing a bank account", function(){
  var account;

  beforeEach(function(){
    account = new BankAccount();
    account.deposit(40)
  })

  describe("printing a statement", function(){
    it("should be able to print the account log", function(){
      var consoleTable = jasmine.createSpy("console.table");
      Printer.statement(account, consoleTable)
      var date = new Date();
      var isodate = date.toISOString().split("T")[0];

      var deposit = 40
      var withdrawal = 0
      var currentBalance = 40
      
      var log1 = new Formater(isodate, deposit.toFixed(2), withdrawal.toFixed(2), currentBalance.toFixed(2))
      expect(consoleTable).toHaveBeenCalledWith([log1])
    })
  })
})