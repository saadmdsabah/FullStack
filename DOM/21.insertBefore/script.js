const mainElement = document.getElementById("studentList");
const newStudent = document.createElement("div");
newStudent.className = "student";
const textValue = document.createTextNode("Saad 80");
newStudent.appendChild(textValue)
mainElement.insertBefore(newStudent, null)
