// document.getElementById('btn-ply').addEventListener('click', function () {
//     const homeScren = document.getElementById('home-page');
//     homeScren.classList.add('hidden')

//     const playGround=document.getElementById('play-ground-page');
//     playGround.classList.remove('hidden')
// })

function handelKeybordKeyUpEvend(event) {
    const pleyarPressed = event.key;

    if (pleyarPressed === 'Escape') {
        gameOver();
    }

    // console.log(pleyarPressed)

    const currentAlphabateElement = document.getElementById('current-alpabete');
    const currentAlphabate = currentAlphabateElement.innerText;
    exceptedAlphabet = currentAlphabate.toLowerCase();
    // console.log(pleyarPressed, exceptedAlphabet)

    if (pleyarPressed === exceptedAlphabet) {
        console.log('YOU WIN');

        const scoreDisplay = getTextElementById('current-score')
        const updateScor = scoreDisplay + 1;
        setTextElementById('current-score', updateScor);


        removeBgColor(exceptedAlphabet)
        continuegame('');

        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // const score = currentScore + 1;
        // currentScoreElement.innerText = score;

        // console.log(score);
    }
    else {
        console.log('YOU LOOSER');

        const currentLife = getTextElementById('life');
        const updateLife = currentLife - 1;
        setTextElementById('life', updateLife);

        if (updateLife === 0) {
            gameOver();
        }

        // const currentlifeElement = document.getElementById('life');
        // const currentLifeText = currentlifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // const life = currentLife - 1;
        // currentlifeElement.innerText = life;

        // const lifeScore = score - life;
    }
}

document.addEventListener('keyup', handelKeybordKeyUpEvend)

function continuegame() {
    const alphabet = getRandomNumber();
    // console.log('your random alphabet', alphabet)

    const alphabetDisplay = document.getElementById('current-alpabete');
    alphabetDisplay.innerText = alphabet;

    setBgColor(alphabet);
}

function play() {
    hideElement('home-page');
    hideElement('score-page');
    showElement('play-ground-page');

    setTextElementById('life', 5);
    setTextElementById('current-score', 0)

    continuegame('');
}

function gameOver() {
    hideElement('play-ground-page');
    showElement('score-page');

    const lastScore = getTextElementById('current-score');
    console.log(lastScore)

    setTextElementById('gameScore', lastScore);


    const alpha = getElementTextById('current-alpabete')
    removeBgColor(alpha);

}
