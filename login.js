
// search form submit reloading the page
// step - 1 set event handler
document.getElementById('btn-login').addEventListener('click', function(event){
    // step - 2: prevent default behavior (prevent reloading browser)
    event.preventDefault(); // form submit reloading er defaulf behavior prevent kora hoiche

    // step - 3 : get the phone number and the pin number

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);

    // step 4: validate phone and pin
    // this is temporary. You should not do like this.
    if(phoneNumber ==='5' && pinNumber === '1234'){
        console.log('you are logged in');
        // step - 5: allow the user to use the website
        window.location.href = '/home.html'
    }
    else{
        alert('Wrong phone number or Pin');
    }

})