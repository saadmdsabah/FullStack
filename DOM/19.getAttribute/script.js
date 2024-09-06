const element = document.getElementById("imageGallery");
const allElements = Array.from(element.children);
const authorsAlice = [];
allElements.forEach(el => {
    const imgAttri = el.getAttribute('data-author');
    if(imgAttri === "Bob"){
        authorsAlice.push(el);
    }
});
allElements.forEach(el=>{
    if(!authorsAlice.includes(el)){
        console.log(el);
        el.style.display = "none";
    }
})