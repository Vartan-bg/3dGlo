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
    
export default togglePopup;