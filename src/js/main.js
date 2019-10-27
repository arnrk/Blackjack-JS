import Blackjack from "blackjack-dealer-logic"


export default () => {
    
    const game = Blackjack.singleDeckGame;
    const gameIsRunning = true;
    const playButton = document.getElementById("btn-play");
    const hitButton = document.getElementById("btn-hit");
    const standButton = document.getElementById("btn-stand");
    const doubleButton = document.getElementById("btn-double");
    const myWalletButton = document.getElementById("btn-wallet");
    const gameReset = document.getElementById("btn-restart")

    var playerName = window.prompt("Please Enter Your Name")
    alert("WELCOME! " + playerName + " You Have: " + game.getUserChips() + " Chips! Press OK Then Play To Begin");
    

    playButton.onclick = function(){
        
        document.getElementById("table").innerHTML = `Your Available Chips: ${game.getUserChips()}`;
        const wager = window.prompt("Enter Your Wager In Chips: ");
        game.receiveAnte(wager);
        game.deal();
        document.getElementById("table").innerHTML = `Dealer Has: ${game.getDealerCardUp()} <br/> ${playerName} You Have: ${game.getUserHandValue()}`;
    };


    hitButton.onclick = function(){
        game.hitUser();
        document.getElementById("table").innerHTML = `Dealer Has: ${game.getDealerCardUp()} <br/> ${playerName} You Have: ${game.getUserHandValue()}`;
       
        game.evaluateUser(); //Combines value of all cards and evaluates whether User hand is bust or not.
        if (game.isUserBust()){

            document.getElementById("table").innerHTML =`"You lost...<br/> Dealer Has: ${game.getDealerHandValue()} <br/> ${playerName} You Have: ${game.getUserHandValue()}`;
            gameHistory.push("lost");
            game.resetAnte();
            
        }

        game.settleDealerHand(); //Makes decisions for Dealers hand based on the current value of said hand.
        
    };
        

    standButton.onclick = function(){
        game.standUser(); //Sets value of Player playing to false
        game.settleDealerHand(); //Makes decisions for Dealers hand based on the current value of said hand.
        
        game.evaluateUser(); //Combines value of all cards and evaluates whether User hand is bust or not.
        if (game.isDealerBust()){

            document.getElementById("table").innerHTML = `You Win!!! <br/> Dealer Has: ${game.getDealerHandValue()} <br/> ${playerName} You Have: ${game.getUserHandValue()}`;
            game.receiveUserChips();
            gameHistory.push("win");
           
        }
        game.resetPlayer(); //Sets value of Player playing to true
        document.getElementById("table").innerHTML = `Dealer Has: ${game.getDealerHandValue()} <br/>${playerName} You Have: ${game.getUserHandValue()} <br/>Hit, Stand or Double `;
    };

    
    doubleButton.onclick = function(){
        
    };
    

    gameReset.onclick = function(){
        window.location.reload(); //reloads current page
    };

    
    myWalletButton.onclick = function(){
    document.getElementById("table").innerHTML = `${playerName} You Have Chips Available: ${game.getUserChips()}`;
    
    };
       

};
