const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientsUl = document.querySelector('ul')
console.log(ingredientsUl)


const newIngredients = ingredients.map((ingredient) => {

    const newEl = document.createElement('li');
    newEl.textContent = ingredient;
    newEl.classList.add('item');
    console.log(newEl)

    return newEl
}
    )

    ingredientsUl.append(...newIngredients)
    

// const firstEl = document.createElement('li')
// firstEl.classList.add("item");
// firstEl.textContent = 'Potatoes';


// const secondEl = document.createElement('li')
// secondEl.classList.add("item");
// secondEl.textContent = 'Mushrooms';


// const thirdEl = document.createElement('li')
// thirdEl.classList.add("item");
// thirdEl.textContent = 'Garlic';


// const fourthEl = document.createElement('li')
// fourthEl.classList.add("item");
// fourthEl.textContent = 'Tomatos';

// const fifthtEl = document.createElement('li')
// fifthtEl.classList.add("item");
// fifthtEl.textContent = 'Herbs';


// const sixthEl = document.createElement('li')
// sixthEl.classList.add("item");
// sixthEl.textContent = 'Condiments';


// ingredientsUl.append(firstEl, secondEl, thirdEl, fourthEl, fifthtEl, sixthEl)


// для створення розмітки потрібно використати цикл і масив, який у вас в умові. 
// Також всю розмітку потрібно за одну операцію вставити в ДОМ


// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.