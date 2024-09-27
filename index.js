//first player set to X
let Player = "X";
let CurrentPlayer = document.getElementById('player');
CurrentPlayer.innerHTML="Player "+Player;
    let button1 = document.getElementById("b11");
    let button2 = document.getElementById("b12");
    let button3 = document.getElementById("b13");
    let button4 = document.getElementById("b21");
    let button5 = document.getElementById("b22");
    let button6 = document.getElementById("b23");
    let button7 = document.getElementById("b31");
    let button8 = document.getElementById("b32");
    let button9 = document.getElementById("b33");
//cahnge the _ to player name (X or O)and stop repeat overlay
document.querySelectorAll('button').forEach(button =>{
    button.addEventListener('click',() =>{
        if(button.textContent ==='_'){
            button.textContent=Player;
            winLoseDraw();
        }
    })
});
//change play X and player O
function changePlayer(){
    if (Player === "X"){
        Player = "O";
    }else{
        Player="X";
    }
    CurrentPlayer.innerHTML="Player "+Player; 
}










function winLoseDraw(){
    if (button1.innerHTML!="_" && button2.innerHTML!="_" && button3.innerHTML!="_" && button4.innerHTML!="_" && button5.innerHTML!="_" && button6.innerHTML!="_" && button7.innerHTML!="_" && button8.innerHTML!="_" && button9.innerHTML!="_" ) {
        CurrentPlayer.innerHTML="Draw";
    }
    else if(button1.innerHTML == button2.innerHTML  && button2.innerHTML == button3.innerHTML && button1.innerHTML!="_"){
        CurrentPlayer.innerHTML="Player "+ Player+" Wins"
        
    }
    else if(button4.innerHTML == button5.innerHTML && button5.innerHTML == button6.innerHTML && button4.innerHTML!="_" ){
        CurrentPlayer.innerHTML="Player "+ Player +" Wins"
    }
    else if(button7.innerHTML == button8.innerHTML && button8.innerHTML == button9.innerHTML && button7.innerHTML!="_"){
            CurrentPlayer.innerHTML="Player "+ Player+" Wins"
    } 
    else if(button1.innerHTML == button4.innerHTML && button4.innerHTML == button7.innerHTML && button1.innerHTML!="_"){
        CurrentPlayer.innerHTML="Player "+ Player +" Wins"
    }  
    else if(button8.innerHTML == button5.innerHTML && button5.innerHTML == button2.innerHTML && button8.innerHTML!="_"){
        CurrentPlayer.innerHTML="Player "+ Player +" Wins";
    }
    else if(button9.innerHTML == button6.innerHTML && button6.innerHTML == button3.innerHTML && button9.innerHTML!="_"){
        CurrentPlayer.innerHTML="Player "+ Player +" Wins";
    }        
    else if(button1.innerHTML == button5.innerHTML && button5.innerHTML == button9.innerHTML && button1.innerHTML!="_"){
        CurrentPlayer.innerHTML="Player "+ Player +" Wins";
    }
    else if(button3.innerHTML == button5.innerHTML && button5.innerHTML == button7.innerHTML && button3.innerHTML!="_"){
        CurrentPlayer.innerHTML="Player "+ Player +" Wins";
    }
    else {
        changePlayer();
    }
}
