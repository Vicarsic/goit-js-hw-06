const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const onLinkIngredients = document.querySelector("ul#ingredients");

const elementIngredient = ingredients.map((ingredient) => {
  const itemIngredient = document.createElement("li");
  itemIngredient.textContent = ingredient;
  itemIngredient.classList.add("item");
  return itemIngredient;
});
onLinkIngredients.append(...elementIngredient);
console.log(onLinkIngredients);
