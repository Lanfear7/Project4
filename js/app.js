 // Initializes the game object
let game;

document.getElementById("btn__reset").addEventListener("click", () => {
   game = new Game();
   game.startGame();

});
document.getElementById("qwerty").addEventListener("click", (e) => {
    if(e.target.textContent.length == 1){
        game.activePhrase.showMatchedLetter(e.target.textContent);
        game.handleInteraction(e.target);  
    }
});
