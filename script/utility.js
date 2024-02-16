function hideElement(e) {
    const element = document.getElementById(e);
    element.classList.add('hidden');
}

function showElement(e) {
    const element = document.getElementById(e);
    element.classList.remove('hidden')
}


function getRandomNumber() {
    const alpabateString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alpabateString.split('');
    // console.log(alphabets)

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber)
    const alphabet = alphabets[index];
    // console.log(alphabet)
    return alphabet;

}

function setBgColor(e) {
    const element = document.getElementById(e);
    element.classList.add('bg-orange-400');
}

function removeBgColor(e) {
    const element = document.getElementById(e);
    element.classList.remove('bg-orange-400');
}












// function getRandomNumber() {
//     const alpabateString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alpabateString.split('');

//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber);


//     const alphabet = alphabets[index];
//     // console.log(index, alphabet);
//     return alphabet;
// }