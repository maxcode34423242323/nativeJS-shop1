const closeModal = (classes, time = 3000) => {
    setTimeout(() => {
        document.querySelector(classes).style.display = 'none';
    }, time);
};
export default closeModal;