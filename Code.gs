function doGet(e) {
  var template = HtmlService.createTemplateFromFile('Index');

  // Build and return HTML in IFRAME sandbox mode.
  return template.evaluate()
      .setTitle('Tec Dashboard')

}


/**
 * Return all data from first spreadsheet as an array. Can be used
 * via google.script.run to get data without requiring publication
 * of spreadsheet.
 *
 * Returns null if spreadsheet does not contain more than one row.
 */
function getSpreadsheetData() {
  // This does not work, see https://code.google.com/p/google-apps-script-issues/issues/detail?id=5233
//  var ss = SpreadsheetApp.getActiveSpreadsheet();
//  var data = ss.getSheets()[0].getDataRange().getValues();
  var sheetId = 'sheet-ID';  // Replace with spreadsheet ID
  var data = SpreadsheetApp.openById(sheetId).getSheets()[0].getDataRange().getValues();
  return (data.length > 1) ? data : null;
}
