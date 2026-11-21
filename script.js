


//On Load

//global variables
let playerDisplay;
let computerDisplay;
let roundDisplay;
let PTW = 0;    //PTW=points to win
let P = 0;      //P=player points
let CPU = 0;    //CPU=computer points

const label = document.querySelector("label");
const points = document.querySelector("input");
const enter = document.getElementById("submit");
enter.addEventListener("click", (e) => {
    e.preventDefault();
    PTW = points.value;
    console.log(PTW);
    //clear screen
    label.remove();
    points.remove();
    enter.remove();
    //create display for points
    const pointContainer = document.createElement("div");
    const pointCounters = ["player","computer"];
    pointCounters.forEach(item => {
        const display = document.createElement("div");
        display.classList.add("display");
        display.id = item;
        display.textContent = item.toUpperCase() + ": 0";
        pointContainer.appendChild(display);
    });
    document.body.appendChild(pointContainer);
    playerDisplay = document.getElementById("player");
    computerDisplay = document.getElementById("computer");
    
    
    //create buttons for player input
    const buttonContainer = document.createElement("div");
    const ids = ["rock","paper","scissors"];
    ids.forEach(item => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.id = item;
        buttonContainer.appendChild(button);
    });
    document.body.appendChild(buttonContainer);
    //create round result display
    roundDisplay = document.createElement("div");
    roundDisplay.id = "roundDisplay";
    buttonContainer.appendChild(roundDisplay);
    //create final display
    const final = document.createElement("div");
    final.id = "final";
    //buttons
    const btnq = document.querySelectorAll(".btn");
    btnq.forEach((element) => element.addEventListener("click", (e) => {
        playRound(e.target.id,getComputerChoice());
        if(P == PTW){
            buttonContainer.remove();
            final.textContent = "You Win!";
            document.body.appendChild(final);
        }
        else if(CPU == PTW){
            buttonContainer.remove();
            final.textContent = "You Lose!";
            document.body.appendChild(final);
        }
    }));


})


//Functions
function getRandomInt(min, max){
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

function getComputerChoice(){
    let i = getRandomInt(1,3);
    switch(i){
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
    }
}

function playRound(player,computer){
    roundDisplay.textContent = "Computer played " + computer;
    if(player === computer) roundDisplay.textContent = roundDisplay.textContent + "\nTie";
    else if(player === "rock"){
        if(computer === "paper"){
            roundDisplay.textContent = roundDisplay.textContent + "\nLose Round";
            CPU++;
            computerDisplay.textContent = "COMPUTER: " + CPU;
        }
        else{      //only option left is rock - scissors
            roundDisplay.textContent = roundDisplay.textContent + "\nWin Round";
            P++;
            playerDisplay.textContent = "PLAYER: " + P;
        }
    }
    else if(player === "paper"){
        if(computer === "scissors"){
            roundDisplay.textContent = roundDisplay.textContent + "\nLose Round";
            CPU++;
            computerDisplay.textContent = "COMPUTER: " + CPU;
        }
        else{      //only option left is paper - rock
            roundDisplay.textContent = roundDisplay.textContent + "\nWin Round";
            P++;
            playerDisplay.textContent = "PLAYER: " + P;
        }
    }
    else if(player === "scissors"){
        if(computer === "rock"){
            roundDisplay.textContent = roundDisplay.textContent + "\nLose Round";
            CPU++;
            computerDisplay.textContent = "COMPUTER: " + CPU;
        }
        else{      //only option left is scissors - paper
            roundDisplay.textContent = roundDisplay.textContent + "\nWin Round";
            P++;
            playerDisplay.textContent = "PLAYER: " + P;
        }
    }
}









