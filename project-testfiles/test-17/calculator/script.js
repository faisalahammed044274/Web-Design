var plusBtn = document.getElementById("plus");
plusBtn.onclick = function () {
  document.getElementById("operator").value = "+";
};

var minusBtn = document.getElementById("minus");
minusBtn.onclick = function () {
  document.getElementById("operator").value = "-";
};

var multipleBtn = document.getElementById("multiply");
multipleBtn.onclick = function () {
  document.getElementById("operator").value = "*";
};

var dividerBtn = document.getElementById("division");
dividerBtn.onclick = function () {
  document.getElementById("operator").value = "/";
};

var reminderBtn = document.getElementById("reminder");
reminderBtn.onclick = function () {
  document.getElementById("operator").value = "-";
};

var equalBtn = document.getElementById("equalBtn");
equalBtn.onclick = function () {
  var operator = document.getElementById("operator").value;
  var res = myCalculator(operator);
  document.getElementById("result").value = res;
};

var clearBtn = document.getElementById("clearBtn");
clearBtn.onclick = function () {
  document.getElementById("firstNumber").value ="";
  document.getElementById("secondNumber").value ="";
  document.getElementById("operator").value ="";
  document.getElementById("result").value ="";
}



function myCalculator(operator) {
  var firstNumber = Number(document.getElementById("firstNumber").value);
  var secondNumber = Number(document.getElementById("secondNumber").value);

  switch (operator) {
    case "+":
      var result = firstNumber + secondNumber;
      break;
    case "-":
      var result = firstNumber - secondNumber;
      break;
    case "*":
      var result = firstNumber * secondNumber;
      break;
    case "/":
      var result = firstNumber / secondNumber;
      break;
    case "%":
      var result = firstNumber % secondNumber;
      break;
  }
  return result;
};

//==============================================================================

// var plusBtn = document.getElementById("plus");
// plusBtn.onclick = function () {
//   document.getElementById("result").value = myCalculator("+");
// };
// var minusBtn = document.getElementById("minus");
// minusBtn.onclick = function () {
//   document.getElementById("result").value = myCalculator("-");
// };
// var multiplyBtn = document.getElementById("multiply");
// multiplyBtn.onclick = function () {
//   document.getElementById("result").value = myCalculator("*");
// };
// var dividerBtn = document.getElementById("division");
// dividerBtn.onclick = function () {
//   document.getElementById("result").value = myCalculator("/");
// };
// var reminderBtn = document.getElementById("reminder");
// reminderBtn.onclick = function () {
//   document.getElementById("result").value = myCalculator("%");
// };

//==============================================================================

// var plusBtn = document.getElementById("plus");
// plusBtn.onclick = function () {
//     var firstNumber = Number(document.getElementById("firstNumber").value);
//     var secondNumber = Number(document.getElementById("secondNumber").value);
//     var sum = firstNumber + secondNumber;
//     document.getElementById("result").value = sum;
// };

// var minusBtn = document.getElementById("minus");
// minusBtn.onclick = function () {
//         var firstNumber = Number(document.getElementById("firstNumber").value);
//         var secondNumber = Number(document.getElementById("secondNumber").value);
//     var minus = firstNumber - secondNumber;
//     document.getElementById("result").value = minus;
// };

// var multiplyBtn = document.getElementById("multiply");
// multiplyBtn.onclick = function () {
//     var firstNumber = Number(document.getElementById("firstNumber").value);
//     var secondNumber = Number(document.getElementById("secondNumber").value);
//     var mulple = firstNumber * secondNumber;
//     document.getElementById("result").value = mulple;
// };

// var divisionBtn = document.getElementById("division");
// divisionBtn.onclick = function () {
//         var firstNumber = Number(document.getElementById("firstNumber").value);
//         var secondNumber = Number(document.getElementById("secondNumber").value);
//     var division = firstNumber / secondNumber;
//     document.getElementById("result").value = division;
// };

// var reminderBtn = document.getElementById("reminder");
// reminderBtn.onclick = function () {
//         var firstNumber = Number(document.getElementById("firstNumber").value);
//         var secondNumber = Number(document.getElementById("secondNumber").value);
//     var reminder = firstNumber % secondNumber;
//     document.getElementById("result").value = reminder;
// };
