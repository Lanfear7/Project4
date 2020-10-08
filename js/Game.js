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
        
        //reset phrase
        let active = this.activePhrase
        if (active != null){
            let ul = document.querySelector('ul')
            let children = ul.childNodes
            console.log(children.length)
            for (let i = 0; i < children.length; i++){
                children[i].innerHTML = ''
                ul.remove(children)
                
            }
            let newul = document.createElement('ul')
            let div = document.querySelector('#phrase')
            div.appendChild(newul)
            //reset buttons .chosen 
            let chosen = document.querySelectorAll('button.chosen')
            chosen.forEach(button => {
                button.setAttribute('class', 'key')
            })
            //reset button .wrong
            let chosenWrong = document.querySelectorAll('button.wrong')
            chosenWrong.forEach(button => {
                button.setAttribute('class', 'key')
            })

            //reset life 
            if(this.missed > 0 ){
                let lostHearts = document.querySelectorAll('img[src="images/lostHeart.png"]')
                lostHearts.forEach(heart =>{
                    heart.src = 'images/liveHeart.png';
                })
            } 
            this.activePhrase = null
        }
        this.missed = 0
        //this will call getRandomPhrase\/
        console.log(this.missed)
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
        let hearts = document.querySelector('img[src="images/liveHeart.png"]')
        hearts.src = 'images/lostHeart.png';
        if (this.missed === 5){
            this.gameOver(false)
        }
    }

     
       
    

    checkForWin(phrase){
        let show = document.querySelectorAll('li.show')
        //console.log(show.length)
        //console.log(phrase.length)
        let phraseArr = []
        for(let i = 0; i < phrase.length; i++){
            if(phrase[i] !== ' '){
                phraseArr.push(phrase[i])
            }
        }
        //console.log(phraseArr.length)
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
            message.textContent = 'You Win!!!!'
            overlay.setAttribute('class', 'win')
            overlay.style.display = ''
        }else if (win == false){
            message.textContent = 'You Lose'
            overlay.setAttribute('class', 'lose')
            overlay.style.display = ''
        }


    }

}
const gameTest = new Game();
//console.log(Game);