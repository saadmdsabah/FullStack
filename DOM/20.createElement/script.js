function addElement(newTask){
    const newElement = document.createElement("div");
    newElement.setAttribute("class","task")

    const mainDiv = document.getElementById("container");
    const textNode = document.createTextNode(newTask)
    newElement.appendChild(textNode)
    mainDiv.appendChild(newElement);

}
function createTask() {
  const textInputEl = document.getElementById("textInput").value;
  addElement(textInputEl);
}