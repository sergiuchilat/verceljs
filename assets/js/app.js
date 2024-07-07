document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.getElementById('counter');
    setInterval(() => {
        counterElement.innerText = parseInt(counterElement.innerText) + 1;
    }, 1000);
})