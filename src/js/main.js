import Blackjack from "blackjack-dealer-logic"




export default () => {
    const game = Blackjack.singleDeckGame;
    const gameIsRunning = true;
    
    alert("WELCOME! You Have: " + game.getUserChips()+ " Chips"+ " Press OK Then Play Button To Begin")
        
    const playButton = document.getElementById("btn-play");
    const hitButton = document.getElementById("btn-hit");
    const standButton = document.getElementById("btn-stand");
    const doubleButton = document.getElementById("btn-double");
    const myWalletButton = document.getElementById("btn-wallet");

    playButton.onclick = function(){

        document.getElementById("table").innerHTML = `Your Available Chips: ${game.getUserChips()}`;
        const wager = window.prompt("Enter your wager amount: ");
        game.receiveAnte(wager)
        game.deal()
        document.getElementById("table").innerHTML = `Dealer has: ${game.getDealerCardUp()} <br/> You have: ${game.getUserHandValue()}`;
        
        
        
        //document.getElementById("table").innerHTML = `Dealer has: ${game.getDealerCardUp()} <br/> You have: ${game.getUserHandValue()}`;
        //document.getElementById("table").innerHTML= x + y;
        //document.getElementById("btn-hit").onclick = game.hitUser();
        //document.getElementById("table").innerHTML = `You have: ${game.getUserHandValue()}`;
        //document.write(`Dealer is showing: ${game.getDealerCardUp()}`)
        //game.hitDealer()
       
    }

    hitButton.onclick = function(){
        game.hitUser()
        document.getElementById("table").innerHTML = `Dealer Cards: ${game.getDealerCardUp()} <br/> You have: ${game.getUserHandValue()}`;
        game.receiveAnte(wager)
        const hitButton = document.getElementById("btn-hit");
        document.getElementById("newButtons").innerHTML = hitButton;

        
    }



    myWalletButton.onclick = function(){

        document.getElementById("table").innerHTML = `Here is the total number of Chips you have available: ${game.getUserChips()}`;
       }



   }

   
   



       
     
   
   

        //const wager = window.prompt("Enter your wager: ");

        //game.receiveAnte(wager)

        //document.write(`Your wager is: ${wager}`)

        //game.deal()

        //document.write(`Dealer is showing: ${game.getDealerCardUp()}`)

        //document.write(`Your current hand: ${game.getUserHandValue()}`)



    
    
   //while (gameisrunning){
        //alert("Lets Play Blackjack" + game.getUserChips())
        //game.deal();

        //game.resetPlayers();
   // }
  

  // playButton.onclick = function(){
   // game.hitUser()
//};

