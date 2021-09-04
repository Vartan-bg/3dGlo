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
                if (typeValue && squareValue && (counter < total)) {
                    if (total < 3000) {
                        counter += 100;
                    } else if (total > 3000) {
                        counter += 1000;
                    }
					if (counter > total) {
						totalValue.textContent = Math.floor(counter - (counter - total));
					} else {
						totalValue.textContent = counter;
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
    
export default calc;