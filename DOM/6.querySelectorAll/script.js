const productNames = Array.from(
  document.querySelectorAll("[data-rating='4.7'], [data-rating='4.8']")
);
const extractNames = productNames.map((obj)=>obj.innerHTML)
console.log(extractNames);
