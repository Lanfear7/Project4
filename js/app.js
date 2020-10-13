 // Initializes the game object
let game;

document.getElementById("btn__reset").addEventListener("click", () => {
   game = new Game();
   game.startGame();

});
//user click event listener
document.getElementById("qwerty").addEventListener("click", (e) => {
    if(e.target.textContent.length == 1){
        game.activePhrase.showMatchedLetter(e.target.textContent);
        game.handleInteraction(e.target);  
    }
});
//keyboard event listener 
document.addEventListener('keydown', (e) => {
    console.log(e.key)
    const userkeybord = document.querySelectorAll('.keyrow .key' )
    //make sure the pressed key matched a key on the on screen keyboard 
    for(let i = 0; i < userkeybord.length; i++ ){
        if(userkeybord[i].textContent == e.key){
            //passing in the matched keyboard letter
            game.handleInteraction(userkeybord[i])
        }
    }
});