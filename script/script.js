
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
    countTimer('21 august 2021');

    // кнопка меню
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li'),
            links = menu.querySelectorAll('ul>li>a'),
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
            else if (target.closest('li')) {
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
            else if (target.tagName === 'IMG' && target.closest('a')) {
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

            popupClose.addEventListener('click', () => {
                popup.style.display = 'none';
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

    });