const displayValue = parseInt(document.querySelector(".textbox").textContent);
console.log(displayValue);

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

//BELOW - FUNCTIONS TO INPUT NUMBERS TO TOP TEXT BOX

//
//zero
const zeroListener = function () {
  const zeroListen = document.getElementById("0");
  zeroListen.addEventListener("click", function () {
    let box = document.querySelector(".textbox");
    if (box.textContent === "0") {
      box.textContent = "";
    }
    box.textContent = `${box.textContent}0`;
  });
};
zeroListener();

//one
const oneListener = function () {
  const oneListen = document.getElementById("1");
  oneListen.addEventListener("click", function () {
    let box = document.querySelector(".textbox");
    if (box.textContent === "0") {
      box.textContent = "";
    }
    box.textContent = `${box.textContent}1`;
  });
};
oneListener();

//two
const twoListener = function () {
  const twoListen = document.getElementById("2");
  twoListen.addEventListener("click", function () {
    let box = document.querySelector(".textbox");
    if (box.textContent === "0") {
      box.textContent = "";
    }
    box.textContent = `${box.textContent}2`;
  });
};
twoListener();

//three
const threeListener = function () {
  const threeListen = document.getElementById("3");
  threeListen.addEventListener("click", function () {
    let box = document.querySelector(".textbox");
    if (box.textContent === "0") {
      box.textContent = "";
    }
    box.textContent = `${box.textContent}3`;
  });
};
threeListener();

//four
const fourListener = function () {
  const fourListen = document.getElementById("4");
  fourListen.addEventListener("click", function () {
    let box = document.querySelector(".textbox");
    if (box.textContent === "0") {
      box.textContent = "";
    }
    box.textContent = `${box.textContent}4`;
  });
};
fourListener();

//five
const fiveListener = function () {
  const fiveListen = document.getElementById("5");
  fiveListen.addEventListener("click", function () {
    let box = document.querySelector(".textbox");
    box.textContent = `${box.textContent}5`;
  });
};
fiveListener();

//six
const sixListener = function () {
  const sixListen = document.getElementById("6");
  sixListen.addEventListener("click", function () {
    let box = document.querySelector(".textbox");
    box.textContent = `${box.textContent}6`;
  });
};
sixListener();

//seven
const sevenListener = function () {
  const sevenListen = document.getElementById("7");
  sevenListen.addEventListener("click", function () {
    let box = document.querySelector(".textbox");
    if (box.textContent === "0") {
      box.textContent = "";
    }
    box.textContent = `${box.textContent}7`;
  });
};
sevenListener();

//eight
const eightListener = function () {
  const eightListen = document.getElementById("8");
  eightListen.addEventListener("click", function () {
    let box = document.querySelector(".textbox");
    if (box.textContent === "0") {
      box.textContent = "";
    }
    box.textContent = `${box.textContent}8`;
  });
};
eightListener();

//nine
const nineListener = function () {
  const nineListen = document.getElementById("9");
  nineListen.addEventListener("click", function () {
    let box = document.querySelector(".textbox");
    if (box.textContent === "0") {
      box.textContent = "";
    }
    box.textContent = `${box.textContent}9`;
  });
};
nineListener();

const clearListener = function () {
    const acListen = document.getElementById("ac");
    acListen.addEventListener("click", function() {
        let box = document.querySelector(".textbox");
        box.textContent = "0";        
    });
}
clearListener();
    
    
  
//end of function listeners to input text into top textbox


