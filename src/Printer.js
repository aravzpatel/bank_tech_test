class Printer{
  static statement(account, callback){
    var printjob = new Printer();
    Formater(account, printjob);
    callback(printjob.list)
  }
}