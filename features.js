// show the cashout form

document.getElementById('btn-show-cahs-out').addEventListener('click', function(){

    document.getElementById('cash-out-form').classList.remove('hidden');

    // hide the add money form
    document.getElementById('add-money-form').classList.add('hidden');
})

//show add money form and hide the cash out form

document.getElementById('btn-show-add-money').addEventListener('click', function(){

    document.getElementById('add-money-form').classList.remove('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')


})

const nameOf = document.getElementById('name').value

let container = document.getElementById('container')
container.innerHTML = "<p>Hello</p>";
container.innerHTML += "<p>World</p>";


console.log(container);

