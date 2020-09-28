  
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
        //this will change HEllO to hello/ log each letter 
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
    checkLetter(){
        let keyboard = document.querySelectorAll('button');
        console.log(this.phrase)
        let hiddenPhrase = this.phrase.toLowerCase()
        //adding event listener to all the buttons 
        console.log('Check letter UwU');
         let letters = []
        for (let i = 0; i < hiddenPhrase.length; i++){
            letters.push(hiddenPhrase[i])
        }

        for (let i = 0; i < keyboard.length; i++){
            keyboard[i].addEventListener('click', (e) =>{
                //if the letter matches any letter in our phrase 
                letters.forEach(letter => {
                    console.log(letter)
                    if(e.target.textContent == letter){ 
                        console.log('match')
                        console.log(letter)
                        letter.setAttribute('class', 'show');
                        console.log(letter)
                    }
                })

            });

        } 
    }


    showMatchedNumber(){}
}
//test phrase 
const test = new Phrase();
console.log(test);