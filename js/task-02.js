const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const array = document.querySelector('#ingredients')

const ingreds = ingredients.map((ingredient) => {
  const ingred = document.createElement('li');
  ingred.textContent = ingredient;
  ingred.classList.add('ingred');
  return ingred;
});

array.append(...ingreds);

