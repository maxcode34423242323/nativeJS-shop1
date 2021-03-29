const checkNumInput = (selector) => {
    const numInputs = document.querySelectorAll(selector);
    numInputs.forEach( i => {
        i.addEventListener('input', ()=>{
            i.value = i.value.replace(/\D/, '');
        });
    });
};
export default checkNumInput;