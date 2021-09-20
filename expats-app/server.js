const express = require("express");
const { join } = require("path");
const app = express();




// ------ Geoffre 15/09 try to install API  ----
// -------- Start ----------

// This is to tell that the body of of post will be in JSON format and will transform in JS
const { response, request } = require('express');
server = express();
const cors = require('cors');
// This is to tell that the body of of post will be in JSON format and will transform in JS
server.use(express.json());
server.use(cors());
router = express.Router();

// try geoffrey data base
const user = require("./user");
server.use(user.router);

router.get('/apihello', (request, response) => {
  console.log(request);  
  response.status(200).send("Hello!");
} );


// try to get the request for deposit

deposit =[{
    bank: "ocbc",
    account: "Deposit Accounts",
    product: "Time Deposit (Fixed Deposit)",
    benefit: '<div id="Benefit for Time Deposit(Fixed Deposit)"> <span>Promotional Interest Rates (% per year):</span> <ul> <li>Singapore Dollar: <ul> <li>$5,000 - S$20,000: <ul> <li>1 - 2 mths:0.0500</li> <li>3 - 5 mths:0.1000</li> <li>6 mth:0.1500</li> <li>7 - 8 mths:0.1500</li> <li>9 - 11 mths:0.2000</li> <li>12 - 15 mths:0.2500</li> <li>18 mth:0.5000</li> <li>24 mth:0.5500</li> <li>36 mth:0.6500</li> </ul> </li> <li>&gt;$20,000 - S$50,000: <ul> <li>1 - 2 mths:0.0500</li> <li>3 - 5 mths:0.1000</li> <li>6 mth:0.1500</li> <li>7 - 8 mths:0.1500</li> <li>9 - 11 mths:0.2000</li> <li>12 - 15 mths:0.2500</li> <li>18 mth:0.5000</li> <li>24 mth:0.5500</li> <li>36 mth:0.6500</li> </ul> </li> <li>&gt;$50,000 - S$99,999: <ul> <li>1 - 2 mths:0.0500</li> <li>3 - 5 mths:0.1000</li> <li>6 mth:0.1500</li> <li>7 - 8 mths:0.1500</li> <li>9 - 11 mths:0.2000</li> <li>12 - 15 mths:0.2500</li> <li>18 mth:0.5000</li> <li>24 mth:0.5500</li> <li>36 mth:0.6500</li> </ul> </li> <li>$100,000 - S$249,999: <ul> <li>1 - 2 mths:0.0500</li> <li>3 - 5 mths:0.1000</li> <li>6 mth:0.1500</li> <li>7 - 8 mths:0.1500</li> <li>9 - 11 mths:0.2000</li> <li>12 - 15 mths:0.2500</li> <li>18 mth:0.5000</li> <li>24 mth:0.5500</li> <li>36 mth:0.6500</li> </ul> </li> <li>$250,000 - S$499,999: <ul> <li>1 - 2 mths:0.0500</li> <li>6 mth:0.1500</li> <li>6 mth:0.1500</li> <li>7 - 8 mths:0.1500</li> <li>9 - 11 mths:0.2000</li> <li>12 - 15 mths:0.2500</li> <li>18 mth:0.5000</li> <li>24 mth:0.5500</li> <li>36 mth:0.6500</li> </ul> </li> <li>$500,000 - S$999,999: <ul> <li>1 - 2 mths:0.0500</li> <li>3 - 5 mths:0.1000</li> <li>6 mth:0.1500</li> <li>36 mth:0.6500</li> <li>9 - 11 mths:0.2000</li> <li>12 - 15 mths:0.2500</li> <li>18 mth:0.5000</li> <li>24 mth:0.5500</li> <li>36 mth:0.6500</li> </ul> </li> <li>For deposits of more than S$1,000,000, you may call us at 1800 363 3333 or approach any branch for interest rates.</li> <li>Esteem time deposits will earn 0.125% p.a. more than time deposits for amount S$5,000 - S$50,000.</li> </ul> </li> <li>Foreign Currency: <ul> <li>https://www.ocbc.com/personal-banking/accounts/interest-rates.html?pid=sg:en:others:accounts:Timedeposits:fcy:Nov16%20:internal:timedeposit_LP::::: </li> </ul> </li> </ul> </div>'
  },
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

server.get('/apideposit', (request, response) => {
  response.status(200).send(deposit);
} );

// -----------------

server.use(router);

server.listen(3000, () => console.log("API running on port 3000"));


// ------ End ------------


// YAP fung AUTH0 try

// Serve static assets from the /public folder
app.use(express.static(join(__dirname, "public")));

// Endpoint to serve the configuration file
app.get("/auth_config.json", (req, res) => {
  res.sendFile(join(__dirname, "auth_config.json"));
});

// Serve the index page for all other requests
app.get("/*", (_, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

// Listen on port 5500
app.listen(5500, () => console.log("Application running on port 5500"));