const characters = document.querySelectorAll(".charButton");
const evaluate = document.querySelector("#equal");
const display = document.querySelector("#display");

let inputs = [];

const logValue = (event) => {
  inputs.push(event.target.innerHTML);
  display.innerText = inputs.join(" ");
};

const evaluateInputs = () => {
  let operators = ["+", "-", "x", "/"];
  let currentNumber = [];
  let result = [];

  while (inputs.length > 0) {
    if (!operators.includes(inputs[0])) {
      currentNumber.push(inputs[0]);
      inputs.shift();
    } else {
      result.push(currentNumber.join(""));
      result.push(inputs[0]);
      inputs.shift();
      currentNumber = [];
    }
  }
  result.push(currentNumber.join(""));
  
  //TODO May need to elaborate on order of operations
  while (result.length > 1) {
    if (result.includes("x")) {
      let index = result.indexOf("x");
      let newNumber = +result[index - 1] * +result[index + 1];
      result.splice(index - 1, 3, newNumber);
    } else if (result.includes("/")) {
      let index = result.indexOf("/");
      let newNumber = +result[index - 1] / +result[index + 1];
      result.splice(index - 1, 3, newNumber);
    } else if (result.includes("+")) {
      let index = result.indexOf("+");
      let newNumber = +result[index - 1] + +result[index + 1];
      result.splice(index - 1, 3, newNumber);
    } else if (result.includes("-")) {
      let index = result.indexOf("-");
      let newNumber = +result[index - 1] - +result[index + 1];
      result.splice(index - 1, 3, newNumber);
    }
  }

  display.innerText = result;
  inputs = [];
};

evaluate.addEventListener("click", evaluateInputs);

for (let i = 0; i < characters.length; i++) {
  characters[i].addEventListener("click", logValue);
}
