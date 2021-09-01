
window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Таймер
    function countTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');
        
        function getTimeRemaining() {

            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            
            function twoNumbers(number) {
                if (number < 10)
                    return (number = '0' + number);
                else return number;
            }
            seconds = twoNumbers(seconds);
            minutes = twoNumbers(minutes);
            hours = twoNumbers(hours);

            return {timeRemaining, hours, minutes, seconds };
        }
        function updateClock(){
            let timer = getTimeRemaining();
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;



            if (timer.timeRemaining > 0) {
                setTimeout(updateClock, 1000);
                
            }
            else {
                const clockDiv = document.querySelector('#timer');

                clockDiv.style.color = '#f00';
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
                clearInterval(idInterval);
            }
        }
        let idInterval = setInterval(updateClock, 1000);
        
    }
    countTimer('01 september 2021');

    // кнопка меню
    const toggleMenu = () => {
        const  menu = document.querySelector('menu'),
            body = document.getElementsByTagName('body')[0];
            
        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };
       
        // навешивание слушателя на весь body (не main, т.к. всплывающее меню находится вне main)
        body.addEventListener('click', (event) => {
            let target = event.target;
            
            //если таргет это кнопка "меню" или кнопка закрытия меню:
            if (target.classList.contains('menu') || (target.classList.contains('close-btn')) || target.closest('.menu')) {
                handlerMenu();
            }
            // если таргет - позиции в меню
            else if ((target.closest('li')) && target.parentNode.parentNode.parentNode.tagName === 'MENU') {
                handlerMenu();
                //плавная прокрутка
                if (target.hash && target.hash !== '') {
                    let hash = target.hash;
                    $('html, body').animate({ scrollTop: $(hash).offset().top }, 800, () => {
                        window.location.hash = hash;
                    });
                }
            }
            //если таргет - кнопка в конце тега main
            else if (target.tagName === 'IMG' && target.closest('main') && target.closest('main')) {
                //плавная прокрутка
                let hash = target.parentNode.hash;
                $('html, body').animate({ scrollTop: $(hash).offset().top }, 800, function () {
                    window.location.hash = hash;
                });
            }
            //если кликнуть на экран при открытом меню - закрытие меню
            else if (!target.classList.contains('active-menu') && menu.classList.contains('active-menu')) {
                handlerMenu();
            }
            
        });

    };
        toggleMenu();

    //popup

    const togglePopup = () => {
            const popup = document.querySelector('.popup'),
                popupBtn = document.querySelectorAll('.popup-btn'),
                popupClose = document.querySelector('.popup-close'),
                popupContent = document.querySelector('.popup-content');
        
            popupBtn.forEach((elem) => {
                elem.addEventListener('click', () => {
                    popup.style.display = 'block';
                    if (document.documentElement.clientWidth > 768) {
                        popupContent.style.left = 0;
                        let count = 0;
                        const popupMove = () => {
                            if (count < 38) {
                                count++;
                                popupContent.style.left = count + '%';
                            }
                        };
                        setInterval(popupMove, 4);
                    }
                });
            });

            popup.addEventListener('click', (event) => {
                let target = event.target;

                if (target.classList.contains('popup-close')) {

                    popup.style.display = 'none';

                } else {

                    target = target.closest('.popup-content');
                    if (!target) {
                        popup.style.display = 'none';
                    }

                }
            });
    };
    togglePopup();

    // табы
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');
        
        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++){
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tabContent[i].classList.add('d-none');
                     tab[i].classList.remove('active');
                }
            }
        };
        
        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');
                if (target.classList.contains('service-header-tab')) {

                    tab.forEach((item, i) => {
                        if (item === target) {
                            toggleTabContent(i);
                        }
                    });
                } 
        });
    };
    tabs();

    //слайдер
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item');
        const slider = document.querySelector('.portfolio-content');
        
        //Добавление точек в зависимости от кол-ва слайдов
        const addDots = (elem) => {
            elem.forEach(() => {
                const dot = document.createElement('li');
                dot.classList.add('dot');
                slider.childNodes[17].appendChild(dot);
            });
            //добавление класса "активный" первой точке
            slider.childNodes[17].childNodes[1].classList.add('dot-active');
        };
        addDots(slide);

        const dot = document.querySelectorAll('.dot');
        let currentSlide = 0,
            interval;

        
        //убираем класс "активный" у слайда и точки
        const prevSlide = (elem, index, strClass) => {

            elem[index].classList.remove(strClass);
            
        };

        //Добавляем класс "активный" слайду и точке
        const nextSlide = (elem, index, strClass) => {

            elem[index].classList.add(strClass);
            
        };

        // автоперемотка слайдов
        const autoPlaySlide = () => {
            
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            
            interval = setInterval(autoPlaySlide, time);
        };

        //Остановка автоперемотки при наведении курсора на стрелку или точку
        const stopSlide = () => {
            clearInterval(interval);
        };

        //навешивание слушателя на слайдер
        slider.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            //Если щелчок приходится не по кнопкам
            if (!target.matches('.portfolio-btn, .dot')) {
                return;
             }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            //события при нажатии на стрелки/точки
            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            //переход от последнему слайду к первому и от первого к последнему при использовании стрелок
            if (currentSlide >= slide.length) currentSlide = 0;
            if (currentSlide < 0) currentSlide = slide.length-1;
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        });

        //остановка слайдера при наведении курсора на стрелку или точку
        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                stopSlide();
            }
        });

        //возобновление слайдера при отводе курсора
        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                startSlide();
            }
        });
        
        //вызов слайдера со сменой слайдов за промежуток 1.5сек
        startSlide(1500);
    };
    slider();

    //калькулятор
    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            totalValue = document.getElementById('total'),
            calcCount = document.querySelector('.calc-count');
        
        const countSum = () => {
            let total = 0;
            let countValue = 1,
                dayValue = 1,
                counter =0;
            const typeValue = +calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;
            
            
            
            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }
            if (calcDay && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay && calcDay.value < 10) {
                dayValue *= 1.5;
            }
            
            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }

            const calcAnimation = () => {
				requestAnimationFrame(calcAnimation);
				if (counter < total) {
					if (typeValue && squareValue ) {
						counter += 100;
						if (counter > total) {
								totalValue.textContent = Math.floor(counter - (counter - total));
						} else {
							totalValue.textContent = counter;
						}
					}
				}
			};
			calcAnimation();
        };
        
        calcBlock.addEventListener('change', (event) => {
            let target = event.target;
            if (target.matches('select') || target.matches('input')) {
                countSum();
            }
        });
    };
    calc(100);

    //отслеживание ввода в инпуты
    const inputsСhange = () => {
        const allInputs = [...document.getElementsByTagName('input')];
        allInputs.forEach((elem) => {
            elem.addEventListener('input', () => { 
            //инпут "Ваше имя" - только кирилица и запятые, первая буква каждого слова - заглавная, удалены все лишние пробелы и точки
                if (elem.getAttribute('name') === 'user_name') {
                        elem.value = elem.value.replace(/([^а-я ]|^ )/gi, '');
                        elem.value = elem.value.replace(/[а-я]+/gi, (match) => match.toLowerCase());
                    elem.value = elem.value.replace(/((?:^|\s))./g, (match) => `${match.toUpperCase()}`);
                    elem.value = elem.value.replace(/ {2,}/g, ' ');
                }
                //инпут "ваше сообщение - только кирилица и запятые"
                if (elem.getAttribute('name') === 'user_message') {
                        elem.value = elem.value.replace(/([^а-я\,\.\!\?-]|^ )/gi, '');
                        elem.value = elem.value.replace(/-{2,}/g, '-');
                        elem.value = elem.value.replace(/\s{2,}/g, ' ');
                }

                //интупы "email" - только латиница и спецсимволы
                if (elem.getAttribute('name') === 'user_email') {
                        elem.value = elem.value.replace(/([^a-z@-_!~*'\.]|-$|^-)/gi, '');
                        elem.value = elem.value.replace(/\s{2,}/, ' ');
                        elem.value = elem.value.replace(/-{2,}/g, '-').trim();
                }
                //инпуты "номер телефона"
                if (elem.getAttribute('name') === 'user_phone') {
                        elem.value = elem.value.replace(/[^\d\+]/gi, '');
                        // elem.value = elem.value.replace(/\s{2,}/, '');
                        // elem.value = elem.value.replace(/-{2,}/g, '-');
                        // elem.value = elem.value.replace(/^(- )$/g, '').trim();
                }
                if (elem.classList.contains('calc-item')) {
                    elem.value = elem.value.replace(/[^0-9]/g, '');
                }
                
            });
        });
    };
    inputsСhange();


    // наша команда (смена фотографий по наведению мыши)
    const ourTeam = () => {
        
        const container = document.querySelectorAll('.row')[8];
        //let photos = container.getElementsByTagName('img');
        container.addEventListener('mouseover', (event) => {
            let target = event.target;
            let oldPhoto = target.src;
            if (target.classList.contains('command__photo')) {
                target.src = target.dataset.img;
            }
            target.addEventListener('mouseout', () => {
                target.src = oldPhoto;
            });
        });
    };
    ourTeam();


    //send-ajax-form
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
                //если таргет - форма из всплывающего окна - текст сообщения белый
                if (target.getAttribute('id') === 'form3') {
                    statusMessage.style.cssText = 'font-size: 2rem; color: white;';
                }
                target.appendChild(statusMessage);
                //анимация загрузки
                statusMessage.innerHTML = loadMessage;

                const formData = new FormData(target);

                let body = {};

                for (let val of formData.entries()) {
                    body[val[0]] = val[1];
                }
                const outputData = () => {
                    statusMessage.textContent = succsessMessage;
                        //обнуление инпутов 1 и 2 формы после отправки
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
                };
                const errorData = (error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                };
                
                postData(body).then(outputData).catch(errorData);
            }
        });
        const postData = (body) => {
            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {
                
                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                resolve(); //outputData
                } else {
                reject(request.status);
                
                }
            });

            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            
            request.send(JSON.stringify(body));  
            });
            
        };

            
    };
    sendForm();

    });