    const sendForm = () => {
        const body = document.getElementsByTagName('body')[0];
        const errorMessage = 'Что-то пошло не так';

        //добавление стиля для анимации загрузки
        document.head.insertAdjacentHTML("beforeend", `<style>.sk-spinner-pulse {width: 100px; height: 100px; margin: auto;background-color: black ;border-radius: 100%;animation: sk-spinner-pulse 1.0s infinite ease-in-out;}

        @keyframes sk-spinner-pulse {0% {transform: scale(0);} 100% {transform: scale(1.0); opacity: 0;}}</style>`);
        
        //создание дива с анимацией загрузки
        const loadMessage = `<div><div class="sk-spinner sk-spinner-pulse"></div></div>`;
            const succsessMessage = 'Спасибо! Мы скоро с вами свяжемся';
        
        const statusMessage = document.createElement('div');
        if (!statusMessage.style.cssText) {
            statusMessage.style.cssText = 'font-size: 2rem;';
        }

        body.addEventListener('submit', (event) => {
            event.preventDefault();
            let target = event.target;
            //если таргет - форма
            if (target.getAttribute('name') === 'user_form') {

                statusMessage.style.cssText = 'font-size: 2rem; color: white;';
                //анимация загрузки
                statusMessage.innerHTML = loadMessage;
                target.appendChild(statusMessage);

                const formData = new FormData(target);
                //создание пустого body, в который потом поместим данные из формы
                let body = {};

                for (let val of formData.entries()) {
                    body[val[0]] = val[1];
                }
                
                //вызов функции отправки body 
                (async () => {
                    //сначала выполняется await, потом обнуляются инпуты
                    await postData(body)
                        //Добавление текста успешной операции (мы с вами свяжемся)
                        .then((response) => {
                            if (response.status !== 200) {
                                throw new Error('status network not 200');
                            }
                            statusMessage.textContent = succsessMessage;
                        })
                        //добавление текста при ошибке
                        .catch((error) => {
                            statusMessage.textContent = errorMessage;
                            console.error(error);
                    });

                    //обнуление инпутов 1 и 2 формы ПОСЛЕ отправки
                    if (target.getAttribute('id') !== 'form3'){
                            [...target.childNodes[1].childNodes[1].children].forEach((elem) => {
                                if (elem.children[0].tagName === 'INPUT') {
                                    elem.children[0].value = '';
                                }
                            });
                            //обнуление инпутов 3 формы (из всплывающего окна)
                        } else {
                            [...target.children].forEach((elem) => {
                                if (elem.children[0] && elem.children[0].tagName === 'INPUT') {
                                    elem.children[0].value = '';
                                }
                            });
                        }
                })();
                
            }
        });
        const postData = (body) => {
            return fetch('http://3dglo/server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
        };       
};
    
export default sendForm;