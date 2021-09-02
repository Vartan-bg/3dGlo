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
    
export default ourTeam;