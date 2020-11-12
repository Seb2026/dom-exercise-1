// 1: Get the node with the  main title

const mainTitle = document.querySelector(`#container h1`);
console.log(mainTitle);

// => <h1>Fruits and veggies</h1>
// ----------------------------------------------

// 2: Get the main title text

// ... your code here
console.log(mainTitle.innerHTML);
// => Fruits and veggies
// ----------------------------------------------

// 3: Get all the nodes with the fruit items

// ... your code here
const fruits = document.getElementsByClassName(`fruit-item`);
console.log(fruits);

// => HTMLCollection(4) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
// ----------------------------------------------

// 4: Get all the veggie items - the text

// ... your code here
const veggiesText = document.querySelectorAll(`.veggie-item`);
veggiesText.forEach((elem) => {
    console.log(elem.innerHTML);
});

// Broccoli Celery Potato Spinach
// ----------------------------------------------

// 5: Get the subtitle in the veggies section

// ... your code here
const veggieTitle = document.querySelector(`.list-veggies h2`);
console.log(veggieTitle.innerHTML);
// => Veggies
// ----------------------------------------------

// 6: Add an ID 'fruit-title' to the first subtitle (in the Fruit section)

// ... your code here
const fruitTitle = document.querySelector(`.list-fruits h2`);
fruitTitle.id = `fruit-title`;
// => fruit-title
// ----------------------------------------------

// 7: Add a class 'best-fruit' to the 1st and the 3rd fruit

// ... your code here
const fruitItems = document.querySelectorAll(`.fruit-item`);
fruitItems[0].className += ` best-fruit`;
fruitItems[2].className += ` best-fruit`;

// => <li class="fruit-item best-fruit">Pear</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// 8: Remove class 'veggies' from the unordered list of veggies
const veggieList = document.querySelector(`.veggies`);
veggieList.className -= `veggies`;

// ... your code here

// => <ul>...</ul>
// ----------------------------------------------

// 9: Add a class 'veggie-love' to all the veggies

// ... your code here

const veggieLove = document.querySelectorAll(`.list-veggies ul li`);
veggieLove.forEach((elem) => {
    elem.classList += ` veggie-love`;
});

// => <li class="veggie-item veggie-love">Broccoli</li> ...
// ----------------------------------------------

// 10: Remove class 'veggie-item' from 'spinach'

// ... your code here
const spinach = document.querySelectorAll(`.veggie-item`)
spinach[3].classList.remove(`veggie-item`);
// => ... <li class="veggie-love">Spinach</li>