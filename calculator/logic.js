const btn = document.querySelectorAll("button");
const display = document.querySelector(".display");



btn.forEach((btn) => {
    btn.addEventListener('click', calculate);
});


function calculate(event) {

    const btnvalue = event.target.value;

    // console.log(btnvalue);

    if (btnvalue === '=') {
        if (display.textContent !== '') {
            display.textContent = eval(display.textContent);
        }
    } else if (btnvalue === 'crl') {
        display.textContent = '';
    } else {
        display.textContent += btnvalue;
    }
}