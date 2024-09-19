
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = document.getElementById('input-cahso-out').value;
    const pinNumber = document.getElementById('input-cash-out-pin').value;

    if(pinNumber === '1234'){
        console.log('money is reducing')

        const balance = document.getElementById('account-balance').innerText;

        const balanceNumber = parseFloat(balance);
        const cashOutNumber = parseFloat(cashOut);

        // reduce the balance 
        const newBalance = balanceNumber - cashOutNumber;

        // update the UI/

        document.getElementById('account-balance').innerText = newBalance
    }
    else{
        alert('Failed to cash. pleaste tryout again');
    }
})