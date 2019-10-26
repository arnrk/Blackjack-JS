import Blackjack from "blackjack-dealer-logic"




export default () => {
    const game = Blackjack.singleDeckGame;
    const gameIsRunning = true;
    
    alert("WELCOME! You Have: " + game.getUserChips()+ " Chips"+ " Press OK Then Play Button To Begin");
        
    const playButton = document.getElementById("btn-play");
    const hitButton = document.getElementById("btn-hit");
    const standButton = document.getElementById("btn-stand");
    const doubleButton = document.getElementById("btn-double");
    const myWalletButton = document.getElementById("btn-wallet");
    const wagerShow = document.getElementById("wagerAmountDisplay");
    const dealerShow = document.getElementById("dealerCards");
    const playerShow = document.getElementById("yourCards");
    const playerChoice = document.getElementById("youChoose");
    const gameResult = document.getElementById("gameResult");

    playButton.onclick = function(){

        document.getElementById("table").innerHTML = `Your Available Chips: ${game.getUserChips()}`;
        const wager = window.prompt("Enter your wager amount: ");
        game.receiveAnte(wager);
        game.deal();
        document.getElementById("table").innerHTML = `Dealer has: ${game.getDealerCardUp()} <br/> You have: ${game.getUserHandValue()}`;
    };



    hitButton.onclick = function(){
        game.hitUser();
        game.evaluateUser();
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
        


    myWalletButton.onclick = function(){
    document.getElementById("table").innerHTML = `Here is the total number of Chips you have available: ${game.getUserChips()}`;
       };

   };
