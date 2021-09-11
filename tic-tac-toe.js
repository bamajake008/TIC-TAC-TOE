let turnCount = 0;


function startGame() {

    document.getElementById('refresh').style.visibility = 'hidden';
    turnCount = 0;


    for (let i = 1; i <= 9; i += 1) {
        clearBox(i);


    }
    //making X go first

    document.turn = 'X';

    document.winner = null;

    document.cat = false;


    setTurnMessage(document.turn + '\'s start first!');

    document.getElementById('Message').style.color = 'blue';
}

function setTurnMessage(message) {

    document.getElementById('Message').innerText = message;
}

//switch to O
function switchTurn() {

    if (checkWinner(document.turn) && document.cat === false) {

        document.winner = document.turn;

        setTurnMessage('Congratulations ' + document.turn + '\'s, you win!');

        document.getElementById('Message').style.color = 'red';


        document.getElementById('refresh').style.visibility = 'visible';

    } else if (document.cat === true) {

        setTurnMessage('winner! Play again?');

        document.getElementById('Message').style.color = 'green';


        document.getElementById('refresh').style.visibility = 'hidden';
    }


    else if (document.turn == 'X') {

        document.turn = 'O';

        setTurnMessage('It is ' + document.turn + '\'s turn');

        document.getElementById('Message').style.color = 'brown';

    } else {

        document.turn = 'X';

        setTurnMessage('It is ' + document.turn + '\'s turn.');

        document.getElementById('Message').style.color = 'green';
    }
}
//chose the square
function nextMove(square) {

    if (document.winner != null) {

        setTurnMessage(document.turn + '\'s already won!');

        document.getElementById('Message').style.color = 'orange';

    } else if (square.innerText == '') {

        square.innerText = document.turn;


        switchTurn();

    } else {

        setTurnMessage(' You Suck, pick a different square!');

        document.getElementById('Message').style.color = 'red';
    }
}

//check winner
function checkWinner(move) {

    turnCount += 1;


    let result = false;


    if (

        checkRow(1, 2, 3, move) ||

        checkRow(4, 5, 6, move) ||

        checkRow(7, 8, 9, move) ||

        checkRow(1, 4, 7, move) ||

        checkRow(2, 5, 8, move) ||

        checkRow(3, 6, 9, move) ||

        checkRow(1, 5, 9, move) ||

        checkRow(3, 5, 7, move)) {

        result = true;
        alert('GUESS WHO WON?! CLICK OK TO FIND OUT!!');
    } else if (turnCount > 8 && result === false) {
        document.cat = true;
    }
    return result;

}


//search through the rows function
function checkRow(a, b, c, move) {

    let result = false;


    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {

        result = true;
    }
    return result;
}
//define the boxes

function getBox(number) {
    return document.getElementById('square' + number).innerText;
}


function clearBox(number) {
    document.getElementById('square' + number).innerText = '';
}