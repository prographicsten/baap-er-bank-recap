// step 1
const depositBtn = document.getElementById('btn_deposit').addEventListener('click', function () {
    // console.log('Deposit clicked');
    // step 2
    const depositInputField = document.getElementById('deposit_field');
    const depositInputFieldElementString = depositInputField.value;
    const depositInputFieldElement = parseFloat(depositInputFieldElementString);
    // console.log(typeof depositInputFieldElement);
    // step 3
    const previousDepositBalance = document.getElementById('deposit_total');
    const previousDepositElementString = previousDepositBalance.innerText;
    const previousDepositElement = parseFloat(previousDepositElementString);
    // console.log(typeof previousDepositElement);
    // step 4
    const currentBalanceTotal = previousDepositElement + depositInputFieldElement;
    previousDepositBalance.innerText = currentBalanceTotal;
    // console.log(previousDepositBalance);

    // clear previous input field
    depositInputField.value = '';

    // step 5
    const previousBalanceTotal = document.getElementById('balance_total');
    const previousBalanceElementString = previousBalanceTotal.innerText;
    const previousCurrentBalance = parseFloat(previousBalanceElementString);
    // console.log(typeof previousCurrentBalance);

    // step 6
    const currentBalanceTotalAmount = previousCurrentBalance + depositInputFieldElement;
    previousBalanceTotal.innerText = currentBalanceTotalAmount;
});