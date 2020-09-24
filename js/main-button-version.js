const exchangeRates = {
  Yandex: 1,
  Ethereum: 2,
  Bitcoin: 3,
  Sberbank: 4,
  Privatebank: 5,
  Paypal: 6,
  PM: 7,
  QIWI: 8,
};

const reserveMoney = {
  yandex: 10000,
  ethereum: 10000,
  bitcoin: 10000,
  sberbank: 10000,
  privatebank: 10000,
  paypal: 10000,
  pm: 10000,
  qiwi: 10000,
};

let inputSumm = document.getElementById('inputSumm');
let inputMoneyType = document.getElementById('give-money-type');
let outputMoneyType = document.getElementById('take-money-type');
let result = document.getElementById('money-result');
let exchangeButton = document.getElementById('button');
let leftLogo = document.querySelector('.money-logo-left');
let rightLogo = document.querySelector('.money-logo-right');

const calculations = () => {
  let forCalculations = 0;
  let percent = 0.5;
  let percentTotal = (inputSumm.value * percent) / 100;
  let tempTotal;
  if (inputMoneyType.value === outputMoneyType.value) {
    result.innerHTML = (inputSumm.value - percentTotal).toFixed(2);
    return result.innerHTML;
  } else if (inputMoneyType.value != 'Yandex') {
    forCalculations = inputSumm.value * exchangeRates[inputMoneyType.value];
    tempTotal =
      ((forCalculations / exchangeRates[outputMoneyType.value]) * 100) / 100;
    percentTotal = (tempTotal * percent) / 100;
    result.innerHTML = (tempTotal - percentTotal).toFixed(2);
    return result.innerHTML;
  } else {
    tempTotal =
      (inputSumm.value * exchangeRates[outputMoneyType.value] * 100) / 100;
    percentTotal = (tempTotal * percent) / 100;
    result.innerHTML = (tempTotal - percentTotal).toFixed(2);
    return result.innerHTML;
  }
};

exchangeButton.addEventListener('click', () => {
  calculations();
});

// end of calculations part

const leftLogoChange = () => {
  let x = inputMoneyType.value;
  switch (x) {
    case 'Yandex':
      leftLogo.src = 'img/values/yandex.svg';
      break;
    case 'Ethereum':
      leftLogo.src = 'img/values/ethereum.svg';
      break;
    case 'Bitcoin':
      leftLogo.src = 'img/values/bitcoin.svg';
      break;
    case 'Sberbank':
      leftLogo.src = 'img/values/sber-logo.svg';
      break;
    case 'Privatebank':
      leftLogo.src = 'img/values/privatebank.svg';
      break;
    case 'Paypal':
      leftLogo.src = 'img/values/paypal.svg';
      break;
    case 'PM':
      leftLogo.src = 'img/values/pm-usd.svg';
      break;
    case 'QIWI':
      leftLogo.src = 'img/values/qiwi.svg';
      break;
    default:
      alert('Косяк в коде');
  }
};

const rightLogoChange = () => {
  let x = outputMoneyType.value;
  switch (x) {
    case 'Yandex':
      rightLogo.src = 'img/values/yandex.svg';
      break;
    case 'Ethereum':
      rightLogo.src = 'img/values/ethereum.svg';
      break;
    case 'Bitcoin':
      rightLogo.src = 'img/values/bitcoin.svg';
      break;
    case 'Sberbank':
      rightLogo.src = 'img/values/sber-logo.svg';
      break;
    case 'Privatebank':
      rightLogo.src = 'img/values/privatebank.svg';
      break;
    case 'Paypal':
      rightLogo.src = 'img/values/paypal.svg';
      break;
    case 'PM':
      rightLogo.src = 'img/values/pm-usd.svg';
      break;
    case 'QIWI':
      rightLogo.src = 'img/values/qiwi.svg';
      break;
    default:
      alert('Косяк в коде');
  }
};

inputMoneyType.addEventListener('change', () => {
  leftLogoChange();
});

outputMoneyType.addEventListener('change', () => {
  rightLogoChange();
});

//logo changing part end
