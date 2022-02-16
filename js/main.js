// expencess calculate
document.getElementById("calculate-btn").addEventListener("click", function () {
  const foodInput = document.getElementById("food-input");
  const foodCost = parseFloat(foodInput.value);
  const rentInput = document.getElementById("rent-input");
  const rentCost = parseFloat(rentInput.value);
  const clothInput = document.getElementById("cloth-input");
  const clothCost = parseFloat(clothInput.value);

  const expencessInput = document.getElementById("expences-total");
  const expencesTotal = foodCost + rentCost + clothCost;
  expencessInput.innerText = expencesTotal;

  const incomeInput = document.getElementById("income-input");
  const totalIncome = parseFloat(incomeInput.value);

  const calcBalance = totalIncome - parseFloat(expencessInput.innerText);
  //

  const balanceInput = document.getElementById("balance-total");
  const balanceText = parseFloat(balanceInput.innerText);

  const availableBalance = parseFloat(balanceText) + parseFloat(calcBalance);
  balanceInput.innerText = availableBalance;
});
