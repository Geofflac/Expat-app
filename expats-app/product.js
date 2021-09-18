var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 2139c4dc-9c98-33a2-93a4-9bac6312eaad");
myHeaders.append("Cookie", "incap_ses_218_1634122=un/wf0cb3HGB6zK/TH4GA9IQRGEAAAAAD3s1o6TPgGdbkBNcHa2cRg==; nlbi_1634122=H+jDNjPkCghm9QZTZPv8YwAAAAAIlAo1x9p4yPwEVeUZY6L7; visid_incap_1634122=B63H5bSbT7mp8lolgA5SskRTQ2EAAAAAQUIPAAAAAAA5F6Tqti9TM6u6d+RneyTf");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};


fetch("https://api.ocbc.com:8243/Deposit_Accounts/1.0", requestOptions)
  .then(response => response.text())
  .then( result => {
    console.log(JSON.parse(result));
    console.log(JSON.parse(result).CASAAccountsList[0].subCategoryList[0].product[0]);
    type = JSON.parse(result).CASAAccountsList[0].categoryName;
    document.getElementById('api_type').innerHTML = `${type}`;
    product = JSON.parse(result).CASAAccountsList[0].subCategoryList[0].product[0].productName;
    document.getElementById('api_product').innerHTML = `${product}`;
    benefits = JSON.parse(result).CASAAccountsList[0].subCategoryList[0].product[0].benefits;
    document.getElementById('api_benefit').innerHTML = `${benefits}`;
  })
  .catch(error => console.log('error', error));

