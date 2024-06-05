console.log('hi');

const options =["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)]
    
    return choice;
}

function checkwinner(playerselection , computerselection){
    if (playerselection==computerselection){
        return "tie";
    }
    else if (
        (playerselection =="rock" && computerselection =="scissors") ||
        (playerselection =="scissors" && computerselection =="paper") ||
        (playerselection =="paper" && computerselection =="rock")
    ){
        return "player";
    }
    else {
        return "computer"
    }
}

function playround(playerselection , computerselection){
    const result= checkwinner (playerselection , computerselection);
    if (result == "tie" ){
        return "its a tie"
    }
    else if (result == "player"){
        return `you win ${playerselection} beats ${computerselection}`
    }
    else {
        return ` you lose ${computerselection} beats ${playerselection}`
    } 
}

function getplayerchoice(){
    let validatedinput = false;
    while(validatedinput ==false){
        const choice = prompt("rock  paper scissors");
        if(choice == null){
            continue;
        }
        const choiceinlower = choice.toLowerCase();
        if(options.includes(choiceinlower)){
            validatedinput = true;
            return choiceinlower
        }

    }

}

function game(){
    let scoreplayer = 0;
    let scorecomputer = 0;
    for (let i=0; i<5; i++ ){
        const playerselection = getplayerchoice();
        const computerselection=getComputerChoice();
        console.log(playround(playerselection , computerselection))
        console.log("-----")
        if(checkwinner(playerselection, computerselection) == "player"){
           scoreplayer++ ;
        }
        else if(checkwinner(playerselection,computerselection) =="computer"){
            scorecomputer++;
        }
        
            
    }
    console.log("game over")
    if(scoreplayer > scorecomputer){
        console.log(" player is the winner")
    }
    else if (scoreplayer < scorecomputer){
        console.log("computer is the winner")
    }
    else {
        console.log("we have a tie")
    }
}
game()

