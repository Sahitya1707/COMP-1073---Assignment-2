// selecting input
const nameInput = document.querySelector("#name");
// slecting flavor
const flavor = document.querySelector("#flavor");
console.log(flavor.value);

// selecting all checkbox
const allCheckboxIngredients = document.querySelectorAll(
  ".form-checkbox input[type='checkbox']"
);

//selecting text area (instruction box)
const inputInstruction = document.querySelector("#instruction");
// selecting submit button
const submitBtn = document.querySelector(".submit");
// declaring variable to get the actual value
function emptyForm() {
  nameInput.value = ``;
  flavor.value = "";
  allCheckboxIngredients.forEach((e) => {
    e.checked = false;
  });
}

let additionalIngredients = [];

class Smoothie {
  name;
  flavor;
  ingredients;
  instruction;
  constructor(name, flavor, ingredients, instruction) {
    this.name = name;
    this.flavor = flavor;
    this.ingredients = ingredients;
    this.instruction = instruction;
  }

  yourSmoothie() {
    let userOrder = `${this.name} want ${this.flavor} smoothie with ${this.ingredients} inside it.`;
  }
}

// clicking submit button
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("btn clicked");
  let nameValue = nameInput.value;
  let flavorValue = flavor.value;
  allCheckboxIngredients.forEach((e) => {
    e.checked === true ? additionalIngredients.push(e.name) : null;
    console.log(additionalIngredients);
  });
  console.log(flavorValue);
  console.log(nameValue);
});
