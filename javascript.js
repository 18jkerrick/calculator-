function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(sign, a, b) {
  if (sign === "+") {
    return add(a, b);
  } else if (sign === "-") {
    return subtract(a, b);
  } else if (sign === "*") {
    return multiply(a, b);
  } else if (sign === "/") {
    return divide(a, b);
  }
}

// displays what user pressed to screen
let formula = "";
const btns = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

// loops through and adds event listener to each button
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // clear out formula variable and screen
    if (btn.classList.value === "clear") {
      formula = "";
      screen.textContent = formula;
    } else if (btn.classList.value === "equals") {
      //split formula by spaces
      formula = formula.split(" ");
      // send operator and two operands into operate function
      formula = String(
        operate(formula[1], parseInt(formula[0]), parseInt(formula[2]))
      );
      //display result to screen
      screen.textContent = formula;
    }
    // for the rest of these else ifs, just add button pressed to end
    // of formula string and display to screen
    else if (btn.classList.value === "plus") {
      formula += " + ";
      screen.textContent = formula;
    } else if (btn.classList.value === "minus") {
      formula += " - ";
      screen.textContent = formula;
    } else if (btn.classList.value === "times") {
      formula += " * ";
      screen.textContent = formula;
    } else if (btn.classList.value === "divide") {
      formula += " / ";
      screen.textContent = formula;
    } else {
      formula += btn.classList.value;
      screen.textContent = formula;
    }
  });
});
