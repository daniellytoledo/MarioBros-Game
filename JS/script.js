const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    if (!mario.classList.contains('jump')) {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500)
    }
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    // check the collision
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ) {

        // pipe
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        // Mario
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        // Mario game over
        mario.src = 'IMG/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        // loop
        clearInterval(loop);
        console.log('Game Over!');
    }
}, 10)

document.addEventListener('keydown', jump);
