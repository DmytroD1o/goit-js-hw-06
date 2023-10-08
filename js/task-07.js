
const fontSizeInput = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");


spanText.style.fontSize = `${fontSizeInput.value}px`;

fontSizeInput.addEventListener("input", (event) => {
 
  spanText.style.fontSize = `${event.currentTarget.value}px`

});


