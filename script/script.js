// selecting input
const nameInput = document.querySelector("#name");
// slecting flavor
const flavor = document.querySelector("#flavor");

// selecting all checkbox
const allCheckboxIngredients = document.querySelectorAll(
  ".form-checkbox input[type='checkbox']"
);
// variable for storing value of your smoothie
let yourSmoothie;

//selecting text area (instruction box)
const inputInstruction = document.querySelector("#instructions");

// selecting submit button
const submitBtn = document.querySelector(".submit");

// Selecting clear form btn
const clearForm = document.querySelector(".clear-form");

// selecting the p tag where you will display your text
const yourSmoothieText = document.querySelector(".your-smoothie");
// selecting complete all the form text
const unCompleteForm = document.querySelector(".absolute p");
unCompleteForm.style.opacity = 0;
// making it empty at first
yourSmoothieText.textContent = ``;
// making function to clear form
function emptyForm() {
  nameInput.value = ``;
  flavor.value = "";
  allCheckboxIngredients.forEach((e) => {
    e.checked = false;
  });
  inputInstruction.value = ``;
  unCompleteForm.style.opacity = 0;
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

  description() {
    let userOrder = `${this.name} want ${
      this.flavor
    } smoothie with ${this.ingredients
      .join(", ")
      .replace(/, ([^,]*)$/, " and $1")} inside it. ${
      this.instruction ? `And the instruction is ${this.instruction}` : ""
    }`;
    yourSmoothieText.textContent = userOrder;
    console.log(userOrder);
  }
}

// clicking submit button

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  allCheckboxIngredients.forEach((e) => {
    e.checked === true ? additionalIngredients.push(e.name) : null;
  });
  if (
    nameInput.value === "" ||
    flavor.value === "" ||
    additionalIngredients.length === 0
  ) {
    console.log(flavor.value);
    console.log(nameInput.value);
    console.log(additionalIngredients.length);
    unCompleteForm.style.opacity = 100;
  } else {
    unCompleteForm.style.opacity = 0;
    let nameValue = nameInput.value;
    let flavorValue = flavor.value;

    let instructionValue = inputInstruction.value;

    yourSmoothie = new Smoothie(
      nameValue,
      flavorValue,
      additionalIngredients,
      instructionValue
    );
    yourSmoothie.description();
  }
  emptyForm;
});

// calling clear function
clearForm.addEventListener("click", (e) => {
  e.preventDefault();
  emptyForm();
});
