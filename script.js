let player , turn , box , gameFinished

player = "X"
turn = 0
box = 0
y = 0
gameFinished = false
won = document.querySelector("#p3")
ai = document.querySelector("#aiOn")
player1 = document.querySelector("#p1")
player2 = document.querySelector("#p2")
player2.style.opacity = "0"

// function turnChanger(){
//     if (turn % 2 === 0) {
//         player = "X"
//         turn++
//         player1.style.opacity = "0"
//         player2.style.opacity = "100"
//     } else {
//         player = "O"
//         turn++
//         player1.style.opacity = "100"
//         player2.style.opacity = "0"
//     }
// }
function turnChanger() {
    player = (turn % 2 === 0) ? "X" : "O";
    turn++;
    player1.style.opacity = (player === "X") ? "0" : "100";
    player2.style.opacity = (player === "O") ? "0" : "100";
}


function currentBox(x){
    let current = document.querySelector("#box"+x);
    if (current.innerHTML !== "X" && gameFinished !== true && current.innerHTML !== "O" && gameFinished !== true) {
        turnChanger();
        current.innerHTML = player;
        win();
    }
}

function win(){
    for (let index = 1; index < 10; index++) {
        box = document.querySelector("#box"+index)
        box + 1
    }
    one = box1.innerHTML
    two = box2.innerHTML
    three = box3.innerHTML
    four = box4.innerHTML
    five = box5.innerHTML
    six = box6.innerHTML
    seven = box7.innerHTML
    eight = box8.innerHTML
    nein = box9.innerHTML
    if (one == two && two == three  && one == "X"
        || four == five && four == six  && four == "X"
        || seven == eight && eight == nein && seven == "X"
        || one == four && four == seven && one == "X"
        || two == five && five == eight && two == "X"
        || three == six && six == nein && three == "X"
        || one == five && five == nein && one == "X"
        || three == five && five == seven && three == "X") {
        console.log("win")
        gameFinished = true
        console.log(gameFinished)
        won.innerHTML = "Player 1 wins"
        won.style.display = "block"
        player1.style.opacity = "0"
        player2.style.opacity = "0"
    }
    if (one == two && two == three  && one == "O"
        || four == five && four == six  && four == "O"
        || seven == eight && eight == nein && seven == "O"
        || one == four && four == seven && one == "O"
        || two == five && five == eight && two == "O"
        || three == six && six == nein && three == "O"
        || one == five && five == nein && one == "O"
        || three == five && five == seven && three == "O") {
            console.log("win")
            gameFinished = true
            console.log(gameFinished)
            won.innerHTML = "Player 2 wins"
            won.style.display = "block"
            player1.style.opacity = "0"
            player2.style.opacity = "0"
        }
}