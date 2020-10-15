class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay(){
        //this will add each letter to the screen
        let ul = document.querySelector('ul')
        for(let i= 0; i < this.phrase.length; i++){
            if(this.phrase[i] === ' '){
                let liSpace = document.createElement('li');
                liSpace.setAttribute('class', 'space');
                liSpace.textContent = this.phrase.charAt(i)
                ul.appendChild(liSpace)
            }else if(this.phrase[i] !== ' '){
                let li = document.createElement('li');
                li.setAttribute('class', 'hide letter');
                li.textContent = this.phrase.charAt(i)
                ul.appendChild(li);
            }
        }
    }


    checkLetter(guess){
        //this will check if the user input in included in the phrase 
        if(this.phrase.includes(guess) == true){
            return true
        }else{
            return false
        }
    }

    showMatchedLetter(guess){
        //if the users input matches a letter show the letter it matches
        let phraseLetter = document.querySelectorAll('li.hide.letter')
        phraseLetter.forEach(letter =>{
            if(guess == letter.textContent.toLowerCase()){
                return letter.setAttribute('class', 'show')
            }else{
                return false
            }
        })
    }
}

