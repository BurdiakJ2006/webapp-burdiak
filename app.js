const movingButton = document.getElementById('movingButton');

movingButton.addEventListener('click', () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const buttonWidth = movingButton.offsetWidth;
    const buttonHeight = movingButton.offsetHeight;

    const newX = Math.random() * (windowWidth - buttonWidth);
    const newY = Math.random() * (windowHeight - buttonHeight);

    movingButton.style.left = `${newX}px`;
    movingButton.style.top = `${newY}px`;
});