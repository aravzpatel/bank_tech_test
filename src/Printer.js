class Printer{
  constructor(){
    this.job = [];
  }
  static statement(account, callback){
    var printer = new Printer();
    
    Formater.extract(account, printer);
    
    callback(printer.job)
  }
}