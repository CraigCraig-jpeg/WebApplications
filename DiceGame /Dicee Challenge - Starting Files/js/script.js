function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
function dice(player , diceindex){
    switch(player) {
        case 1: 
        document.querySelectorAll("img")[diceindex].setAttribute("src" , "./images/dice1.png")
            break;
        case 2: 
        document.querySelectorAll("img")[diceindex].setAttribute("src" , "./images/dice2.png")
            break;
        case 3: 
        document.querySelectorAll("img")[diceindex].setAttribute("src" , "./images/dice3.png")
            break;
        case 4: 
        document.querySelectorAll("img")[diceindex].setAttribute("src" , "./images/dice4.png")
            break;
        case 5: 
        document.querySelectorAll("img")[diceindex].setAttribute("src" , "./images/dice5.png")
            break;
        case 6: 
        document.querySelectorAll("img")[diceindex].setAttribute("src" , "./images/dice6.png")
            break;
    }
}
var player1 = getRndInteger(1 , 7);
var player2 = getRndInteger(1 , 7);

dice(player1 , 0) ;
dice(player2 , 1) ;

if(player1 > player2){
    document.querySelector("h1").textContent = "player 1 wins";
}else {
    document.querySelector("h1").textContent = "player 2 wins";
}