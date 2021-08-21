
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
    countTimer('23 august 2021');

    // кнопка меню
    const toggleMenu = () => {
        let _this = this;
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');
        const links = menu.querySelectorAll('ul>li>a');
            
        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };


        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);
        menuItems.forEach((elem) => {
            elem.addEventListener('click', handlerMenu);
        });

        //Плавная прокрутка по кнопкам в меню
        for(let i = 0; i < links.length; i++){
            if (links[i].hash && links[i].hash !== '') {
                links[i].addEventListener('click', () => {
                    let hash = links[i].hash;
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function () {
                        window.location.hash = hash;
                    });
                });
            }
        }
        //Плавная прокрутка по кнопке в начале страницы
        const lastScroll = document.getElementsByTagName('a')[0];
        lastScroll.addEventListener('click', () => {
                    let hash = lastScroll.hash;
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function () {
                        window.location.hash = hash;
                    });
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
        };
        togglePopup();


    });