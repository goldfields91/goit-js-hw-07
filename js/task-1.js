const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);
allCategories.forEach((category) => {
  const textH2 = category.querySelector("h2");
  console.log(`Category: ${textH2.textContent}`);
  const categoryUL = category.querySelector("ul");
  console.log(`Elements: ${categoryUL.children.length}`);
});
