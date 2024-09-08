const url = "https://v6.exchangerate-api.com/v6/3939b40eeff1f58d34bbd92f/latest/USD";

// const fetchData = ()=>{
//     axios.get(url).then((response)=>{
//         console.log(response.data);
//     }).catch((error)=>{
//         console.log(error);
//     })
// }
// fetchData()

const fetchData = async () => {
  try {
    let result = await axios.get(url);
    const currencyObject = result.data.conversion_rates;
    const currencyArray = Object.keys(currencyObject).map((key) => ({
      [key]: currencyObject[key],
    }));
    console.log(currencyArray[1]);
  } catch (error) {
    console.log(error.message);
  }
};
fetchData();
