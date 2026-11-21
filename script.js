


//On Load

//global variables
let playerDisplay;
let computerDisplay;
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
    const btnq = document.querySelectorAll(".btn");
    btnq.forEach((element) => element.addEventListener("click", (e) => {
        playRound(e.target.id,getComputerChoice());
        if(P == PTW) console.log("You Win!");
        else if(CPU == PTW) console.log("You Lose!");
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
    if(player === computer) console.log("Tie");
    else if(player === "rock"){
        if(computer === "paper"){
            console.log("Lose Round");
            CPU++;
            computerDisplay.textContent = "COMPUTER: " + CPU;
        }
        else{      //only option left is rock - scissors
            console.log("Win Round");
            P++;
            playerDisplay.textContent = "PLAYER: " + P;
        }
    }
    else if(player === "paper"){
        if(computer === "scissors"){
            console.log("Lose Round");
            CPU++;
            computerDisplay.textContent = "COMPUTER: " + CPU;
        }
        else{      //only option left is paper - rock
            console.log("Win Round");
            P++;
            playerDisplay.textContent = "PLAYER: " + P;
        }
    }
    else if(player === "scissors"){
        if(computer === "rock"){
            console.log("Lose Round");
            CPU++;
            computerDisplay.textContent = "COMPUTER: " + CPU;
        }
        else{      //only option left is scissors - paper
            console.log("Win Round");
            P++;
            playerDisplay.textContent = "PLAYER: " + P;
        }
    }
}









