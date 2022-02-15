// Pin Generating Function 
function pinGenerate() {
    let pin = Math.round(Math.random() * 10000);
    if (pin - 999 > 1) {
        return pin;
    } else {
        return pinGenerate();
    }
}
document.getElementById('btn-generate').addEventListener('click', function() {
    let pinDisplay = document.getElementById('pin-display');
    pinDisplay.value = pinGenerate();

})
document.getElementById('keys').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const pinVerify = document.getElementById('pin-verify');
    if (isNaN(number)) {
        if (number == 'C') {
            pinVerify.value = '';
        }
    } else {
        const prevValue = pinVerify.value;
        const currentValue = prevValue + number;
        pinVerify.value = currentValue;
    }

})

function verifyPin() {
    const verified = document.getElementById('verified');

    const notVerified = document.getElementById('not-verified');
    if (document.getElementById('pin-display').value == document.getElementById('pin-verify').value) {
        verified.style.display = 'block';
        notVerified.style.display = 'none';
    } else {
        notVerified.style.display = 'block';
        verified.style.display = 'none';
    }
}