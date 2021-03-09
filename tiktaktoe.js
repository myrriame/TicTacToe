var boardElement = document.querySelector('#board')
var board = [];
var playerScore = 0;
var javaScore = 0;
var name = prompt('What is your name?', 'PlayerX');

// how to place the users name on the score board
document.getElementById('name').innerHTML = name;


for (var i = 0; i < 3; i++) {
    if (board[i] == undefined) {
        board[i] = []
    }
    for (var j = 0; j < 3; j++) {

        // creates the the grid boxes and gives then a class name of board-slot
        var slot = document.createElement('div');
        slot.className = 'board-slot';

        // added an event listener that places an X in any div that's clicked on and replaces its board-slot class name with playerXplayed for CSS use
        slot.addEventListener('click', function () {
            var target = this;
            target.innerHTML = 'X';

            target.className = target.className.replace('board-slot', 'playerXPlayed')

            // Once an X is placed in the div this if statement checks if and of the 8 winning combos have been achieved if so it shows the user an alert, resets the
            // board, adds a point to the players score and places it on the page using innerHTML

            if ((board[0][0].innerHTML === "X" && board[0][1].innerHTML === "X" && board[0][2].innerHTML === "X") ||
                (board[1][0].innerHTML === "X" && board[1][1].innerHTML === "X" && board[1][2].innerHTML === "X") ||
                (board[2][0].innerHTML === "X" && board[2][1].innerHTML === "X" && board[2][2].innerHTML === "X") ||
                (board[0][0].innerHTML === "X" && board[1][0].innerHTML === "X" && board[2][0].innerHTML === "X") ||
                (board[0][1].innerHTML === "X" && board[1][1].innerHTML === "X" && board[2][1].innerHTML === "X") ||
                (board[0][2].innerHTML === "X" && board[1][2].innerHTML === "X" && board[2][2].innerHTML === "X") ||
                (board[0][0].innerHTML === "X" && board[1][1].innerHTML === "X" && board[2][2].innerHTML === "X") ||
                (board[0][2].innerHTML === "X" && board[1][1].innerHTML === "X" && board[2][0].innerHTML === "X")) {

                setTimeout(() => {
                    alert('Congrats, You Have Beat JavaScript!')
                    reset()
                    playerScore++
                    document.getElementById('player1').innerHTML = playerScore
                }, 300);

                // if the player hasn't won yet this else if statement checks if it's a draw by checking if all the divs have content in their innerHTNL
                // if they do then it alerts the player that it's a draw and resets the board
            } else if (board[0][0].innerHTML !== "" && board[0][1].innerHTML !== "" && board[0][2].innerHTML !== ""
                && board[1][0].innerHTML !== "" && board[1][1].innerHTML !== "" && board[1][2].innerHTML !== ""
                && board[2][0].innerHTML !== "" && board[2][1].innerHTML !== "" && board[2][2].innerHTML !== "") {

                setTimeout(() => {
                    alert('It Is A Draw!')
                    reset()
                }, 300);

                // if it's neither a win or a draw then we move on to javasTurn() 
            } else {
                javasTurn();
            }
        });

        board[i][j] = slot;
        boardElement.appendChild(slot);
    }
}

// this function creates random indexes and checks to see if those random index have content in the div if not then an O is placed there and the 
// class name is replaced with javaScriptPlayed for css purposes if so then new random indexes are generated
var javasTurn = () => {
    var javaPlays = '';
    var randomIndex1 = Math.floor(Math.random() * 3);
    var randomIndex2 = Math.floor(Math.random() * 3)
    console.log(randomIndex2, randomIndex1)
    console.log(board[randomIndex2][randomIndex1])

    if ((board[randomIndex2][randomIndex1].innerHTML !== "X") && (board[randomIndex2][randomIndex1].innerHTML !== "O")) {

        javaPlays = board[randomIndex2][randomIndex1];

        javaPlays.className = javaPlays.className.replace('board-slot', 'javaScriptPlayed');

        setTimeout(() => {
            javaPlays.innerHTML = 'O';

            // this if statement checks if any of the O plays are winning matches, if so the user sees an alert telling them they lost, the board is cleared, a point is added to the javascript score and updated on the page using innerHTML
            if ((board[0][0].innerHTML === "O" && board[0][1].innerHTML === "O" && board[0][2].innerHTML === "O") ||
                (board[1][0].innerHTML === "O" && board[1][1].innerHTML === "O" && board[1][2].innerHTML === "O") ||
                (board[2][0].innerHTML === "O" && board[2][1].innerHTML === "O" && board[2][2].innerHTML === "O") ||
                (board[0][0].innerHTML === "O" && board[1][0].innerHTML === "O" && board[2][0].innerHTML === "O") ||
                (board[0][1].innerHTML === "O" && board[1][1].innerHTML === "O" && board[2][1].innerHTML === "O") ||
                (board[0][2].innerHTML === "O" && board[1][2].innerHTML === "O" && board[2][2].innerHTML === "O") ||
                (board[0][0].innerHTML === "O" && board[1][1].innerHTML === "O" && board[2][2].innerHTML === "O") ||
                (board[0][2].innerHTML === "O" && board[1][1].innerHTML === "O" && board[2][0].innerHTML === "O")) {

                setTimeout(() => {
                    alert('Boo, You Have Been Beat By JavaScript!')
                    reset()
                    javaScore++
                    document.getElementById('javascript').innerHTML = javaScore

                }, 300);

            }
        }, 300);

        // this else is executed if the random indexes already have either an X or an O in the board div
    } else {
        return javasTurn();
    }

}

// a function that resets the board back to normal
var reset = () => {

    board[0][0].innerHTML = ""
    board[0][1].innerHTML = ""
    board[0][2].innerHTML = ""
    board[1][0].innerHTML = ""
    board[1][1].innerHTML = ""
    board[1][2].innerHTML = ""
    board[2][0].innerHTML = ""
    board[2][1].innerHTML = ""
    board[2][2].innerHTML = ""
    board[0][0].className = 'board-slot'
    board[0][1].className = 'board-slot'
    board[0][2].className = 'board-slot'
    board[1][0].className = 'board-slot'
    board[1][1].className = 'board-slot'
    board[1][2].className = 'board-slot'
    board[2][0].className = 'board-slot'
    board[2][1].className = 'board-slot'
    board[2][2].className = 'board-slot'
}