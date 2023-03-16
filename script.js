let user=document.getElementById("x");
let computer=document.getElementById("y");
let results=document.getElementById("r");
let userChoice;
let paperImage=document.getElementById("paper-image")
let rockImage=document.getElementById("rock-image")
let scissorsImage=document.getElementById("scissors-image")
let paperImage2=document.getElementById("paper-image2")
let rockImage2=document.getElementById("rock-image2")
let scissorsImage2=document.getElementById("scissors-image2")
const computerChoices = ["Rock","Paper","Scissors"];
let play = (userChoice) => {
    results.innerText = ""
   
    if (userChoice=="Rock"){
        rockImage.style.display="flex"
        paperImage.style.display="none"
        scissorsImage.style.display="none"
    } else if (userChoice=="Paper"){
        rockImage.style.display="none"
        paperImage.style.display="flex"
        scissorsImage.style.display="none"
    } else if(userChoice=="Scissors"){
        rockImage.style.display="none"
        paperImage.style.display="none"
        scissorsImage.style.display="flex"
    }

    let comp = computerChoices[Math.floor(Math.random()*3)]
    if (comp == "Rock"){
        rockImage2.style.display="flex"
        paperImage2.style.display="none"
        scissorsImage2.style.display="none"
    } else if (comp == "Paper"){
        rockImage2.style.display="none"
        paperImage2.style.display="flex"
        scissorsImage2.style.display="none"
    } else if(comp == "Scissors"){
        rockImage2.style.display="none"
        paperImage2.style.display="none"
        scissorsImage2.style.display="flex"
    }

    if (userChoice == comp){
        results.innerText = "It's a draw!"
    } else if (userChoice=="Rock" && comp=="Paper"){
        results.innerText = "You Lose!"
    } else if (userChoice=="Rock" && comp=="Scissors"){
        results.innerText = "You Win!"
    } else if (userChoice=="Paper" && comp=="Scissors"){
        results.innerText = "You Lose!"
    } else if (userChoice=="Paper" && comp=="Rock"){
        results.innerText = "You Win!"
    } else if (userChoice=="Scissors" && comp=="Rock"){
        results.innerText = "You Lose!"
    } else if (userChoice =="Scissors" && comp=="Paper"){
        results.innerText = "You Win!"
    }

}
