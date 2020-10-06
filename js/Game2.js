class Game{
    constructor(){
        let startButton = document.querySelector("#btn__reset")
        startButton.addEventListener('click', () => {
            console.log('game has started')
            this.startGame()
        })
        this.missed = 0
        this.phrases = 
        ['oOf',
        'thAts aLot of damage',
        'and i oOp',
        'biG paPpa',
        'riCh aNd bLind']
        this.activePhrase = this.getRandomPhrase
    }
    startGame(){
        let start = document.querySelector('#overlay')
        start.style.display = 'none'
        let random = this.getRandomPhrase()
        console.log(random)
        new Phrase(random).addPhraseToDisplay() 
        
    }
    getRandomPhrase(){
        let random = this.phrases
        let x = Math.floor(Math.random() * random.length)
        let ranPhrase = random[x]
        return ranPhrase

    }
    handelInteraction(){

    }
    removeLife(){

    }
    checkForWin(){

    }
    gameOver(){

    }
}
const game = new Game()
console.log(game)