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
  document.getElementById('prod_result').innerHTML = account;
}