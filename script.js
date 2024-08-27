function getComputerChoice(){
    let $ = ["Rock","Paper","Scissors"]
    alert($[Math.floor(Math.random()*$.length)]);
}
getComputerChoice()