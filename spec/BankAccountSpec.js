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
      

      expect(account.transactionLog).toEqual([{type: "Deposit", amount: 100, date: new Date(), current_balance: 100}])
    })

    it("should not be able to deposit negative amounts", function(){

      expect( function(){account.deposit(-100)} ).toThrow(new Error("Input Issue: Negative amounts are not possible"))
    })

    it("should throw an error if a non-number is deposited", function(){

      expect( function(){ account.deposit('a string')}).toThrow(new Error("Input Issue: Invalid input, please provide a number"))
    })
  })
});