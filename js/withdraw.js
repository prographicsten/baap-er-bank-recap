// step 1
const withdrawField = document.getElementById('btn_withdraw').addEventListener('click', function () {
    // console.log('withdraw button clicked');
    // step 2
    const withdrawAmountField = document.getElementById('withdraw_field');
    const withdrawAmountString = withdrawAmountField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    // console.log(typeof withdrawAmount);

    // step 3
    const previousWithdrawAmountField = document.getElementById('withdraw_total');
    const previousWithdrawAmountString = previousWithdrawAmountField.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);
    // console.log(typeof previousWithdrawAmount);

    // step 4
    const newWithdrawAmount = previousWithdrawAmount + withdrawAmount;
    previousWithdrawAmountField.innerText = newWithdrawAmount;
    // console.log(newWithdrawAmount);

    // clear previous withdrawAmount field
    withdrawAmountField.value = '';

    // step 5
    const previousBalanceTotalField = document.getElementById('balance_total');
    const previousBalanceTotalString = previousBalanceTotalField.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // console.log(typeof previousBalanceTotal);

    // step 6
    const presentBalanceTotalAmountField = previousBalanceTotal - withdrawAmount;
    previousBalanceTotalField.innerText = presentBalanceTotalAmountField;
});