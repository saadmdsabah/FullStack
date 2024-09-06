const counterDiv = document.getElementById("counterDiv");
count = parseInt(counterDiv.textContent)

function increaseValue() {
  count++
  counterDiv.textContent = count;
}

function decreaseValue() {
  count--;
  counterDiv.textContent = count;
}

function resetValue(){
  count = 0;
  counterDiv.textContent = count;
}