  
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    //constructor to be able to use the phrase
    constructor(phrase){
        this.phrase = phrase

    }
    //added methods to this class
    addPhraseToDisplay(){

        //creating the DOM elements 
        let div = document.querySelector('#phrase')
        let ul = document.querySelector('ul')

        console.log(this.phrase)
        let lower = this.phrase.toLowerCase();
        //this will change HEllO to hello/ log each letter 
        for(let i = 0; i < this.phrase.length; i++ ){
            if(this.phrase[i] !== ' '){
                let li = document.createElement('li');
                li.setAttribute('class', 'hide letter');
                li.textContent = this.phrase.charAt(i)
                ul.appendChild(li);
            }else if(this.phrase[i] === ' '){
                let liSpace = document.createElement('li');
                liSpace.setAttribute('class', 'space');
                liSpace.textContent = this.phrase.charAt(i)
                ul.appendChild(liSpace)
            }
            console.log(this.phrase.charAt(i))
        }
        console.log(div);
        
    };
    checkLetter(){
        let keyboard = document.querySelectorAll('button');
        let hiddenPhrase = document.querySelectorAll('li.hide letter')
        //adding event listener to all the buttons 
        console.log(hiddenPhrase);
        for (let i = 0; i < hiddenPhrase.length; i++){
            console.log(hiddenPhrase[i])
        }
        for (let i = 0; i < keyboard.length; i++){
            keyboard[i].addEventListener('change', (e) =>{
                console.log(e.target);
                //if the letter matches any letter in our phrase 
                if(e.target){

                }
            });
        }
        

        
    }
    showMatchedNumber(){}
}
//test phrase 
const test = new Phrase('H El lo');
console.log(test);