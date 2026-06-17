const optionImages = document.querySelectorAll('.option-image')
const container = document.querySelector('.container')
const resultText = document.querySelector('.result-text')
const computerResult = document.querySelector('.computer-result img')
const userResult = document.querySelector('.user-result img')

const computerImg = [
    'assets/pedra.png',
    'assets/papel.png',
    'assets/tesoura.png'
]

/*
(R) 0 Rock - Pedra
(P) 1 Paper - Papel
(S) 2 Scissors - Tesoura

Pedra - Ganha de Tesoura, perde para papel
Papel - Ganha de Pedra, perde para tesoura
Tesoura - Ganha de papel, perde de pedra
*/

const winner = {
    RR: 'EMPATE',
    RP: 'Computador ',
    RS: 'Você ',
    PP: 'Empate',
    PR: 'Você ',
    PS: 'Computador ',
    SS: 'Empate',
    SR: 'Computador ',
    SP: 'Você '
}

function handleOptionClick(event) {
    const clickedImage = event.currentTarget
    const clickedIndex = Array.from(optionImages).indexOf(clickedImage)

    container.classList.add('start')
    resultText.textContent = '...'

    userResult.src = computerResult.src = 'assets/pedra.png'

    setTimeout(() => {
        container.classList.remove('start')

        userResult.src = computerImg[clickedIndex]

        const randomNumber = Math.floor(Math.random() * 3)
        computerResult.src = computerImg[randomNumber]

        const userValue = ['R', 'P', 'S'][clickedIndex]
        const computerValue = ['R', 'P', 'S'][randomNumber]
        const userComputerResult = userValue + computerValue
        const finalResult = winner[userComputerResult]


        resultText.textContent = userValue === computerValue ? 'Empate' : finalResult + 'Ganhou'

    }, 2000); // 1000ms = 1SG//

}


optionImages.forEach(img => {
    img.addEventListener('click', handleOptionClick)
})

