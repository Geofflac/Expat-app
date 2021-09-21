var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.ocbc.com:8243/Deposit_Accounts/1.0/*',
  'headers': {
    'Authorization': 'Bearer 1e61cb29-a8a4-3c8a-abc7-6d5f2bca291d'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  //const ocbcDepositJSON = response.toJSON();
  const ocbcDepositJSON = JSON.parse(response.body);
  //console.log(ocbcDepositJSON);
  //const ocbcDepositAcc = response.body;
  //console.log(typeof response.toJSON())
  console.log(ocbcDepositJSON["CASAAccountsList"][0]["subCategoryList"][0]["product"][0]["remarks"]);
});