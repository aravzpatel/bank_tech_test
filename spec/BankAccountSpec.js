describe("BankAccount", function(){
  var account;

  beforeEach(function(){
    account = new BankAccount();
  })

  describe("when a bank account is created", function(){
    it("should have an empty transaction log", function(){
      expect(account.transactionLog).toEqual([])
    })
  })

  describe("when making a depost", function(){
    it("should record a deposit of 100 in the transaction log", function(){
      account.deposit(100)

      expect(account.transactionLog).toEqual([{type: "Deposit", amount: 100, date: Date.now}])
    })
  })
});