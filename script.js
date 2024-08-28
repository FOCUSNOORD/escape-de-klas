let countdown;
let timeLeft = 20 * 60; // 20 minutes in seconds
const countdownElement = document.getElementById('countdown');
const messageElement = document.getElementById('message');
const correctCode = '69564';

function startTimer() {
    countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            messageElement.textContent = "Tijd is op! Je bent niet ontsnapt.";
        } else {
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;
            countdownElement.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
            timeLeft--;
        }
    }, 1000);
}

function checkCode() {
    const userInput = document.getElementById('codeInput').value;
    
    if (userInput === correctCode) {
        clearInterval(countdown);
        document.body.style.backgroundImage = "url('open-door.jpg')";
        messageElement.textContent = "Je kon de code kraken, welkom op FOCUS NOORD";
        messageElement.style.color = 'white';
        messageElement.style.fontSize = '48px';
    } else {
        messageElement.textContent = "ERROR, probeer opnieuw...";
        messageElement.style.color = 'red';
        messageElement.style.fontSize = '48px';
        setTimeout(() => {
            messageElement.textContent = ""; // Clear the error message after 2 seconds
        }, 2000);
    }
}

startTimer();
