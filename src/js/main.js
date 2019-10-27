import Blackjack from "blackjack-dealer-logic"




export default () => {
    const game = Blackjack.singleDeckGame;
    const gameIsRunning = true;
    
    alert("WELCOME! You Have: " + game.getUserChips()+ " Chips"+ " Press OK Then Play To Begin");
        
    const playButton = document.getElementById("btn-play");
    const hitButton = document.getElementById("btn-hit");
    const standButton = document.getElementById("btn-stand");
    const doubleButton = document.getElementById("btn-double");
    const myWalletButton = document.getElementById("btn-wallet");
    const gameResult = document.getElementById("gameResult");
    const gameReset = document.getElementById("btn-restart")
    
    

    playButton.onclick = function(){
        
        document.getElementById("table").innerHTML = `Your Available Chips: ${game.getUserChips()}`;
        const wager = window.prompt("Enter Your Wager In Chips: ");
        game.receiveAnte(wager);
        game.deal();
        document.getElementById("table").innerHTML = `Dealer has: ${game.getDealerCardUp()} <br/> You have: ${game.getUserHandValue()}`;
    };



    hitButton.onclick = function(){
        game.evaluateUser();
        game.hitUser();
        document.getElementById("table").innerHTML = `Dealer has: ${game.getDealerCardUp()} <br/> You have: ${game.getUserHandValue()}`;
        if (game.isUserBust()){

            document.getElementById("table").innerHTML = `You Busted!!! <br/> Dealer Has: ${game.getDealerHandValue()} <br/> You Have: ${game.getUserHandValue()}`;
            hitButton.onclick = function(){}
            game.settleDealerHand();
            document.getElementById("table").innerHTML =`"You lost...<br/> Dealer Has: ${game.getDealerHandValue()} <br/> You Have: ${game.getUserHandValue()}`;
            gameHistory.push("lost");
            game.resetAnte();
            game.resetPlayers();
    }

        game.settleDealerHand();
    };
        
    gameReset.onclick = function(){
            window.location.reload(); //reloads current page
    }
    
    standButton.onclick = function(){
        game.standUser();
        game.evaluateUser();
        game.settleDealerHand();
        document.getElementById("table").innerHTML = `Dealer Has: ${game.getDealerHandValue()}`;
        if (game.isDealerBust()){

            document.getElementById("table").innerHTML = `You Win!!! <br/> Dealer Has: ${game.getDealerHandValue()} <br/> You Have: ${game.getUserHandValue()}`;
            game.settleDealerHand();
            document.getElementById("table").innerHTML =`"You Win...<br/> Dealer Has: ${game.getDealerHandValue()} <br/> You Have: ${game.getUserHandValue()}`;
            gameHistory.push("win");
            game.resetAnte();
            game.resetPlayers();
    }
        
    }


    myWalletButton.onclick = function(){
    document.getElementById("table").innerHTML = `Chips Available: ${game.getUserChips()}`;
       };
    
       

   };
