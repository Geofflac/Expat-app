var express = require('express');
var secured = require('../lib/middleware/secured');
var router = express.Router();

/* GET user logged-in HTML. */
router.get('/logged', secured(), function (req, res, next) {
  console.log(req.user);
  res.render('logged.html',{userinfo: req.user});
});

/* GET user Product  HTML. */
router.get('/product', secured(), function (req, res, next) {
  res.render('product.html');
});

/* GET user About HTML. */
router.get('/about', secured(), function (req, res, next) {
  res.render('about.html');
});

/* GET UOB HTML. */
router.get('/deposit_uob', secured(), function (req, res, next) {
  res.render('deposit_uob.html');
});

/* GET banklist HTML. */
router.get('/deposit_ocbc', secured(), function (req, res, next) {
  res.render('deposit_ocbc.html');
});

// Geoffrey add-on
// data base
const user = require("./user");
router.use(user.router);


// Back end API
router.get('/apihello', (request, response) => {
  response.status(200).send("Hello!")});

const fetch = require('node-fetch');

router.get('/apideposit', (request, response) => {

    var deposit =[
          {
            bank: "uob",
            account: "Deposit Accounts",
            product: "Time Deposit (Fixed Deposit)",
            benefit: `<table class="responsive-table-rates table table-striped table-bordered" style="text-align: center;">
            <tbody>
                <tr>
                    <td style="background-color: #002265; text-align: center; color: #ffffff;">Deposit Range<br>&nbsp;(% p.a)</td>
                    <td style="background-color: #002265; text-align: center; color: #ffffff;">Below<br>S$50,000</td>
                    <td style="background-color: #002265; text-align: center; color: #ffffff;">S$50,000 -<br>S$249,999</td>
                    <td style="background-color: #002265; text-align: center; color: #ffffff;">S$250,000 -<br>S$499,999</td>
                    <td style="background-color: #002265; text-align: center; color: #ffffff;">S$500,000 -<br>S$999,999</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>
                        <p><strong>1 Mth</strong></p>
                    </td>
                    <td>
                        <p>0.0500</p>
                    </td>
                    <td>
                        <p>0.0500</p>
                    </td>
                    <td>
                        <p>0.0500</p>
                    </td>
                    <td>
                        <p>0.0500</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p><strong>2 Mths</strong></p>
                    </td>
                    <td>
                        <p>0.0500</p>
                    </td>
                    <td>
                        <p>0.0500</p>
                    </td>
                    <td>
                        <p>0.0500</p>
                    </td>
                    <td>
                        <p>0.0500</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p><strong>3 Mths</strong></p>
                    </td>
                    <td>
                        <p>0.0500</p>
                    </td>
                    <td>
                        <p>0.0500</p>
                    </td>
                    <td>
                        <p>0.0500</p>
                    </td>
                    <td>
                        <p>0.0500</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p><strong>4 Mths</strong></p>
                    </td>
                    <td>
                        <p>0.0500</p>
                    </td>
                    <td>
                        <p>0.0500</p>
                    </td>
                    <td>
                        <p>0.0500</p>
                    </td>
                    <td>
                        <p>0.0500</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p><strong>5 Mths</strong></p>
                    </td>
                    <td>
                        <p>0.0500</p>
                    </td>
                    <td>
                        <p>0.0500</p>
                    </td>
                    <td>
                        <p>0.0500</p>
                    </td>
                    <td>
                        <p>0.0500</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p><strong>6 Mths</strong></p>
                    </td>
                    <td>
                        <p>0.0500</p>
                    </td>
                    <td>
                        <p>0.0500</p>
                    </td>
                    <td>
                        <p>0.0500</p>
                    </td>
                    <td>
                        <p>0.0500</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p><strong>7 Mths</strong></p>
                    </td>
                    <td>
                        <p>0.1000</p>
                    </td>
                    <td>
                        <p>0.1000</p>
                    </td>
                    <td>
                        <p>0.1000</p>
                    </td>
                    <td>
                        <p>0.1000</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p><strong>8 Mths</strong></p>
                    </td>
                    <td>
                        <p>0.1000</p>
                    </td>
                    <td>
                        <p>0.1000</p>
                    </td>
                    <td>
                        <p>0.1000</p>
                    </td>
                    <td>
                        <p>0.1000</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p><strong>9 Mths</strong></p>
                    </td>
                    <td>
                        <p>0.1000</p>
                    </td>
                    <td>
                        <p>0.1000</p>
                    </td>
                    <td>
                        <p>0.1000</p>
                    </td>
                    <td>
                        <p>0.1000</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p><strong>10 Mths</strong></p>
                    </td>
                    <td>
                        <p>0.1500</p>
                    </td>
                    <td>
                        <p>0.1500</p>
                    </td>
                    <td>
                        <p>0.1500</p>
                    </td>
                    <td>
                        <p>0.1500</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p><strong>11 Mths</strong></p>
                    </td>
                    <td>
                        <p>0.1500</p>
                    </td>
                    <td>
                        <p>0.1500</p>
                    </td>
                    <td>
                        <p>0.1500</p>
                    </td>
                    <td>
                        <p>0.1500</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p><strong>12 Mths</strong></p>
                    </td>
                    <td>
                        <p>0.1500</p>
                    </td>
                    <td>
                        <p>0.1500</p>
                    </td>
                    <td>
                        <p>0.1500</p>
                    </td>
                    <td>
                        <p>0.1500</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p><strong>13 Mths</strong></p>
                    </td>
                    <td>
                        <p>0.2000</p>
                    </td>
                    <td>
                        <p>0.2000</p>
                    </td>
                    <td>
                        <p>0.2000</p>
                    </td>
                    <td>
                        <p>0.2000</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p><strong>14 Mths</strong></p>
                    </td>
                    <td>
                        <p>0.2000</p>
                    </td>
                    <td>
                        <p>0.2000</p>
                    </td>
                    <td>
                        <p>0.2000</p>
                    </td>
                    <td>
                        <p>0.2000</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p><strong>15 Mths</strong></p>
                    </td>
                    <td>
                        <p>0.2000</p>
                    </td>
                    <td>
                        <p>0.2000</p>
                    </td>
                    <td>
                        <p>0.2000</p>
                    </td>
                    <td>
                        <p>0.2000</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p><strong>18 Mths</strong></p>
                    </td>
                    <td>
                        <p>0.2000</p>
                    </td>
                    <td>
                        <p>0.2000</p>
                    </td>
                    <td>
                        <p>0.2000</p>
                    </td>
                    <td>
                        <p>0.2000</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p><strong>24 Mths</strong></p>
                    </td>
                    <td>
                        <p>0.2000</p>
                    </td>
                    <td>
                        <p>0.2000</p>
                    </td>
                    <td>
                        <p>0.2000</p>
                    </td>
                    <td>
                        <p>0.2000</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p><strong>36 Mths</strong></p>
                    </td>
                    <td>
                        <p>0.5000</p>
                    </td>
                    <td>
                        <p>0.5000</p>
                    </td>
                    <td>
                        <p>0.5000</p>
                    </td>
                    <td>
                        <p>0.5000</p>
                    </td>
                </tr>
            </tbody>
        </table>`
          }
        ];

    myHeaders = { 
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language":"en-US,en;q=0.5",
        "Authorization": "Bearer e2715020-1851-3eaa-853b-9d8c5d569fb4",
        "Cache-Control" : "max-age=0",
        "Connection": "keep-alive",
        "Host": "api.ocbc.com:8243",
        "Origin": "http://127.0.0.1:5501",
        "Referer" :"http://127.0.0.1:5501/",
        "Sec-Fetch-Dest" :"empty",
        "Sec-Fetch-Mode" :"cors",
        "Sec-Fetch-Site" :"cross-site",
        "User-Agent" :"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:92.0) Gecko/20100101 Firefox/92.0"
    };
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://api.ocbc.com:8243/Deposit_Accounts/1.0", requestOptions)
      .then(response => response.text())
      .then(result => {
        //   console.log(result);
          let bank_value = "ocbc";
          let account_value = JSON.parse(result).CASAAccountsList[0].categoryName;
          let product_value = JSON.parse(result).CASAAccountsList[0].subCategoryList[0].product[0].productName;
          let benefit_value = JSON.parse(result).CASAAccountsList[0].subCategoryList[0].product[0].benefits;
          let newdeposit = {
              bank: bank_value,
              account: account_value,
              product: product_value,
              benefit: benefit_value
            }
        
        deposit.push(newdeposit);
        finaldeposit = deposit;
    })
      .catch(error => console.log('error', error));
      response.status(200).send(finaldeposit)
    
    } );

router.get('/token', (request, response) => {
    account = request.query.address;
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
      
    fetch(`https://api-ropsten.etherscan.io/api?module=account&action=tokentx&address=${account}&apikey=JE77AXXXFSNZ4T357K4HNKJ9DRRRPP53YZ`, requestOptions)
        .then(response => response.text())
        .then(result => {
            let tokenData = JSON.parse(result);
            tokenName = tokenData.result[0].tokenName;
            tokenSymbol = tokenData.result[0].tokenSymbol;
            tokenValue = (tokenData.result[0].value)/1000000000000000000;
            tokenResponse = {
                nameToken: tokenName,
                symboleToken: tokenSymbol,
                qtyToken: tokenValue
            }
    })
    .catch(error => console.log('error', error));
    response.status(200).send(tokenResponse);
});

module.exports = router;
