class Game{
    constructor(){
        this.phrases = [
            new Phrase('Gangsters paradise'),
            new Phrase('Big Poppa'),
            new Phrase('All Eyez On Me'),
            new Phrase('Gin and Juice'),
            new Phrase('Shook ones part ii'),
            new Phrase('Survival of the Fittest'),
            new Phrase('Baknaffek'),
            new Phrase('Sex Machine Gun Funk')
        ];
        this.missed = 0;
        this.activePhrase = null;
    }

    startGame(){
        console.log(this.activePhrase)
        document.querySelector('#overlay').style.display = 'none'
        this.resetGame()
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

    }

    getRandomPhrase(){
        //this will get a random phrase from the phrases array 
       return this.phrases[Math.floor(Math.random() * this.phrases.length)]
    }

    handleInteraction(clicked){
        console.log(this.activePhrase)
        let userInput = clicked.textContent
        if(this.activePhrase.checkLetter(userInput) == true){
            this.activePhrase.showMatchedLetter(userInput)
            clicked.setAttribute('class', 'chosen')
            this.checkForWin()
        }else if(this.activePhrase.checkLetter(userInput) == false){
            clicked.setAttribute('class', 'wrong')
            this.removeLife()
        }
    }

    removeLife(){
        this.missed += 1;
        let hearts = document.querySelector('img[src="images/record.png"]')
        hearts.src = 'images/brokenRecord.png';
        console.log(this.missed)
        if (this.missed === 5){

            this.gameOver(false)
        }
    }
     checkForWin(){
         let hide = document.querySelectorAll('li.hide.letter')
         if(hide.length == 0){
             this.gameOver(true)
         }
     }

    gameOver(win){
        let message = document.querySelector('h1#game-over-message')
        let overlay = document.querySelector('div#overlay')
        console.log(overlay)
        console.log(message)
        if(win == true){
            message.textContent = "Kickin it old school!"
            overlay.setAttribute('class', 'win')
            overlay.style.display = ''
        }else if (win == false){
            console.log('you lose')
            message.textContent = "Need to need up on old school rap"
            overlay.setAttribute('class', 'lose')
            overlay.style.display = ''
        }
    }

    resetGame(){
        let chosenWrong = document.querySelectorAll('button.wrong')
            chosenWrong.forEach(button => {
                button.setAttribute('class', 'key')
            })
        let chosen = document.querySelectorAll('button.chosen')
        chosen.forEach(button => {
            button.setAttribute('class', 'key')
        })
        let lostHearts = document.querySelectorAll('img[src="images/brokenRecord.png"]')
        lostHearts.forEach(heart =>{
            heart.src = 'images/record.png';
        })
        document.querySelector('ul').textContent = ''
        this.activePhrase = null
    }

}