
const fontSizeInput = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

fontSizeInput.addEventListener("input", () => {
  const fontSize = fontSizeInput.value + "px";
  console.log(fontSize)
  spanText.style.fontSize = fontSize;
});

