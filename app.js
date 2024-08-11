let userScore=0;
let compScore=0;
let userScorePara=document.querySelector('#user-score')
let compScorePara=document.querySelector('#comp-score')
const choices =document.querySelectorAll('.choice');
const msg=document.querySelector('#msg')
const genCompChoice=()=>{
    // rock paper,scissors
    const option=['rock','paper','scissors'];
    const randomIdx=Math.floor(Math.random() * 3)
    return option[randomIdx];
}
const drawGame=()=>{
    msg.innerText='Game was Draw .Play Again'
    msg.style.backgroundColor="#081b31"
}
const showWinner=(userWins,userChoice,compChoice)=>{
if(userWins){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`You wins! ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor='green'
}else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText=`You Lose ${compChoice} beats your ${userChoice}`
    msg.style.backgroundColor='red'
}
}
const playGame=(userChoice)=>{
    // console.log('user choice =',userChoice);
    const compChoice=genCompChoice();
    // console.log('comp choice',compChoice)
    if(userChoice===compChoice){
        drawGame()
    }else{
        let userWins=true;
        if(userChoice==='rock'){
            //scissors ,paper
            userWins=compChoice==='paper'? false:true
        }else if(userChoice==='paper'){
            //rock ,scissors
            userWins=compChoice==='scissors'?false:true
        }else{
            //rock ,paper
            userWins=compChoice==='rock'?false:true
        }
        showWinner(userWins,userChoice,compChoice)
    }
}
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute('id')
        // console.log('choice was clicked',userChoice)
        playGame(userChoice)
    })
})