  
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

        console.log(this.phrase)
        let lower = this.phrase.toLowerCase();
        console.log(lower)
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
            console.log(lower.charAt(i))
        }
        console.log(div);
        
    };
    checkLetter(phrase){
        let keyboard = document.querySelectorAll('button');
        console.log(this.phrase.length)
        for (let i = 0; i < keyboard.length; i++){
            keyboard[i].addEventListener('click', (e) =>{
                //if the letter matches any letter in our phrase it will return true else false 
                 console.log(phrase)
                 console.log(e.target.textContent)
                for(let j = 0; j < phrase.length; j ++){
                    if(e.target.textContent == phrase[j]){
                        console.log(e.target.textContent) 
                        console.log(true)
                        return true
                    }else {
                        console.log(false)
                        return false
                    }
                }
                
            });

        } 
    }


    showMatchedLetter(letter){}
}

//test phrase 
const test = new Phrase();



