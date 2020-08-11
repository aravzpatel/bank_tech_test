# Bank Tech Test
*Submission by:* Arav Patel
*Date of Submission:* 11/08/20

## Project Summary
This project forms part of my Week9 Makers Academy Course. The project is designed to prepare us for Tech tests that we might receive during our job search. 

The project brief is to write a functioning banking application that will enable a user to perform the following actions:
  1. Make a deposit from their account
  2. Make a withdrawal from their account
  3. Print their bank statement; which is to include: Date of transactions, amount of transactions and rolling current balance of account.

#### Programming Language
This project is written in <JavaScript> and uses OOP to create 3 separate classes with distinct responsibilities. These classes can be found in the </src> folder:
  1. BankAccount.js - which is responsible for performing the functions of the bank account; depositing cash, withdrawing cash and storing a **transaction log**
  2. Formater.js - is responsible for extracting the **transaction log** and formatting it into the required format for a **bank statement**.
  3. Printer.js - is responsible for printing the formated **bank statement** onto the console.
**More details of this class model can be viewed in the Program modelling below**

#### Testing Structure
This project was built using a Test Driven Development Approach which was built on: <Jasmine>, <Karma> and <Istanbul>.
  1. *Jasmine* is used to unit and feature test the system.
  2. *Istanbul* is used to assess the code coverage from tests.
  3. *Karma* is used to run both of these tests at the same time.

##### Test coverage
The project has 13 tests with the following code coverage:
![Image of Code Coverage]
(./coverage/coverage.png)

###### Running Tests
Tests can be run by executing <npm test> in your terminal (please see installation note before executing tests).

### Program Modelling
The application was built using the following process:
  1. Inferring user stories based upon the acceptable criteria.
    - This helped me to gain more context on user requirements and assess whether testing was sufficient.
  2. Building a domain model.
  3. Engineering solution.
  3. Iteratively refining the domain model

#### Inferred User Stories
Story1. As a user
So that I can regulate the amount of cash I hold
I want to be able to create a bank account

Story2. As a user
So that I can save cash
I want to be able to deposit £ to my account

Story3. As a user
So that I can access my money
I want to be able to withdraw £ from my account

Story4. As a user
So that check the status of my bank account
I want to be able to print my bank statement, with itemised deposts and withdrawals

#### Domain Model
As outlined the application relies on 3 classes:
  1. Printer
  2. Formater
  3. Bank Account

  The Bank Account is directly responsible for all deposits, withdrawals and logging transactions.
  The formater is reponsible for extracting data from the transactionLog and passing these to the printer.
  The printer is responsible for requesting a bank statement from the formater and then printing the clean table to the console.

  The class were structured in this format to take heed of the Single Responsibility Principal. By limiting each class to one responsibility the model becomes more flexible as parts can be modified quickly and easily.

  The program has the following diagram:
  ![domain model]
  (./images/BankTechTest.png)

  Deposit and withdrawal actions rely soley open the Bank Account class, with information being stored on the instance of the account in the <transactionLog>.

  Printing the statement is initiated via the Printer. This uses a static method (<statement>) to call on the *Formater* class to extract and format the *transactionLog*. The formatted transactions are stored on an instance of the Printer (created by the static method), equivalent to a printjob, which is used only to print this specific request.
  
  The *Formater* class does this via another static method (<extract>) which extracts the relevant *transactionLog* and formats each transaction. These are used to create instances of Formater, equivalent to formatted lines, which are stored on the Printer until they are printed.

### Installing the Application
1. git clone the directory
2. execute <npm install> in the working directory

### Running the application
1. Open <index.html> in a chrome browser
2. Open the console
3. Create a bank account by instantiating a new version of BankAccount <account = new Account()>
4. Deposit money onto the account <account.deposit(numerical_amount)>
5. Withdraw money from the account <account.withdraw(numerical_amount)>
6. Print the statement using <Printer.statement(account)>

![Demo]
(./images/Demo.png)

##### Guard clauses exist to prevent the following edge cases:
1. Withdrawals cannot exceed the current balance
2. Non numbers cannot be inputted
3. Negative deposits or withdrawals cannot be made

