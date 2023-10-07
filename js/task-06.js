const inputName = document.querySelector("#validation-input");
console.log(inputName);

inputName.addEventListener("blur", () => {
  if (inputName.value.length === 6) {
    inputName.classList.add("valid");
    inputName.classList.remove("invalid");
  } else {
    inputName.classList.remove("valid");
    inputName.classList.add("invalid");
  }
});
