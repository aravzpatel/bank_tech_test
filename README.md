## Acceptance Criteria
Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see

## Inferred User Stories
1. As a user
So that I can regulate the amount of cash I hold
I want to be able to create a bank account

2. As a user
So that I can save cash
I want to be able to deposit £ to my account
-> Make a deposit; adds the deposit to the transaction log
  * checks the transactionLog includes the information
-> Always inputs the date on which the deposit is made
  -> Test for edge cases
    * enter in a string  -> return an error
    * enter in a decimal -> ok
    * enter in a negative number -> return an error

3. As a user
So that I can access my money
I want to be able to withdraw £ from my account
-> Make a withdrawal adds to the transaction log
  * checks the transactionLog includes the information

-> Inputs the date when the withdrawal was made

-> Checks that the withdrawal isn't greater than available; if so returns an error

-> Test for edge cases
  * enter in a negative nubmer
  * enter in a string
  * enter in a decimal
  

4. As a user
So that check the status of my bank account
I want to be able to print my bank statement, with itemised deposts and withdrawals