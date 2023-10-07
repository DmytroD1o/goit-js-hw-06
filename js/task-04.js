const counter = {
    counterValue: 0,

    increment() {
        console.log('increment => this', this)
            this.counterValue += 1;
    },

    decrement() {
        console.log('decrement => this', this)
        this.counterValue -= 1;
}
}


const counterDiv = document.querySelector('#counter')
console.log(counterDiv) 

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');
console.log(valueEl) 

decrementBtn.addEventListener('click', function () {
    // console.log('Кликнули на декремент!');

    counter.decrement()
    console.log(counter);

    valueEl.textContent = counter.counterValue
})

incrementBtn.addEventListener('click', function () {
    // console.log('Кликнули на инкремент!');

    counter.increment()
    console.log(counter);

    valueEl.textContent = counter.counterValue
})



{/* <div class="editor">
  <p>Donec id justo. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Curabitur suscipit suscipit tellus. Phasellus gravida semper nisi.</p>
  <div class="actions">
    <button type="button" class="btn" data-action="save">Save text</button>
    <button type="button" class="btn" data-action="close">Close editor</button>
  </div>
</div>


const saveBtn = document.querySelector('.editor button[data-action="save"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]'); */}