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
/*
function getPlayerChoice(){
    return prompt("Input your choice:").toLowerCase();
    }    
*/
function playRound(player,computer){
    if(player === computer) console.log("Tie");
    else if(player === "rock"){
        if(computer === "paper"){
            console.log("Lose Round");
            CPU++;
        }
        else{      //only option left is rock - scissors
            console.log("Win Round");
            P++;
        }
    }
    else if(player === "paper"){
        if(computer === "scissors"){
            console.log("Lose Round");
            CPU++;
        }
        else{      //only option left is paper - rock
            console.log("Win Round");
            P++;
        }
    }
    else if(player === "scissors"){
        if(computer === "rock"){
            console.log("Lose Round");
            CPU++;
        }
        else{      //only option left is scissors - paper
            console.log("Win Round");
            P++;
        }
    }
}
/*
function playGame(PTW){ //PTW=Points To Win
    while(PTW > P && PTW > CPU){
        playRound(getPlayerChoice(),getComputerChoice());
    }
    if(P === PTW) console.log("You Win!");
    else console.log("You Lose!");
    console.log("Score:");
    console.log("P= " + P);
    console.log("CPU= " + CPU);
}
*/


//On Load

//global variables
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
    //create buttons for player input
    const container = document.createElement("div");
    const ids = ["rock","paper","scissors"];
    ids.forEach(item => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.id = item;
        container.appendChild(button);
    });
    document.body.appendChild(container);
    const btnq = document.querySelectorAll(".btn");
    btnq.forEach((element) => element.addEventListener("click", (e) => {
        playRound(e.target.id,getComputerChoice());
        if(P == PTW) console.log("You Win!");
        else if(CPU == PTW) console.log("You Lose!");
    }));


})











