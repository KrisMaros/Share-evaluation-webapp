 var link = "https://docs.google.com/spreadsheets/d/17FejiHBv5ruzGoVjF7npK4C2OGUJQZ42Rm3llGtw1ps/edit#gid=0";

 function getScriptUrl() {
   
    var url = ScriptApp.getService().getUrl();
    return url;
} 

 function doGet(e) {
   
//   Logger.log( Utilities.jsonStringify(e));
   
   if (!e.parameter.page) {
      // When no specific page requested, return "home page"
      return HtmlService.createTemplateFromFile('Stock web-page').evaluate();
   }
   // else, use page parameter to pick an html file from the script
   return HtmlService.createTemplateFromFile(e.parameter['page']).evaluate();
}

function getStockHistoricalData() {  
  
    var ss = SpreadsheetApp.openByUrl(link);
    var ws = ss.getSheetByName("Data");
    //first two numbers - position, than numberof rows, number of columns 
    var data = ws.getRange(2,3,ws.getRange("C2").getDataRegion().getLastRow(),3).getDisplayValues();  
   
    return data;  
//   Logger.log(response);
}

function getStockAttributeData() {  
  
    var ss = SpreadsheetApp.openByUrl(link);
    var ws = ss.getSheetByName("Data");
    //first two numbers - position, than number of rows, number of columns 
    var price = ws.getRange(1,6,9,2).getDisplayValues();
    var metrics = ws.getRange(1,8,3,2).getDisplayValues();
    var other = ws.getRange(1,10,6,2).getDisplayValues();

    var data = {price: price, metrics: metrics, other: other};   
    return data;  
//   Logger.log(response);
}

function requestLists() {  
  
    var ss = SpreadsheetApp.openByUrl(link);
    var ws = ss.getSheetByName("Stock-Tickers");
    //first two numbers - position, than number of rows, number of columns 
    var stocks = ws.getRange(1,1,ws.getRange("A1").getDataRegion().getLastRow(),6).getDisplayValues();  
    var filters = ws.getRange(1,8,ws.getRange("H1").getDataRegion().getLastRow(),2).getDisplayValues();
  
     var data = {stock: stocks, filter: filters};
     return data;  
//   Logger.log(response);
}

function confirmChange()  {
  
     var ss = SpreadsheetApp.openByUrl(link);
     var ws = ss.getSheetByName("Data");
  
     var data = ws.getRange('B2').getDisplayValue();
     return data;
}

function setStartDateRange(date) {
  
     var ss = SpreadsheetApp.openByUrl(link);
     var ws = ss.getSheetByName("Data");
  
     ws.getRange('A4').setValue(date);  
}

function setEndDateRange(date) {
  
     var ss = SpreadsheetApp.openByUrl(link);
     var ws = ss.getSheetByName("Data");
  
     ws.getRange('A6').setValue(date);  
}

function setNewTicker(ticker, name, sector, exchangeName) {
  
     var ss = SpreadsheetApp.openByUrl(link);
     var ws = ss.getSheetByName("Data");
  
     ws.getRange('A2').setValue(ticker);
     ws.getRange('B2').setValue(name);
     ws.getRange('K2').setValue(sector);
     ws.getRange('K3').setValue(exchangeName);
       
}

function include(filename) {

     return HtmlService.createHtmlOutputFromFile(filename).getContent();
}