let displayValue = parseFloat(document.querySelector(".textbox").textContent);
console.log(displayValue);
let firstValue = displayValue;
console.log(firstValue);
let operation = "none";
let operationClicked = false;

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
    if (box.textContent === "0" || box.textContent === "-0" || operationClicked === true ) {
      box.textContent = "";
    }
    box.textContent = `${box.textContent}0`;
    displayValue = box.textContent;
    operationClicked = false;
  });
};
zeroListener();

//one
const oneListener = function () {
  const oneListen = document.getElementById("1");
  oneListen.addEventListener("click", function () {
    let box = document.querySelector(".textbox");
        if (box.textContent === "0" || box.textContent === "-0" || operationClicked === true ) {
      box.textContent = "";
    }
    box.textContent = `${box.textContent}1`;
    displayValue = box.textContent;
    operationClicked = false;
    
  });
  
  
};
oneListener();

//two
const twoListener = function () {
  const twoListen = document.getElementById("2");
  twoListen.addEventListener("click", function () {
    let box = document.querySelector(".textbox");
        if (box.textContent === "0" || box.textContent === "-0" || operationClicked === true ) {
      box.textContent = "";
    }
    box.textContent = `${box.textContent}2`;
    displayValue = box.textContent;
    operationClicked = false;
  });
};
twoListener();

//three
const threeListener = function () {
  const threeListen = document.getElementById("3");
  threeListen.addEventListener("click", function () {
    let box = document.querySelector(".textbox");
        if (box.textContent === "0" || box.textContent === "-0" || operationClicked === true ) {
      box.textContent = "";
    }
    box.textContent = `${box.textContent}3`;
    displayValue = box.textContent;
    operationClicked = false;
  });
};
threeListener();

//four
const fourListener = function () {
  const fourListen = document.getElementById("4");
  fourListen.addEventListener("click", function () {
    let box = document.querySelector(".textbox");
        if (box.textContent === "0" || box.textContent === "-0" || operationClicked === true ) {
      box.textContent = "";
    }
    box.textContent = `${box.textContent}4`;
    displayValue = box.textContent;
    operationClicked = false;
  });
};
fourListener();

//five
const fiveListener = function () {
  const fiveListen = document.getElementById("5");
  fiveListen.addEventListener("click", function () {
    let box = document.querySelector(".textbox");
        if (box.textContent === "0" || box.textContent === "-0" || operationClicked === true ) {
      box.textContent = "";
    }
    box.textContent = `${box.textContent}5`;
    displayValue = box.textContent;
    operationClicked = false;
  });
};
fiveListener();

//six
const sixListener = function () {
  const sixListen = document.getElementById("6");
  sixListen.addEventListener("click", function () {
    let box = document.querySelector(".textbox");
        if (box.textContent === "0" || box.textContent === "-0" || operationClicked === true ) {
      box.textContent = "";
    }
    box.textContent = `${box.textContent}6`;
    displayValue = box.textContent;
    operationClicked = false;
  });
};
sixListener();

//seven
const sevenListener = function () {
  const sevenListen = document.getElementById("7");
  sevenListen.addEventListener("click", function () {
    let box = document.querySelector(".textbox");
        if (box.textContent === "0" || box.textContent === "-0" || operationClicked === true ) {
      box.textContent = "";
    }
    box.textContent = `${box.textContent}7`;
    displayValue = box.textContent;
    operationClicked = false;
  });
};
sevenListener();

//eight
const eightListener = function () {
  const eightListen = document.getElementById("8");
  eightListen.addEventListener("click", function () {
    let box = document.querySelector(".textbox");
        if (box.textContent === "0" || box.textContent === "-0" || operationClicked === true ) {
      box.textContent = "";
    }
    box.textContent = `${box.textContent}8`;
    displayValue = box.textContent;
    operationClicked = false;
  });
};
eightListener();

//nine
const nineListener = function () {
  const nineListen = document.getElementById("9");
  nineListen.addEventListener("click", function () {
    let box = document.querySelector(".textbox");
        if (box.textContent === "0" || box.textContent === "-0" || operationClicked === true ) {
      box.textContent = "";
    }
    box.textContent = `${box.textContent}9`;
    displayValue = box.textContent;
    operationClicked = false;
  });
};
nineListener();

//period aka decimal listener function
const dotListener = function () {
  const dotListen = document.getElementById("dot");
  dotListen.addEventListener("click", function () {
    let box = document.querySelector(".textbox");
        if (box.textContent === "0" || box.textContent === "-0" || operationClicked === true ) {
      box.textContent = "0";
    }
    if(!box.textContent.includes(".")) {
    box.textContent = `${box.textContent}.`;
    }
    displayValue = box.textContent;
    operationClicked = false;
  });
};
dotListener();


const negative = function () {
  const negListen = document.getElementById("plusorminus");
  negListen.addEventListener("click", function () {
    let box = document.querySelector(".textbox");
    if(box.textContent === "0") {
      displayValue = box.textContent;
      operationClicked = false;
    } else {
      let negValue = (parseFloat(box.textContent) * -1);
      box.textContent = `${negValue}`;
      displayValue = box.textContent;
      operationClicked = false;
    }
  
  });
};
negative();



//clear button aka AC
const clearListener = function () {
    const acListen = document.getElementById("ac");
    acListen.addEventListener("click", function() {
        let box = document.querySelector(".textbox");
        box.textContent = "0";        
        displayValue = box.textContent;
        firstValue = "0";
        operation = "none";
        operationClicked = false;
    });
}
clearListener();

//add, subtract, divide, multiply buttons
const addListener = function () {
  const addListen = document.getElementById("plus");
  addListen.addEventListener("click", function() {
    let box = document.querySelector(".textbox");
    firstValue = parseFloat(box.textContent);
    console.log(firstValue);
    operation = "add";
    operationClicked = true;
  });
}
addListener();

const subListener = function () {
  const subListen = document.getElementById("dash");
  subListen.addEventListener("click", function() {
    let box = document.querySelector(".textbox");
    firstValue = parseFloat(box.textContent);
    console.log(firstValue);
    operation = "sub";
    operationClicked = true;
  });
}
subListener();

const divideListener = function () {
  const divideListen = document.getElementById("slash");
  divideListen.addEventListener("click", function() {
    let box = document.querySelector(".textbox");
    firstValue = parseFloat(box.textContent);
    console.log(firstValue);
    operation = "divide";
    operationClicked = true;
  });
}
divideListener();

const multiplyListener = function () {
  const multiplyListen = document.getElementById("star");
  multiplyListen.addEventListener("click", function() {
    let box = document.querySelector(".textbox");
    firstValue = parseFloat(box.textContent);
    console.log(firstValue);
    operation = "multiply";
    operationClicked = true;
  });
}
multiplyListener();

const pctListener = function () {
  const pctListen = document.getElementById("percent");
  pctListen.addEventListener("click", function() {
    let box = document.querySelector(".textbox");
    firstValue = parseFloat(box.textContent);
    box.textContent = (firstValue / 100);
    operation = "percent";
    operationClicked = true;
  });
}
pctListener();




const equalsListener = function () {
  const equalsListen = document.getElementById("equals");
  equalsListen.addEventListener("click", function() {
    let box = document.querySelector(".textbox");
    let recentValue = parseFloat(box.textContent);
    if(operation === "add"){
      box.textContent = add(firstValue, recentValue);
    }
    if(operation === "sub"){
      box.textContent = subtract(firstValue, recentValue);
    }
    if(operation === "divide"){
      box.textContent = divide(firstValue, recentValue);
    }
    if(operation === "multiply"){
      box.textContent = multiply(firstValue, recentValue);
    }

   

    operationClicked = true;
    firstValue = "";
  })
}



equalsListener();
operation = "none";
operationClicked = false;
displayValue = parseFloat(document.querySelector(".textbox").textContent);
firstValue = displayValue;

    
  
//end of function listeners to input text into top textbox


