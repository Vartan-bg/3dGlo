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
            else if ((target.closest('a')) && target.parentNode.parentNode.parentNode.tagName === 'MENU') {
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
            else if ((!target.classList.contains('active-menu')&&(target.tagName!=="LI")) && menu.classList.contains('active-menu')) {
                handlerMenu();
            }
            
        });

};
    
export default toggleMenu;