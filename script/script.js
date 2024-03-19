// selecting input
const nameInput = document.querySelector("#name");
// slecting flavor
const flavor = document.querySelector("#flavor");

// selecting all checkbox
const allCheckboxIngredients = document.querySelectorAll(
  ".form-checkbox input[type='checkbox']"
);
//selecting text area (instruction box)
const inputInstruction = document.querySelector("#instruction");
// selecting submit button
const submitBtn = document.querySelector(".submit");
// declaring variable to get the actual value
let nameValue = nameInput.value;
console.log(nameValue);

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
