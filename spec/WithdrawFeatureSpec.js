describe("Withdrawing from an account", function(){
  var account, deposit;

  beforeEach(function(){
    account = new BankAccount()
    deposit = { type: "Deposit", amount: 100, date: Date.now }
    account.transactionLog = [deposit]
  })

  describe("withdrawing from an account", function(){
    it("should track withdrawals that happen from the account", function(){
      account.withdraw(100)

      expect(account.transactionLog.length).toEqual(2)
      expect(account.transactionLog[1]).toEqual({type: "Withdrawal", amount: 100, date: Date.now })
    })

    it("should not be able to withdraw more than exists in the account balance", function(){
      expect(function(){ account.withdraw(150)}).toThrow(new Error("Withdrawal Issue: Cannot withdraw more than deposited"));
    })

    it("should allow a withdrawal if the running sum of the balance is greater than withdrawal amount", function(){
      var deposit2 = { type: "Deposit", amount: 49, date: Date.now };
      account.transactionLog.push(deposit2);
      account.withdraw(149);

      expect(account.transactionLog.length).toEqual(3);
      expect(account.transactionLog[2]).toEqual({type: "Withdrawal", amount: 149, date: Date.now});
    })

    it("should interpret withdrawals as subtracting from the current balance", function(){
      account.withdraw(30);

      expect(account.currentBalance(account.transactionLog)).toEqual(70);
    })
  })
})