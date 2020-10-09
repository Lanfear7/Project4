 // Initializes the game object
let game = null
//this works and will call the startGame method
let startbtn = document.querySelector('#btn__reset');
startbtn.addEventListener('click', () =>{
    game = new Game();
    game.startGame()
})