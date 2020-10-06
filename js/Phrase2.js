class Phrase{
    constructor(phrase){
        this.phrase = phrase
    }
    addPhraseToDisplay(){
        let ul = document.querySelector('ul')
        let lower = this.phrase.toLowerCase();
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
        
    }
}