currencyExchange = [
  {
    currency: "Rupees",
    rate: 0.012,
  },
  {
    currency: "Euro",
    rate: 1.1,
  },
  {
    currency: "Yen",
    rate: 0.007,
  },
  {
    currency: "Pound",
    rate: 1.25,
  },
  {
    currency: "Canadian Dollar",
    rate: 0.75,
  },
  {
    currency: "Australian Dollar",
    rate: 0.65,
  },
  {
    currency: "Swiss Franc",
    rate: 1.08,
  },
  {
    currency: "Yuan",
    rate: 0.14,
  },
  {
    currency: "Ruble",
    rate: 0.011,
  },
  {
    currency: "Brazilian Real",
    rate: 0.2,
  },
];

// Add Currency Exchange rate
//1)check if already exists
//2) add if not exists
function addCurrency(addc, addrate) {
  const isPresent = currencyExchange.every(
    (currency) => currency.currency !== addc
  );
  if (isPresent) {
    currencyExchange.push({ currency: addc, rate: addrate });
  }
}

// Update Currency Rate
//1)check if already exists
//2) update if exits
function updateCurrencyRate(newRate, updateCurr) {
  const isPresent = currencyExchange.find(
    (currency) => currency.currency === updateCurr
  );
  if (isPresent !== undefined) {
    isPresent.rate = newRate;
  }
}

//Conversion from one currency to dollar using the currency rates above
function conversionCurrencyToDollar(fromCurr, amount) {
  const fromCurrObj = currencyExchange.find(
    (currency) => currency.currency === fromCurr
  );
  if (fromCurrObj === undefined) {
    return "Currency Not Found!";
  } else {
    return amount * fromCurrObj.rate;
  }
}

function conversionCurrencyToOther(amount, fromCurr, toCurr) {
  const fromCurrObj = currencyExchange.find(
    (currency) => currency.currency === fromCurr
  );
  const toCurrObj = currencyExchange.find(
    (currency) => currency.currency === toCurr
  );
  if (fromCurrObj === undefined || toCurrObj == undefined) {
    return "Currency Not Found!";
  } else {
    return (fromCurrObj.rate * amount) / toCurrObj.rate;
  }
}
