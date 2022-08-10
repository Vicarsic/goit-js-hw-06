const numOfCategoriesAll = document.querySelectorAll(".item");
console.log("Number of categories:", numOfCategoriesAll.length);

//Animals//
const item = document.querySelector(".item");
const nameOfCategoriesAnimals = item.children[0];
console.log("Category:", nameOfCategoriesAnimals.textContent);

const listOfCategoriesAnimals = item.children[1];
const numOfCategoriesAnimals = listOfCategoriesAnimals.children.length;
console.log("Elements:", numOfCategoriesAnimals);

//Products
const nameOfCategoriesProducts = item.nextElementSibling.children[0];
console.log("Category:", nameOfCategoriesProducts.textContent);

const listOfCategoriesProducts = categories.children[1].children[1];
const numOfCategoriesProducts = listOfCategoriesProducts.children.length;
console.log("Elements:", numOfCategoriesProducts);

//Technologies
const nameOfCategoriesTechnologies = categories.lastElementChild.children[0];
console.log("Category:", nameOfCategoriesTechnologies.textContent);

const listOfCategoriesTechnologies = categories.children[2].children[1];
const numOtCategoriesTechnologies =
  listOfCategoriesTechnologies.children.length;
console.log("Elements:", numOtCategoriesTechnologies);


console.log("//Інший варіант//");


const itemcategoriesAll = document.querySelectorAll(".item");
console.log("Number of categories:", itemcategoriesAll.length);

itemcategoriesAll.forEach((item) => {
  const itemName = item.firstElementChild.textContent;
  const itemNumber = item.lastElementChild.childElementCount;
  console.log(`Category:`, itemName);
  console.log(`Elements:`, itemNumber);
});
