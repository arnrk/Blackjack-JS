import Blackjack from "blackjack-dealer-logic"




export default () => {
    const game = Blackjack.singleDeckGame;
    const gameIsRunning = true;
    
    alert("Welcome to Blackjack")
    alert("You Have: " + game.getUserChips()+ " Chips"+ " Press OK Then Play Button To Begin")
        
    const playButton = document.getElementById("btn-play");
    const hitButton = document.getElementById("btn-hit");
    const standButton = document.getElementById("btn-stand");
    const doubleButton = document.getElementById("btn-double");

 
   }
       
     
   
   //playButton.onclick = function(){

        //document.getElementById("text")

        //text.innerText = `The amount of money in your wallet: ${game.getUserChips()}`

        //const wager = window.prompt("Enter your wager: ");

        //game.receiveAnte(wager)

        //document.write(`Your wager is: ${wager}`)

        //game.deal()

        //document.write(`Dealer is showing: ${game.getDealerCardUp()}`)

        //document.write(`Your current hand: ${game.getUserHandValue()}`)



   // }
    
   //while (gameisrunning){
        //alert("Lets Play Blackjack" + game.getUserChips())
        //game.deal();

        //game.resetPlayers();
   // }
  

  // playButton.onclick = function(){
   // game.hitUser()
//};

