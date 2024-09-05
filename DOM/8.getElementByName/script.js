function collectData() {
  const elementSelector = document.getElementsByName("languageProficiency");
  elementSelector.forEach((obj) => {
    if (obj.checked) {
      console.log(obj.value);
    }
  });
}

const email = document.getElementsByName("email")
email.forEach((ema)=>{
    console.log(ema);
})
