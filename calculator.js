const add = (sum, num) => {
  return (sum += num);
};

const subtract = (diff, num) => {
  return (diff -= num);
};

const multiply = (product, num) => {
  return product * num;
};

const divide = (quotient, num) => {
  if (num === 0) {
    return "Error! Cannot divide by zero.";
  }

  return quotient / num;
};

const operate = function (opp, num1, num2) {
  if (opp === "add") {
    return add(num1, num2);
  } else if (opp === "subtract") {
    return subtract(num1, num2);
  } else if (opp === "multiply") {
    return multiply(num1, num2);
  } else if (opp === "divide") {
    return divide(num1, num2);
  }
};
