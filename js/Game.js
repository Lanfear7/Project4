class Game {

    constructor(missed, phrase, activePhrase){
        this.missed = missed;
        this.phrase = phrase;
        this.activePhrase = activePhrase;

        this.missed  = 0;
        this.phrase = [
            {phrase: 'It is what it is'},
            {phrase: 'Jones Good Ass BBQ and Foot Massage'},
            {phrase: 'What are those'},
            {phrase: 'yankee with no brim'},
            {phrase: 'brim with no yankee'},
            {phrase: 'now thats alot of damage'}
        ]
        this.activePhrase = null;


    }

    startGame(){
        let startBtn = document.querySelector('#btn__reset')
        let startBackground = document.querySelector('#overlay')

        startBtn.addEventListener('click', (e) => {
            console.log(e.target)
            startBackground.style.display = 'none'

            //this will call getRandomPhrase\/
            let g = this.getRandomPhrase()
            console.log(g)
            this.addPhraseToDisplay()
            
        })

    }


    getRandomPhrase(){
        //get random number
        let randomNum = Math.floor(Math.random() * 6);
        console.log(randomNum);
        //this will log the value of the phrase object in the phrase array to the console 
        let randomPhrase = this.phrase[randomNum].phrase;
        console.log(randomPhrase);
        this.activePhrase = randomPhrase;
        return randomPhrase;

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
const gameTest = new Game();
console.log(Game);