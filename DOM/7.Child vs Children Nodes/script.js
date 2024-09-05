const t = document.querySelector("#parent")
const childNodes = Array.from(t.children);

childNodes.forEach((node)=>{
    console.log(node.nodeType);
})