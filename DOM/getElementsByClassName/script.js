const allElementsOfSameClass = document.getElementsByClassName("non-fiction");
const allElementsOfSameClassArr = Array.from(allElementsOfSameClass);

const titles = allElementsOfSameClassArr.map((element) => element.innerHTML)
console.log(titles);
