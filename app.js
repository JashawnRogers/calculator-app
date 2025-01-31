const input = document.querySelector('input');
const inputBtns = document.querySelectorAll('.equation');

const clearInput = () => {
    input.value = '';
}


inputBtns.forEach( btn => {
    btn.addEventListener('click', () => {
        input.value += btn.innerText;
    });
})

const calculateTotal = () => {
    try {
        input.value = eval(input.value);
    } catch(error) {
        input.value = "Error";
    }
    
}
