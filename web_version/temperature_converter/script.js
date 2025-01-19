const celInp = document.getElementById('celsius');
const fahInp = document.getElementById('fahrenheit');

celInp.addEventListener('input', (e) => {
    const celsius = parseFloat(e.target.value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius*9/5) + 32;
        fahInp.value = fahrenheit.toFixed(2);
    }
    else {
        fahInp.value = ''; // Clear celsius input if fahrenheit is empty or invalid
    }
});


fahInp.addEventListener('input', (e) => {
    const fahrenheit = parseFloat(e.target.value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit-32) * 5/9;
        celInp.value = celsius.toFixed(2);
    }
    else {
        celInp.value = ''; 
    }
});