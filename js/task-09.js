function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorSpan = document.querySelector('.color');
console.log(colorSpan)

const changeColorButton = document.querySelector('.change-color');

changeColorButton.addEventListener('click', () => {

  const randomColor = getRandomHexColor();
  console.log(randomColor)

  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
  
});

console.log(changeColorButton)