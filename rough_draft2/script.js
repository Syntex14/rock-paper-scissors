// Limitations
    // Game will be completely played in console
    // Will need to create a function for the Computer's Choice, must be random choice.
        // must return result (rock, paper, scissor)
    // Will need to create a function for single round of gameplay.
        // must take two parameters, playerSelection and computerSelection
            // playerSelection parameter has to be case-insensitive.
    // must return a string that declares the winner of the round
    // Create a function called game() that calls the playRound function inside of this to play a five round game.
        // must keep score and return a winner and loser at the end.
        // Use prompt() to get input from the user. 

// Operations
    // 1. Create a function that generates a randomized choice and return the result.
    // 2. Create a function that takes any user input, compares it to the user input and the randomized choice, and returns the result.
    // 3. Create a function that calls the game-round 5 times, records the result, and returns the winner.

// Pusedo-Code
// 1.
    // DECLARE computerSelection = computerchoice(); ---> what's the difference in calling the function and storing the variable vs. doing a function declaration?
    // function computerChoice() {
        // if rock > 3, RETURN rock
        // if 3 < paper < 6, RETURN paper
        // else, RETURN scissor
   // }

// 2.
    // function playRound(playerSelection, computerSelection) {
        // CONVERT playerSelection to lowercase.
        // COMPARE playerSelection to computerSelection
            // FORMAT: playerSelection (choice) vs. computerSelection (choice)
                // IF rock AND scissor, RETURN player wins!
                // IF rock AND paper, RETURN computer wins!
                // IF equal to eachother, return tie!
                // IF paper AND rock, RETURN  player wins!
                // IF paper AND scissor, return computer wins!
                // IF equal to eachother, return tie!
                // IF scissor AND paper, RETURN player wins!
                // IF scissor AND rock, RETURN computer wins!
                // IF equal to eachother, return tie!
    // }

// 3. 
    // function game() {
        // DECLARE variable computerWin = 0;
        // DECLARE variable playerWin =0;
        // DECLARE playerSelection;
            // CREATE  for loop that starts at 0, runs for 5 times, and increments one at a time.
                // prompt user for choice.
                    // store in playerSelection\
                        // making assumption that user can properly input prompt.
                //run playRound() five times
                // IF player win, add one to playerWin
                // else, add one to computerWin


function getComputerChoice() {

if (Math.floor(Math.random() * 10) <= 3) {
    return "rock";
}
else if (Math.floor(Math.random() * 10) <=6) {
    return "paper"; 
}
else {
    return "scissor";
}
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    let playerSelectionLower = playerSelection.toLowerCase();
    switch(playerSelectionLower) {
        case "rock":
            if (playerSelectionLower == "rock" && computerSelection == "paper") {
                return "Computer Won!";
            }
            else if (playerSelectionLower == "rock" && computerSelection == "scissor") {
                return "Player Won!";
            }
            else {
                return "Tie!";
            }
        case "paper":
            if (playerSelectionLower == "paper" && computerSelection == "scissor") {
                return "Computer Won!";
            }
            else if (playerSelectionLower == "paper" && computerSelection == "rock") {
                return "Player Won!";
            }
            else {
                return "Tie!";
            }
        case "scissor":
            if (playerSelectionLower == "scissor" && computerSelection == "rock") {
                return "Computer Won!";
            }
            else if (playerSelectionLower == "scissor" && computerSelection == "paper") {
                return "Player Won!";
            }
            else {
                return "Tie!";
            }
    }
}

function game() {
    let computerWin = 0;
    let playerWin = 0;
    let playerSelectionLoop;
    for (i = 0; i < 5; i++) {
        playerSelectionLoop = prompt("Please enter your choice: rock, paper, or scissor.")
        let playRoundStore = playRound(playerSelection = playerSelectionLoop);
            if (playRoundStore === "Player Won!") { // update this code using ternary operator
                playerWin += 1;
            }
            else if (playRoundStore === "Computer Won!") { // forgetting about ties, will need to program that into this.
                computerWin += 1;
            }
    }
    if (playerWin > computerWin) {
        return "Player won more rounds than computer!";
    }
    return "Computer won more rounds than player!";
}