function deposit() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("http://localhost:3000/apideposit", requestOptions)
    .then(response => response.text())
    .then(result => {
      depositARR = JSON.parse(result);
      let text = "";
      depositARR.forEach((item) => {
        text += `<a href="/deposit_${item.bank}"><img src="/images/${item.bank}.png" class="img-fluid" alt="${item.bank}" width="200" height="200"></a>`;
      });
      document.getElementById('prod_result').innerHTML = text;
    })
    .catch(error => console.log('error', error));;
}

function token() {
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
    Account();
  }
  else {
    alert("Please install MetaMask to use this dApp!");
  }
}
async function Account() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  text =""
  text += `<p>Account address : ${account}</p>`;

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch(`http://localhost:3000/token?address=${account}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      answer = JSON.parse(result);
      tokenName = answer.nameToken;
      tokenSymbole = answer.symboleToken;
      tokenQty = answer.qtyToken;
      text += `<p>Token name : ${tokenName}</p><p>Symbole : ${tokenSymbole}</p><p>Qty : ${tokenQty}</p>`
      document.getElementById('prod_result').innerHTML = text;
    })
    .catch(error => console.log('error', error));
    
}