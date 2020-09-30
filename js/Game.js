class Game {

    constructor(){
        let game = document.getElementById('btn__reset');
        game.addEventListener('click', (e) =>{
            console.log('game has started')
            let startBackground = document.querySelector('#overlay')
            startBackground.style.display = 'none'
            this.startGame()
        });
        this.missed  = 0;
        this.phrase = [
            {phrase: 'It is what it is'},
            {phrase: 'Jones BBQ and Foot Massage'},
            {phrase: 'What are those'},
            {phrase: 'yankee with no brim'},
            {phrase: 'brim with no yankee'},
            {phrase: 'now thats alot of damage'},
            {phrase: 'Thats free real estate'}
        ]
        this.activePhrase = null;


    }
   
    startGame(){
        //this will call getRandomPhrase\/
        const random = this.getRandomPhrase()
        this.activePhrase = random
        //setting a instance of newPhrase and passing it the random phrase so the Phrase class can add that phrase to the DOM
        new Phrase(random).addPhraseToDisplay()
        new Phrase(random).checkLetter(random)
        let keyboard = document.querySelectorAll('.key');
        for (let i = 0; i < keyboard.length; i++){
            keyboard[i].addEventListener('click', (e) =>{
                console.log('show matched letters')
                new Phrase(random).showMatchedLetter(e.target)
                console.log('matched letter has run')
            })
        };

        //adding the logic to the game wit the handelInteraction class method 
        this.handelInteraction()

    }


    getRandomPhrase(){
        //get random number
        let randomNum = Math.floor(Math.random() * this.phrase.length);
        //this will log the value of the phrase object in the phrase array to the console 
        let randomPhrase = this.phrase[randomNum].phrase;
        return randomPhrase;

    }


    handelInteraction(){
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