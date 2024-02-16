// document.getElementById('btn-ply').addEventListener('click', function () {
//     const homeScren = document.getElementById('home-page');
//     homeScren.classList.add('hidden')

//     const playGround=document.getElementById('play-ground-page');
//     playGround.classList.remove('hidden')
// })

function handelKeybordKeyUpEvend(event) {
    const pleyarPressed = event.key;
    // console.log(pleyarPressed)

    const currentAlphabateElement = document.getElementById('current-alpabete');
    const currentAlphabate = currentAlphabateElement.innerText;
    exceptedAlphabet = currentAlphabate.toLowerCase();
    // console.log(pleyarPressed, exceptedAlphabet)

    if (pleyarPressed === exceptedAlphabet) {
        console.log('YOU WIN');
        removeBgColor(exceptedAlphabet)
        continuegame('');
    } 
    else {
        console.log('YOU LOOSER');
    }
}

document.addEventListener('keyup', handelKeybordKeyUpEvend)

function continuegame() {
    const alphabet = getRandomNumber();
    console.log('your random alphabet', alphabet)

    const alphabetDisplay = document.getElementById('current-alpabete');
    alphabetDisplay.innerText = alphabet;

    setBgColor(alphabet);
}

function play() {
    hideElement('home-page');
    showElement('play-ground-page');
    continuegame('');
}


