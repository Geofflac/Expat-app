
const request = require("request");

const url = "https://newsapi.org/v2/top-headlines";

var queryObj = {
    country: "sg",
    category: "business",
    from: "2021-09-18",
    to: "2021-09-18", 
    sortBy: "popularity", 
    apiKey: "91bc6180ccf548f69c9b6537011f8c41"
}

var results;

request({url:url, qs:queryObj}, (error, response) => {
    results = JSON.parse(response.body);
    console.log(results['articles']);
    
});


/*
const fetch = require('cross-fetch');

var requestOptions = {
    method: "get",
    headers: {
        "Authorization": "Bearer 2139c4dc-9c98-33a2-93a4-9bac6312eaad",
        "Cookie": "incap_ses_218_1634122=un/wf0cb3HGB6zK/TH4GA9IQRGEAAAAAD3s1o6TPgGdbkBNcHa2cRg==; nlbi_1634122=H+jDNjPkCghm9QZTZPv8YwAAAAAIlAo1x9p4yPwEVeUZY6L7; visid_incap_1634122=B63H5bSbT7mp8lolgA5SskRTQ2EAAAAAQUIPAAAAAAA5F6Tqti9TM6u6d+RneyTf"
    },
    redirect: "follow",
};

fetch("https://api.ocbc.com:8243/Deposit_Accounts/1.0", requestOptions)
.then(response => response.text())
.then( result => {
  console.log(JSON.parse(result));
  console.log(JSON.parse(result).CASAAccountsList[0].subCategoryList[0].product[0]);
  bank = "ocbc";
  document.getElementById('api_bank').innerHTML = `<img src="/expats-app/images/${bank}.png" class="img-fluid" alt="${bank}" width="200" height="200">`;
  type = JSON.parse(result).CASAAccountsList[0].categoryName;
  document.getElementById('api_type').innerHTML = `${type}`;
  product = JSON.parse(result).CASAAccountsList[0].subCategoryList[0].product[0].productName;
  document.getElementById('api_product').innerHTML = `${product}`;
  benefits = JSON.parse(result).CASAAccountsList[0].subCategoryList[0].product[0].benefits;
  document.getElementById('api_benefit').innerHTML = `${benefits}`;
})
.catch(error => console.log('error', error));

/*

const fetch = require('cross-fetch');

var ocbcRequestOptions = {
    method: "get",
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': "1e61cb29-a8a4-3c8a-abc7-6d5f2bca291d",
        'Access-Control-Allow-Origin': "*"
    },
    redirect: "follow",
};

async function getOcbcData() {
    try{
        let response = await fetch("https://api.ocbc.com:8243/Deposit_Accounts/1.0", ocbcRequestOptions);
        let ocbcData = await response.json();
        return ocbcData;
    } catch(err) {
        console.log(err);
    }
}

function compare() {
    ocbcData = getOcbcData();
    console.log(ocbcData);
}

compare()
*/