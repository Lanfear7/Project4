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
            const random= new Phrase(this.getRandomPhrase().phrase);
            random.addPhraseToDisplay(randomPhrase);
            this.handelInteraction()

            
        })

    }


    getRandomPhrase(){
        //get random number
        let randomNum = Math.floor(Math.random() * this.phrase.length);
        //this will log the value of the phrase object in the phrase array to the console 
        let randomPhrase = this.phrase[randomNum].phrase;
        this.activePhrase = randomPhrase;
        return randomPhrase;

    }


    handelInteraction(){
        let keyBoard = document.querySelectorAll('.key');
        for (let i = 0; i < keyBoard.length; i++){
            keyBoard[i].addEventListener('click', (e) => {
                console.log(e.target);
            })
        }


    }


    removeLife(){
        let life = document.querySelectorAll('.tries')
        console.log(life);

    }

    checkForWin(){


    }

    gameOver(){


    }


}
const gameTest = new Game();
console.log(Game);