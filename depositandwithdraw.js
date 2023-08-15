document.getElementById("Deposit-btn").addEventListener("click", function () {
  // console.log(1)
  const depositField = document.getElementById("Deposit-amount");
  const newDepositMoney = depositField.value;

  depositField.value = "";
  if(isNaN(parseFloat(newDepositMoney))){
    alert ('please Provide a valid number');
    return;
  }

  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotal = depositTotalElement.innerText;
  depositTotalElement.innerText =
    parseFloat(previousDepositTotal) + parseFloat(newDepositMoney);

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

  balanceTotalElement.innerText =
    previousBalanceTotal + parseFloat(newDepositMoney);

//   depositField.value = "";
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  // console.log(1)
  const withdrawField = document.getElementById("withdraw-amount");
  const newWithdrawMoney = withdrawField.value;

  withdrawField.value = "";
  if(isNaN(parseFloat(newWithdrawMoney))){
    alert ('please Provide a valid number');
    return;
  }
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotal = withdrawTotalElement.innerText;
  // withdrawTotalElement.innerText = parseInt(previousWithdrawTotal) + parseInt(newWithdrawMoney);

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

  const balance = parseFloat(balanceTotalElement.innerText);

  if (balance < 0 || newWithdrawMoney > balance) {
    alert("Sorry. You can not withdraw.");
  } 
  else {
    withdrawTotalElement.innerText = parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawMoney);
    balanceTotalElement.innerText = previousBalanceTotal - parseFloat(newWithdrawMoney);
  }
  
//   withdrawField.value = "";
});
