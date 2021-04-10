/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result gets added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 20 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, dice, gamePlaying;
init();
//document.querySelector('#current-'+activePlayer).textContent=dice;


/*we can use queries to alterate  and read elements in those classes like #score*/
/*we can also change style of  contents using  query selsector;
 */




/*events:notifications that are sent to notify the code that something happened on the webpage

like click resize...
eventlistener 
:function that performs an action based on certain event
it waits for ane vent to happen.


/*process of event process:
MESSAGE QUEUE
ALL EVENTS ARE PLACED
IT IS EXECUTED AFTER EXECUTION STACK IS EMPTY
WHEN EVENT LISTENER IS CALEED
IT IS PLACED ON EXECUTION STACK.
*/
/*callback function-fun that is called as argument of other fun*/


document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) { /*1.rand no.*/
        dice = Math.floor(Math.random() * 6) + 1;
        /*2disp result*/
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        /*3update round score if rolled number was not a 1*/
        if (dice !== 1) {
            //add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //next player can also use ternary operator
            nextplayer();
        }
    }







});
/*example for Anonymous function
document.querySelector('.btn-roll').addEventListener('click',function btn()
{
    document.write("UN ISHTATHUKU LA ROLL PANNA MUDIYAATHU");
})
;
*/

document.querySelector('.btn-hold').addEventListener('click', function() {
        if (gamePlaying) {
            scores[activePlayer] += roundScore;
            //update ui

            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

            //chck if player wins
            if (scores[activePlayer] >= 20) {
                gamePlaying = false;
                document.querySelector('#name-' + activePlayer).textContent = 'VETRI!!';
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel'.classlist.add('winner'));
                document.querySelector('.player-' + activePlayer + '-panel'.classlist.remove('active'));

            } else {


                //nextplayer
                nextplayer();
            }
        }
    }
    //add current score to global score
);

function nextplayer() {
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';

}
document.querySelector('.btn-new').addEventListener('click', init);

function init() {

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');

    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');


}