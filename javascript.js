let computerSelection;
let playerSelection;

for (i = 1; i < 6; i++) {   
    let randomNumber = Math.random() * 100;
    computerSelection = computerPlay(randomNumber);

    playerSelection = prompt("Elige: piedra, papel o tijeras").toLowerCase();
    console.log("RONDA " + i);

    function computerPlay(randomNumber) { 
        if (randomNumber <= 33) {
            return piedra = "piedra";
            
        } else if (randomNumber <= 66) {
            return papel = "papel";
            
        } else {
            return tijeras = "tijeras";
        };
    };

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === "piedra") { //Jugador elige Piedra
            if (computerSelection === "tijeras") {
                console.log("Tu Ganas! Piedra vence a Tijeras");
            } else if (computerSelection === "papel") {
                console.log("Tu Pierdes! Papel vence a Piedra");
            } else {
                console.log("Empate");
            };
        } else if (playerSelection === "papel") { //Jugador elige Papel
            if (computerSelection === "piedra") {
                console.log("Tu Ganas! Papel vence a Piedra");
            } else if (computerSelection === "tijeras") {
                console.log("Tu Pierdes! Tijeras vence a Papel");
            } else {
                console.log("Empate");
            };
        } else if (playerSelection === "tijeras") { //Jugador elige Tijeras
            if (computerSelection === "papel") {
                console.log("Tu Ganas! Tijeras vence a Papel");
            } else if (computerSelection === "piedra") {
                console.log("Tu Pierdes! Piedra vence a Tijeras");
            } else {
                console.log("Empate");
            };
        };

    };

    //Se juega la ronda
    playRound(playerSelection, computerSelection);
};