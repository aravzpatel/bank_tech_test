class Printer{
  constructor(){
    this.job = [];
  }
  static statement(account, callback = console.table){
    let printer = new Printer();
    
    Formater.extract(account, printer);
    
    callback(printer.job)
  }
}