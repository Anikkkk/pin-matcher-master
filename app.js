function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;

    }
    else {

        return getPin();
    }
}

function genaratePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;

}
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {

        const priviousNumber = calcInput.value;
        const newNumber = priviousNumber + number;
        calcInput.value = newNumber;
    }



});

function verifypin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;
    const succesMessage = document.getElementById('notify-success');
    const errorMessage = document.getElementById('notify-failed');

    if (pin == typedNumber) {

        succesMessage.style.display = 'block';
        errorMessage.style.display = 'none';

    }
    else {

        errorMessage.style.display = 'block';
        succesMessage.style.display = 'none';
    }
}

