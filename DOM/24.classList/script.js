const getElement = document.getElementById("textElement");

function addClass(){
    getElement.classList.add("highlight", "bold", "italic");
}
function removeClass(){
    getElement.classList.remove("bold", "italic");
}
function toggleClass() {
    getElement.classList.toggle("italic");
}
function replaceClass() {
    if(getElement.classList.contains("bold")){
        getElement.classList.replace("bold", "red-text");
    }
}
function checkContains() {
    const isTrue = getElement.classList.contains("italic");
    console.log(isTrue);   
}
function listItem() {
    console.log(getElement.classList.item(1))
}
function getValue() {
    console.log(getElement.classList.value);
}