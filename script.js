const display = document.getElementById('display');

// Dodavanje brojeva i operatora na ekran
function appendToDisplay(input) {
    display.value += input;
}

// Brisanje celog ekrana
function clearDisplay() {
    display.value = "";
}

// Brisanje poslednjeg unetog karaktera
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Izračunavanje rezultata
function calculate() {
    try {
        // eval funkcija računa string kao matematički izraz
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Greška";
        setTimeout(() => clearDisplay(), 1500);
    }
}