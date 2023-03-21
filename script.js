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

/*
let computerSelection;
let playerSelection;
let intermSelection;

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


}

function getPlayerSelection() {
do{
        intermSelection = prompt("Please re-enter your choice using rock, paper, or scissor.", "rock")
    }while(!intermSelection); 
}

function lowerCasePlayerSelection() {
    return intermSelection.toLowerCase();
}

 function checkPlayerSelection() {
    while((intermSelection !== "rock") || intermSelection !== "paper" || intermSelection !== "scissor") {
        intermSelection = prompt("Please re-enter your choice using rock, paper, or scissor.", "rock"); 
    }
        return intermSelection;
} 

function combinePlayerSelection() {
    getPlayerSelection();
    lowerCasePlayerSelection();


    return (
        playerSelection = intermSelection
    );
} 
*/


let computerSelection;
let playerSelection;
let intermSelection;
let intermSelectionLowerCase;

function getComputerSelection() {
    
    if (Math.floor(Math.random() * 10) <= 3) {
         computerSelection = "rock";
    }
    else if (Math.floor(Math.random() * 10) <= 6) {
         computerSelection = "paper"; 
    }
    else {
         computerSelection = "scissor";
    }
    
}

function getPlayerSelection(intermSelection) {

    do{
            intermSelection = prompt("Please enter your choice using rock, paper, or scissor.", "rock");
        }while(!intermSelection); 
            playerSelection = intermSelection.toLowerCase();
                getComputerSelection();
    }
    
function playRound() {
    
    switch(computerSelection) {
        case "rock":
            if (computerSelection == "rock" && playerSelection == "paper") {
                return alert("Player Won!");
            }
            else if (computerSelection == "rock" && playerSelection == "scissor") {
                return alert("Computer Won!");
            }
            else {
                return alert("Tie!");
            }
        case "paper":
            if (computerSelection == "paper" && playerSelection == "scissor") {
                return alert("Player Won!");
            }
            else if (computerSelection == "paper" && playerSelection == "rock") {
                return alert("Computer Won!");
            }
            else {
                return alert("Tie!");
            }
        case "scissor":
            if (computerSelection == "scissor" && playerSelection == "rock") {
                return alert("Player Won!");
            }
            else if (computerSelection == "scissor" && playerSelection == "paper") {
                return alert("Computer Won!");
            }
            else {
                return alert("Tie!");
            }
    }
}

function game() {
    playRound(getPlayerSelection());
}

