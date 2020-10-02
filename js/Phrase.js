  
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    //constructor to be able to use the phrase
    constructor(phrase){
        //this will save the phrase phrase of the Phrase object 
        this.phrase = phrase

    }
    //added methods to this class
    addPhraseToDisplay(){

        //creating the DOM elements 
        let div = document.querySelector('#phrase')
        let ul = document.querySelector('ul')

        //console.log(this.phrase)
        let lower = this.phrase.toLowerCase();
        //console.log(lower)
        //this will add the phrase to the display 
        for(let i = 0; i < lower.length; i++ ){
            if(lower[i] !== ' '){
                let li = document.createElement('li');
                li.setAttribute('class', 'hide letter');
                li.textContent = lower.charAt(i)
                ul.appendChild(li);
            }else if(lower[i] === ' '){
                let liSpace = document.createElement('li');
                liSpace.setAttribute('class', 'space');
                liSpace.textContent = lower.charAt(i)
                ul.appendChild(liSpace)
            }
            //console.log(lower.charAt(i))
        }
        //console.log(div);
        
    };
    checkLetter(phrase, letter){
        console.log(phrase)
        console.log(letter.textContent)
        let userGuess = letter.textContent
        let phraseArr = []
        for(let i = 0; i < phrase.length; i++){
            if(phrase[i] !== ' '){
                phraseArr.push(phrase[i])
            }
        }
        for(let j = 0; j < phraseArr.length; j++){
            if(userGuess == phraseArr[j]){
                console.log('true')
                //return true
            }else{
                console.log('false')
                //return false 
            }
        }
    }


    showMatchedLetter(guess){
        let phraseLetter = document.querySelectorAll('li.hide.letter')
        phraseLetter.forEach(letter =>{
            //console.log(letter.textContent)
            if(guess.textContent == letter.textContent.toLowerCase()){
                letter.setAttribute('class', 'show')
            }else{
                return false
            }
        })
    }
        
    //test method to prove im not crazy and return works how it should 
    test(a){
        if(a > 4 ){
            return true
        }else {
            return false
        }
    }
}

//test phrase 
const test = new Phrase();



