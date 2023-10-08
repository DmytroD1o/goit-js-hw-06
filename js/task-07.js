
const fontSizeInput = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");


fontSizeInput.addEventListener("change", () => {
 
  const fontSize = fontSizeInput.value + "px";
  console.log(fontSize)
  
  spanText.style.fontSize = fontSize;
});


