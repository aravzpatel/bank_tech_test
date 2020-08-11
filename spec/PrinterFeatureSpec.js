describe("Printing a bank account", function(){
  var account, printer;

  beforeEach(function(){
    account = new BankAccount();
    account.deposit(40)
    
    printer = Printer
  })

  describe("printing a statement", function(){
    it("should be able to print the account log", function(){
      var consoleTable = jasmine.createSpy("console.table");
      Printer.statement(account, consoleTable)
      date = new Date();
      isodate = date.toISOString().split("T")[0];

      deposit = 40
      withdrawal = 0
      currentBalance = 40
      
      var log1 = new Formater(isodate, deposit.toFixed(2), withdrawal.toFixed(2), currentBalance.toFixed(2))
      expect(consoleTable).toHaveBeenCalledWith([log1])
    })
  })
})