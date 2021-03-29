const modals = (modalState={}) => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOwerlay = true ){
        const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        windows = document.querySelectorAll('[data-modal]'),
        scroll = calcScroll();
        
        
        trigger.forEach( i => {
            
            if ( modalState.form && modalState.width && modalState.height && !modalState.profile && !modalState.type){
                i.removeAttribute('disabled');
            }
            if ( modalState.form && modalState.width && modalState.height &&  !i.getAttribute('disabled')){
                document.querySelector('.popup_calc_profile_button').setAttribute('disabled', true);
            }
            if (modalState.profile && modalState.type ){
                i.removeAttribute('disabled');
            }
            i.addEventListener('click', (e)=> {
                if (e.target){
                    e.preventDefault();
                }
                windows.forEach( item => {
                    item.style.display = 'none';
                });
                modal.style.display = 'block';
                document.body.classList.add('modal-open');
                document.body.style.marginRight = `${scroll}px`;
                /* document.body.style.overflow = 'hidden' */
            });
            
        });
        close.addEventListener('click', ()=> {
            windows.forEach( item => {
                item.style.display = 'none';
            });
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
            document.body.style.marginRight = `0px`;
            /* document.body.style.overflow = '' */
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOwerlay){
                windows.forEach( item => {
                    item.style.display = 'none';
                });
                modal.style.display = 'none';
                document.body.classList.remove('modal-open');
                document.body.style.marginRight = `0px`;
                /* document.body.style.overflow = '' */
            }
        });
    }
    
    function showModalBytime(selector, time){
        setTimeout(()=>{
            document.querySelector(selector).style.display = 'block';
            document.body.classList.add('modal-open');
        }, time);
    }//

    function calcScroll(){
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        console.log(1,div.offsetWidth, 2, div.clientWidth );
        div.remove();

        return scrollWidth;

    }



    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close' );
    bindModal('.phone_link', '.popup', '.popup .popup_close' );
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    /* showModalBytime('.popup', 60000); */
};
export default modals;