const ul = document.querySelector('#categories')

console.log(ul)

const liElitem = [...ul.children];

console.log(`Number of categories: ${liElitem.length}`)

liElitem.forEach((item) => {
    
    const h2Element = item.querySelector('h2')
    console.log(`Category: ${h2Element.textContent}`);

    const ulElement = item.querySelector('ul')
    const liInsideUlTotal = ulElement.children;
    console.log(`Elements: ${liInsideUlTotal.length}`);
})




// const liItem = ul.children
// console.log(liItem)

// const nextUl = liItem.children
// console.log(nextUl)

// elem.parentNode - вибере батьківський elem.
// elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
// elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.
// elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
// elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.
// elem.previousSibling - вибере елемент «зліва» від elem (його попереднього сусіда).
// elem.previousElementSibling - вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
// elem.nextSibling - вибере елемент «праворуч» від elem (його наступного сусіда)
// elem.nextElementSibling - вибере вузол-елемент «праворуч» від elem (його наступного сусіда).


