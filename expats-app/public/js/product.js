//const fetch = require('node-fetch');
//const { Headers } = fetch;

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 1e61cb29-a8a4-3c8a-abc7-6d5f2bca291d");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

function getOCBCDeposit() {
  fetch("https://api.ocbc.com:8243/Deposit_Accounts/1.0/*", requestOptions)
    .then(response => response.text())
    .then(result => {
        let accountDetailsObj = JSON.parse(result);
        accountDetailsObj = accountDetailsObj["CASAAccountsList"][0]["subCategoryList"][0]["product"][0];
        let htmlContent = "";
        for (const [key, value] of Object.entries(accountDetailsObj)) {
            console.log(`${key}: ${value}`);
            htmlContent += `${value}`;
          }
        console.log(accountDetailsObj);
        document.getElementById('prod_result').innerHTML = htmlContent;
    })
    .catch(error => console.log('error', error));
}
