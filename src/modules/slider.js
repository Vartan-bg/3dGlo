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
    
export default slider;


class sliderCarusel {
    constructor() {
        
    }
}