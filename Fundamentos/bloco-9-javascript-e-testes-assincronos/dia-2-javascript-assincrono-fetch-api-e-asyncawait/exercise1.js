const API_URL = 'https://api.coincap.io/v2/assets';
const cryptoContainer = document.getElementsByClassName('crypto-container');

function appendCrypto(database) {
  const { data } = database;
  const coinArray = data.filter((coin, index) => index < 10);
  coinArray.forEach(coin => {
    const newLi = document.createElement('li');
    newLi.innerHTML = `${coin.name} (${coin.symbol}): ${parseFloat(coin.priceUsd).toFixed(2)} $USD`;
    cryptoContainer[0].appendChild(newLi);
  });
}


async function fetchCrypto() {
  const cryptoArray = await fetch(API_URL);
  const jsonArray = await cryptoArray.json();
  appendCrypto(jsonArray);
}


window.onload = () => fetchCrypto();
