function Recipe (title, steps) {
  //const this = Object.create(Recipe.prototype);
  this.title = title;
  this.steps = steps;
  //return this;
}

Recipe.prototype.cook = function () {
  let result = `<h1>${this.title} :</h1>`; 
  if (this.steps !== undefined && this.steps !== null && Array.isArray(this.steps) && this.steps.length > 0) {
    result += '<h4>Ingrédients :</h4><ol>';
    const stepsSize = this.steps.length - 1;
    let i = 0;
    for (; i < stepsSize; i++) {
      let element = this.steps[i];
      if (Array.isArray(element) && element.length === 4) {
        result += '<li>' + `${element[3] === "dry" ? "Add " : (element[3] === "wet" ? "For " : "")} ${element[0]} ${element[1]} of ${element[2]} to the bowl` + '</li>';
      } else if (typeof element === 'object') {
        result += '</ol><h4>Instructions :</h4>' + `<p>${element}</p>`;
      }
    }
    let element = this.steps[i];
    if (Array.isArray(element) && element.length === 2 && (element[0] > 0 || element[1] > 0)) {
      result += `<p>Then, heat ${element[1]} minutes in the oven at ${element[0]} degrees.</p>`;
    }
  }
  result += '<em>Bon appétit !</em>';
  return result;
}

const steps = [
  [1, "cup", "white flour", "dry"],
  [0.5, "tsp", "baking soda", "wet"],
  [0.25, "tsp", "salt", "dry"],
  [0.25, "cup", "sugar", "dry"],
  [0.25, "cup", "brow sugar", "dry"],
  [0.25, "tbsp", "soy milk", "wet"],
  [0.25, "tbsp", "oil", "wet"],
  [0.25, "tsp", "pure vanilla extract", "dry"],
  ["Form into one big ball, then either refrigerate at least 2 hours or freeze until the dough is cold. Once dough is chilled, preheat oven to 325 F. Form dough balls, and place on a greased baking tray, leaving enough room between cookies for them to spread."],
  [325, 10]
];
const cookies = new Recipe('LES MEILLEURS COOKIES VÉGANS AU CHOCOLAT', steps);

console.log(cookies.cook());
document.getElementById("recipe-content").innerHTML = cookies.cook();
