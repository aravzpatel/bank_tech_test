describe("BankAccount", function(){
  var account;

  beforeEach(function(){
    account = new BankAccount();
  })

  describe("when a bank accoun is created", function(){
    it("should have an empty transaction log", function(){
      expect(account.transactionLog).toEqual({})
    })
  })
});