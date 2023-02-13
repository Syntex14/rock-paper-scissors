/*

computer selection

computer selection = rock, paper, scissors

When random math =
    0-3: rock => 1
    4-6: paper => 2
    7-9: scissor => 3

If (0-3)
    computer section = rock
elseif (4-6)
    computer selection = paper
else
    computer selection = scissor

player selection

PROMPT user for rock, paper, scissor
IF so, lowercase ENTIRE selection using .lowerCase()
        STORE in playerSelection variable
    IF not, ask user to re-enter prompt correctly
COMPARE playerSelection to strings, rock, paper, scissor to determine correct string choice 
    ROCK == ROCK; 1, PAPER == PAPER; 2, SCISSOR == SCISSOR; 3, 
       IF not, ask user to re-enter prompt correctly

rock, paper, scissor

COMPARE computerSelection to playerSelection
    
    IF scissor > rock
        RETURN playerWin
    ELSEIF rock < scissor 
        RETURN computerWin
    ELSE scissor = scissor OR rock = rock
        RETURN tie

    IF scissor > paper 
        RETURN computerWin
    ELSEIF paper < scissor 
        RETURN playerWin
    ELSE scissor = scissor OR paper = paper
        return tie
    
    IF paper > rock
        RETURN computerWin
    ELSEIF rock < paper
        RETURN paperWin
    ELSE paper = paper OR rock = rock
        RETURN computerWin

    Outputting winner outcome

    computerWin = "string"
    playerWin = "string"

    alert
*/

let computerSelection;
let playerSelection;

function getComputerSelection() {

    if (Math.floor(Math.random() * 10) <= 3) {
        return computerSelection = "rock";
    }
    else if (Math.floor(Math.random() * 10) <=6) {
        return computerselection = "paper"; 
    }
    else {
        return computerSelection = "scissor";
    }


};

function getPlayerSelection() {
    let intermSelection;
        intermSelection = prompt("Hi, please enter rock, paper, or scissor!", "rock");
};

