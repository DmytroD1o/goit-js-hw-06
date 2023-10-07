const inputName = document.querySelector('#name-input')
console.log(inputName)

const spanName = document.querySelector('#name-output')
console.log(spanName)


inputName.addEventListener("input", (event) =>  {

    const inputValue = event.currentTarget.value;

    if (inputValue.trim() === '') {
        spanName.textContent = 'Anonymous';
    } else {
        spanName.textContent = event.currentTarget.value;
    }
}

)
