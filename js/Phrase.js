class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay(){
        let ul = document.querySelector('ul')
        for(let i= 0; i < this.phrase.length; i++){
            console.log(this.phrase[i])
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
        if(this.phrase.includes(guess) == true){
            return true
        }else{
            return false
        }
    }

    showMatchedLetter(guess){
        //phrase colors 
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

