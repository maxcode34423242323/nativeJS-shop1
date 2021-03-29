
import checkNumInput from "./checkNumInput";
import closeModal from "./closeModal";

const forms = (state) => {
    const form = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input');

    checkNumInput('input[name="user_phone"]');
    const message = {
        loading: 'Загрузка',
        success: "Скоро с вами свяжутся",
        failure: "что-то пошло не так",
        error: 'Заполните все поля'
    };
    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url,{
            method: 'POST',
            body: data
        });
        return await res.text();
    };
    const clearInputs = () => {
        inputs.forEach( item => {
            item.value = '';
        });
    };


    form.forEach( item => {
        item.addEventListener('submit', e => {
            e.preventDefault();
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);


            if (item.getAttribute('data-calc') === 'end'){
                for( let key in state ){
                    formData.append(key, state[key]);
                    
                }
            }

            postData('assets/server.php', formData).then( res => {
                console.log(res)
                statusMessage.textContent = message.success;

            }).catch ( () => statusMessage.textContent = message.failure )
            .finally(()=> {
                clearInputs();
                setTimeout(() => {
                    statusMessage.remove();
                }, 3000);
                closeModal('.popup_calc_end', 3000);
            });
        });
    });

};

export default forms;