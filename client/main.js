const characters = document.querySelectorAll('.charButton');
const evaluate = document.querySelector('#equal');

let inputs = []

const logValue = event => {
  console.log(event.target.innerHTML);
  inputs.push(event.target.innerHTML);
  console.log(inputs)
}

const evaluateInputs = () => {
  console.log(inputs);
  let numbers = []
  let evaluators = []
  for (let i = 0; i < inputs.length; i++) {
    console.log(+inputs[i])
    if (+inputs[i] || inputs[i] === '.') {
      console.log('this is a number');
    } else {
      console.log('this is an operator');
    }
  }
}

evaluate.addEventListener('click', evaluateInputs)

for (let i = 0; i < characters.length; i++) {
  characters[i].addEventListener('click', logValue);
}