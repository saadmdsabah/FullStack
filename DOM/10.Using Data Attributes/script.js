const element = document.getElementById("userCard");
console.log(element);
const elementId = element.getAttribute("data-user-id");
console.log(elementId);
const elementRole = element.getAttribute("data-user-role");
console.log(elementRole);
element.setAttribute('data-new-attribute', 69)
console.log(element);
