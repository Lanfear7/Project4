class Game{
    constructor(){
        //this will hold all the new phrases that call a "new Phrase" when you pick on 
        this.phrases = [
            new Phrase('hello darling'),
            new Phrase('help me make it through the night'),
            new Phrase('reck of old ninty seven'),
            new Phrase('iv been everywhere '),
            new Phrase('take this job and shove it ')

        ];
        this.missed = 0;
        this.activePhrase = null;
    }

    startGame(){
        //this will start the game by calling all the methods
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
        clicked.disabled = true
        let userInput = clicked.textContent
        if(this.activePhrase.checkLetter(userInput) == true){
            this.activePhrase.showMatchedLetter(userInput)
            clicked.setAttribute('class', 'chosen')
            if(this.checkForWin() == true){
                this.gameOver(true)
            }
        }else if(this.activePhrase.checkLetter(userInput) == false){
            clicked.setAttribute('class', 'wrong')
            this.removeLife()
            if(this.gameOver == false){
                this.gameOver(false)
            }
        }
    }

    removeLife(){
        //this will remove a life and replace it with a broken record
        this.missed += 1;
        let hearts = document.querySelector('img[src="images/record.png"]')
        hearts.src = 'images/brokenRecord.png';
        console.log(this.missed)
        if (this.missed === 5){

            this.gameOver(false)
        }
    }
     checkForWin(){
         //this will simply check if the hidden phrase has any more 'hidden' letters
         let hide = document.querySelectorAll('li.hide.letter')
         if(hide.length == 0){
             return true
         }else{
             return false
         }
     }

    gameOver(win){
        //this will display either a win or a lose screen
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
            message.textContent = "Need to read up on old school rap"
            overlay.setAttribute('class', 'lose')
            overlay.style.display = ''
        }
    }

    resetGame(){
        //this will reset the game board for the next round 
        let chosenWrong = document.querySelectorAll('button.wrong')
            chosenWrong.forEach(button => {
                button.setAttribute('class', 'key')
                button.disabled = false
            })
        let chosen = document.querySelectorAll('button.chosen')
        chosen.forEach(button => {
            button.setAttribute('class', 'key')
            button.disabled = false
        })
        let lostHearts = document.querySelectorAll('img[src="images/brokenRecord.png"]')
        lostHearts.forEach(heart =>{
            heart.src = 'images/record.png';
        })
        document.querySelector('ul').textContent = ''
        this.activePhrase = null
    }

}