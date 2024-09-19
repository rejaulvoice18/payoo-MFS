
// add money to the account
/**
 * S-1: add an event handler
 * 
 * 
 * S-2: get money to be added to the account balance
 * 
 * S-3: very the pin number
 */



// step - 1: add an event handler to the add money button insided the form

document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page relode after form submit
    event.preventDefault();
    console.log('Money add btn clicked')

    // step-2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;


    // get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;

    // Step -3: verify pin number
    if(pinNumberInput === '1234'){
        console.log('adding money to your account');

        // Step - 4; get the current balance
        const balance = document.getElementById('account-balance').innerText;

        // step-5: add addMoneyInput with Balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;
        console.log(newBalance);

        // step - 6: update the balace in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money! Please try again');
    }

})