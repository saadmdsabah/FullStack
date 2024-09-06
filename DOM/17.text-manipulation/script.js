const element = document.getElementById("title");
element.textContent = "This is new Title"
element.style.background = "pink"
element.style.color = 'white'

const paraElement = document.getElementById('paragraph')
paraElement.innerHTML = "<h1> this is replacement of p tag with h1</h1>"

paraElement.innerHTML += "<strong>this is an appended element</strong>"