var link = "https://docs.google.com/spreadsheets/d/17FejiHBv5ruzGoVjF7npK4C2OGUJQZ42Rm3llGtw1ps/edit#gid=0";

function getMFsHistoricalData() {  
  
    var ss = SpreadsheetApp.openByUrl(link);
    var ws = ss.getSheetByName("MFs");
    //first two numbers - position, than numberof rows, number of columns 
    var data = ws.getRange(2,3,ws.getRange("C2").getDataRegion().getLastRow(),3).getDisplayValues();  
   
    return data;  
//   Logger.log(response);
}

function getMFsAttributeData() {  
  
    var ss = SpreadsheetApp.openByUrl(link);
    var ws = ss.getSheetByName("MFs");
    //first two numbers - position, than number of rows, number of columns 
    var returns = ws.getRange(1,6,7,2).getDisplayValues();
    var dividends = ws.getRange(1,8,4,2).getDisplayValues();
    var others = ws.getRange(1,10,5,2).getDisplayValues();  
   
    var data = {returns: returns, dividend: dividends, other: others};   
    return data;  
//   Logger.log(response);
}

function requestMFsLists() {  
  
    var ss = SpreadsheetApp.openByUrl(link);
    var ws = ss.getSheetByName("MFs-Tickers");
    //first two numbers - position, than number of rows, number of columns 
    var funds = ws.getRange(2,1,ws.getRange("A2").getDataRegion().getLastRow(),4).getDisplayValues();
    var filters = ws.getRange(1,6,ws.getRange("F1").getDataRegion().getLastRow(),2).getDisplayValues();  
  
    var data = {fund: funds, filter: filters};
    return data;
      
//   Logger.log(response);
}

function setMFsStartDateRange(date) {
  
     var ss = SpreadsheetApp.openByUrl(link);
     var ws = ss.getSheetByName("MFs");
  
     ws.getRange('A4').setValue(date);  
}

function setMFsEndDateRange(date) {
  
     var ss = SpreadsheetApp.openByUrl(link);
     var ws = ss.getSheetByName("MFs");
  
     ws.getRange('A6').setValue(date);  
}

function setMFticker(ticker, name) {
  
     var ss = SpreadsheetApp.openByUrl(link);
     var ws = ss.getSheetByName("MFs");
  
     ws.getRange('A2').setValue(ticker);
     ws.getRange('E2').setValue(name); 
}

function confirmMFsChange()  {
  
     var ss = SpreadsheetApp.openByUrl(link);
     var ws = ss.getSheetByName("MFs");
  
     var data = ws.getRange('E2').getDisplayValue();
     return data;
}








