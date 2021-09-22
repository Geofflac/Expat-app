function deposit() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("http://localhost:3000/apideposit", requestOptions)
    .then(response => response.text())
    .then(result => {
      depositARR = JSON.parse(result);
      console.log(depositARR);
      let text = "";
      depositARR.forEach((item) => {
        console.log(item.bank);
        text += `<a href="/deposit_${item.bank}"><img src="/images/${item.bank}.png" class="img-fluid" alt="${item.bank}" width="200" height="200"></a>`;
      });
      console.log(text);
      document.getElementById('prod_result').innerHTML = text;
    })
    .catch(error => console.log('error', error));;
}