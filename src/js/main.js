import Blackjack from "blackjack-dealer-logic"


export default () => {
    
    const game = Blackjack.singleDeckGame;
    const playButton = document.getElementById("btn-play");
    const hitButton = document.getElementById("btn-hit");
    const standButton = document.getElementById("btn-stand");
    const doubleButton = document.getElementById("btn-double");
    const myWalletButton = document.getElementById("btn-wallet");
    const gameReset = document.getElementById("btn-restart")
    const lineDisplay = document.getElementById("lineDisplay")
    const winDisplay = document.getElementById("winDisplay")

    var gameHistory = []

    var playerName = window.prompt("Please Enter Your Name")
    alert("Hi! " + playerName + " You Have: " + game.getUserChips() + " Chips! Press OK Then Start To Begin");
    

    playButton.onclick = function(){
        game.deal();
        document.getElementById("table").innerHTML = `Your Available Chips: ${game.getUserChips()}`;
        const wager = window.prompt(playerName + " Enter Your Wager In Chips: ");
        game.receiveAnte(wager);
        document.getElementById("table").innerHTML = `Dealer Has: ${game.getDealerCardUp()} <br/> ${playerName} You Have: ${game.getUserHandValue()}`;
    };


    hitButton.onclick = function(){
        game.hitUser();
        game.isDealerPlaying();
        game.getUserHandValue(); //Combines value of all cards and evaluates whether User hand is bust or not.
        game.settleDealerHand(); //Makes decisions for Dealers hand based on the current value of said hand.
        
        if (game.evaluateUser() > 21){
            document.getElementById("table").innerHTML =`Sorry You Busted!...<br/> ${playerName} You Have: ${game.getUserHandValue()}`;
            gameHistory.push("loss");
            game.resetAnte();
        }

        if (game.evaluateUser() == 21){
            document.getElementById("table").innerHTML =`BlackJack!...<br/> Dealer Has: ${game.getDealerHandValue()} <br/> ${playerName} You Have: ${game.getUserHandValue()}`;
            gameHistory.push("blackjack");
            game.userWin();
        }
        
        if (game.isDealerBust() && !game.isUserBust()){

            document.getElementById("table").innerHTML =`You Won Baller!...<br/> Dealer Has: ${game.getDealerHandValue()} <br/> ${playerName} You Have: ${game.getUserHandValue()}`;
            gameHistory.push("win");
            game.userWin(); //Adds a given number of chips to the Users chip count.
            
        }

        if (game.evaluateUser() < game.evaluateDealer() || game.isUserBust()) {
            document.getElementById("table").innerHTML =`You Lost This Round!...<br/> Dealer Has: ${game.getDealerHandValue()} <br/> ${playerName} You Have: ${game.getUserHandValue()}`;
            gameHistory.push("loss");
            game.resetAnte();
        }

        if (game.evaluateUser() === game.evaluateDealer()) {
            document.getElementById("table").innerHTML =`You Pushed This Round!...<br/> Dealer Has: ${game.getDealerHandValue()} <br/> ${playerName} You Have: ${game.getUserHandValue()}`;
            gameHistory.push("push");
            game.resetAnte();
        }
        
        game.resetPlayers();
        
    };

       
        

    standButton.onclick = function(){
        game.standUser(); //Sets value of Player playing to false
        game.evaluateUser(); 
        game.settleDealerHand(); 
        
        if (game.isDealerBust() && !game.isUserBust()){

            document.getElementById("table").innerHTML =`You Won Baller!...<br/> Dealer Has: ${game.getDealerHandValue()} <br/> ${playerName} You Have: ${game.getUserHandValue()}`;
            gameHistory.push("win");
            game.userWin(); //Adds a given number of chips to the Users chip count.
            
        }

        if (game.evaluateUser() < game.evaluateDealer() || game.isUserBust()) {
            document.getElementById("table").innerHTML =`You Lost This Round!...<br/> Dealer Has: ${game.getDealerHandValue()} <br/> ${playerName} You Have: ${game.getUserHandValue()}`;
            gameHistory.push("loss");
            game.resetAnte();
        }

        if (game.evaluateUser() === game.evaluateDealer()) {
            document.getElementById("table").innerHTML =`You Pushed This Round!...<br/> Dealer Has: ${game.getDealerHandValue()} <br/> ${playerName} You Have: ${game.getUserHandValue()}`;
            gameHistory.push("push");
            game.resetAnte();
        }
        
        game.resetPlayers();
        
    };

    
    doubleButton.onclick = function(){
        game.doubleUser();
        game.evaluateUser();
        game.settleDealerHand(); 
        
        if (game.isDealerBust() && !game.isUserBust()){

            document.getElementById("table").innerHTML =`You Won Baller!...<br/> Dealer Has: ${game.getDealerHandValue()} <br/> ${playerName} You Have: ${game.getUserHandValue()}`;
            gameHistory.push("win");
            game.userWin(); //Adds a given number of chips to the Users chip count.
            
        }

        if (game.evaluateUser() < game.evaluateDealer() || game.isUserBust()) {
            document.getElementById("table").innerHTML =`You Lost This Round!...<br/> Dealer Has: ${game.getDealerHandValue()} <br/> ${playerName} You Have: ${game.getUserHandValue()}`;
            gameHistory.push("loss");
            game.resetAnte();
        }

        if (game.evaluateUser() === game.evaluateDealer()) {
            document.getElementById("table").innerHTML =`You Pushed This Round!...<br/> Dealer Has: ${game.getDealerHandValue()} <br/> ${playerName} You Have: ${game.getUserHandValue()}`;
            gameHistory.push("push");
            game.resetAnte();
        }
        
        game.resetPlayers();
        
    };
    

    gameReset.onclick = function(){
        window.location.reload(); //reloads current page
    };

    
    myWalletButton.onclick = function(){
    document.getElementById("table").innerHTML = `${playerName} You Have Chips Available: ${game.getUserChips()}`;
    document.getElementById("lineDisplay").innerHTML = `Here is your Game Wins And Losses : ${gameHistory}`;
    };
       

};
