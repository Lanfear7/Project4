class Game {

    constructor(){
        let game = document.getElementById('btn__reset');
        game.addEventListener('click', () =>{
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
        const random = this.getRandomPhrase().toLowerCase()
        this.activePhrase = random
        //setting a instance of newPhrase and passing it the random phrase so the Phrase class can add that phrase to the DOM
        new Phrase(random).addPhraseToDisplay()
        
        let keyboard = document.querySelectorAll('.key');
        for (let i = 0; i < keyboard.length; i++){
            keyboard[i].addEventListener('click', (e) =>{
                this.handelInteraction(e.target, random)
            })
        };
        this.checkForWin(random)
        //adding the logic to the game wit the handelInteraction class method 
        

    }


    getRandomPhrase(){
        //get random number
        let randomNum = Math.floor(Math.random() * this.phrase.length);
        //this will log the value of the phrase object in the phrase array to the console 
        let randomPhrase = this.phrase[randomNum].phrase;
        return randomPhrase;

    }


    handelInteraction(guess, phrase){
        let match = new Phrase().checkLetter(phrase, guess)
        if(match == false){
            guess.setAttribute('class', 'wrong')
            this.removeLife()
        }else{
            console.log('show letter')
            guess.setAttribute('class', 'chosen')
            new Phrase().showMatchedLetter(guess)
            this.checkForWin(phrase)
        }
    }


    removeLife() { // Updates heart image to simulate losing a life in the game
        console.log(this.missed)
        this.missed += 1;
        const hearts = document.querySelector('img[src="images/liveHeart.png"]')
        hearts.src = 'images/lostHeart.png';
        console.log(this.missed)
        if (this.missed === 5){
            this.gameOver(false)
        }
    }

     
       
    

    checkForWin(phrase){
        let show = document.querySelectorAll('li.show')
        console.log(show.length)
        console.log(phrase.length)
        let phraseArr = []
        for(let i = 0; i < phrase.length; i++){
            if(phrase[i] !== ' '){
                phraseArr.push(phrase[i])
            }
        }
        console.log(phraseArr.length)
        if(show.length == phraseArr.length){
            this.gameOver(true)
        }else{
            console.log('keep guessing')
        }

    }

    gameOver(win){
        let message = document.querySelector('h1#game-over-message')
        let overlay = document.querySelector('div#overlay')
        if(win == true){
            this.removePhrase()
            message.textContent = 'You Win!!!!'
            overlay.setAttribute('class', 'win')
            overlay.style.display = ''
        }else if (win == false){
            this.removePhrase()
            message.textContent = 'You Lose'
            overlay.setAttribute('class', 'lose')
            overlay.style.display = ''
        }


    }
    removePhrase(){
        let active = this.activePhrase
        let ul = document.querySelector('ul')
        for(let i = 0; i < active.length; i++){
            
        }
        return
    }


}
const gameTest = new Game();
console.log(Game);