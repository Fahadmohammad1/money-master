// get inputvalue function
function getInput(inputOf) {
  const inputValue = document.getElementById(inputOf + "-input");
  const amount = parseFloat(inputValue.value);
  return amount;
}
// get innertext function
function getTextInput(textOf) {
  const textInput = document.getElementById(textOf + "-total");
  return textInput;
}

// expencess calculate
document.getElementById("calculate-btn").addEventListener("click", function () {
  const foodCost = getInput("food");
  const rentCost = getInput("rent");
  const clothCost = getInput("cloth");

  // expencess
  const expencessInput = getTextInput("expences");
  const expencesTotal = foodCost + rentCost + clothCost;
  expencessInput.innerText = expencesTotal;

  // balance calculate
  const incomeAmount = getInput("income");

  const calculateBalance = incomeAmount - parseFloat(expencesTotal);

  const balanceInput = getTextInput("balance");
  const balanceText = parseFloat(balanceInput.innerText);

  const availableBalance = balanceText + parseFloat(calculateBalance);
  balanceInput.innerText = availableBalance;
});

// saving calculation
document.getElementById("save-btn").addEventListener("click", function () {
  const saveInput = getInput("save");
  const incomeInput = getInput("income");

  const savingTotal = (incomeInput * saveInput) / 100;

  const savingInput = getTextInput("saving");
  savingInput.innerText = savingTotal;

  // remaining calculation
  const totalBalance = getTextInput("balance");
  const totalBalanceText = parseFloat(totalBalance.innerText);

  const remainingInput = getTextInput("remaining");
  // console.log(remainingInput);
  const remainingTotal = totalBalanceText - parseFloat(savingTotal);
  remainingInput.innerText = remainingTotal;
});
