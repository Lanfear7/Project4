class Game{
    constructor(){
        this.phrases = [
            new Phrase('Gangsters paradise'),
            new Phrase('Big Poppa'),
            new Phrase('All Eyez On Me'),
            new Phrase('Gin and Juice'),
            new Phrase('Shook ones pt ii'),
            new Phrase('Survival of the Fittest'),
            new Phrase('Baknaffek'),
            new Phrase('Sex Machine Gun Funk')
        ];
        this.missed = 0;
        this.activePhrase = null;
    }

    startGame(){
        document.querySelector('#overlay').style.display = 'none'
        this.resetGame()
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        this.handelGameLogic()

    }

    getRandomPhrase(){
        //this will get a random phrase from the phrases array 
       return this.phrases[Math.floor(Math.random() * this.phrases.length)]
    }

    handelGameLogic(){
        let keys = document.querySelectorAll('button.key');
        keys.forEach(key =>{
            key.addEventListener('click', (e) =>{
                this.activePhrase.checkLetter(e.target.textContent)
                if(this.activePhrase.checkLetter(e.target.textContent) == true){
                    this.activePhrase.showMatchedLetter(e.target.textContent)
                    e.target.setAttribute('class', 'chosen')
                    this.checkForWin()
                }else{
                    e.target.setAttribute('class', 'wrong')
                    this.removeLife()
                }
            })
        })
    }

    removeLife(){
        this.missed += 1;
        let hearts = document.querySelector('img[src="images/liveHeart.png"]')
        hearts.src = 'images/lostHeart.png';
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
        let lostHearts = document.querySelectorAll('img[src="images/lostHeart.png"]')
        lostHearts.forEach(heart =>{
            heart.src = 'images/liveHeart.png';
        })
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
            
    }

}