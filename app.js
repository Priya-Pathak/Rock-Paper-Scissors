//Caching the dom
//
//
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");//dom variables
const compScore_span = document.getElementById("computer-score");//dom variable
const scoreBoard_div = document.querySelector(".score-board");//dom variable
const result_p = document.querySelector("p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ["r","p","s"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}
//console.log(getComputerChoice());

function convertWord(letter){
    if (letter == "r"){
        return "Rock";
    }
    if (letter == "p"){
        return "Paper";
    }
    if (letter == 's'){
        return "Scissors";
    }
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    const userSmall = "user".fontsize(5).sup();
    const compSmall = "comp".fontsize(5).sup();
    result_p.innerHTML = `${convertWord(userChoice)}${userSmall} beats ${convertWord(computerChoice)}${compSmall}  !!  You win!!`;
    confetti.start();
}

function lose(userChoice, computerChoice){
    compScore++;
    compScore_span.innerHTML = compScore;
    const userSmall = "user".fontsize(5).sup();
    const compSmall = "comp".fontsize(5).sup();
    confetti.remove();
    result_p.innerHTML =   `${convertWord(userChoice)}${userSmall} covers ${convertWord(computerChoice)}${compSmall}  !!  You lost!!`;
}

function draw(userChoice, computerChoice){
    const userSmall = "user".fontsize(5).sup();
    const compSmall = "comp".fontsize(5).sup();
    confetti.remove();
    confetti.start(300);
    result_p.innerHTML = `${convertWord(userChoice)}${userSmall} versus ${convertWord(computerChoice)} ${compSmall}  !!  It is a draw!!`;
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    let set = 0;
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }


}

function main(){
    rock_div.addEventListener("click", function(){
        game("r");
        console.log("hey you clicked on rock");
    });

    paper_div.addEventListener("click", function(){
        game("p");
        console.log("hey you clicked on paper");
    });

    scissors_div.addEventListener("click", function(){
        game("s");
        console.log("hey you clicked on scissors");
    });

}

main();