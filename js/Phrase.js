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
         let div = document.createElement('div');
         div.setAttribute('id', 'phrase')
         div.setAttribute('class', 'section')
         let ul = document.createElement('ul');
         div.appendChild(ul);


         //this will change HEllO to hello/ log each letter 
         console.log(this.phrase.toLowerCase())
         for(let i = 0; i < this.phrase.length; i++ ){
             if(this.phrase.charAt(i) !== ' '){
                 let li = document.createElement('li');
                 li.setAttribute('class', 'hide letter');
                 li.textContent = this.phrase.charAt(i)
                 ul.appendChild(li);
             }else if(this.phrase.charAt(i) === ' '){
                let liSpace = document.createElement('li');
                liSpace.setAttribute('class', 'space');
                liSpace.textContent = this.phrase.charAt(i)
                 ul.appendChild(liSpace)
             }
             console.log(this.phrase.charAt(i))
         }
         console.log(div);
         
     };
     checkLetter(){}
     showMatchedNumber(){}
 }
//test phrase 
 const test = new Phrase('H El lo');
 console.log(test);