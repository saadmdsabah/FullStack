const element1 = document.getElementById("product1").getElementsByTagName("img");

const element2 = document.getElementById("product2").getElementsByTagName("img");
const source = element2[0].getAttribute("src");

element1[0].setAttribute("src", source);