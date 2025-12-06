let bt=document.querySelector("#pick");
let el=document.querySelectorAll(".im");
let user_score=document.querySelector("#user_score");
let comp_score=document.querySelector("#comp_score");
let restart=document.querySelector("#restart");

let userScore=0;
let compScore=0;


const getCompChoice =()=>{
    const options =["rock","paper","scissors"];
    return options[Math.floor(Math.random()*3)];
}

const playGame =(userChoice)=>{
    console.log("user choice = ",userChoice);
    //generate computer choice->modularity
    const compChoice = getCompChoice();
    console.log("computer chice: ",compChoice); 
    if(userChoice===compChoice){
        bt.innerText=` Game was Draw. same choice ${userChoice}`;
        console.log(bt.innerText);
        bt.style.backgroundColor="#FFAF00";
    }
    else if(userChoice==="rock"&&compChoice==="scissors"||userChoice==="paper"&&compChoice==="rock"||userChoice==="scissors"&&compChoice==="paper"){
        bt.innerText=`You won!  ${userChoice} beats ${compChoice} `;
        console.log(bt.innerText);
        userScore++;
        user_score.innerText=userScore;
        bt.style.backgroundColor="#347928";
    }
    else{
        bt.innerText=`You lost.  ${compChoice} beats ${userChoice}`;
        compScore++;
        comp_score.innerText=compScore;
        console.log(bt.innerText);
        bt.style.backgroundColor="#C7253E";
    }

}
 
el.forEach((element)=>{
    element.addEventListener("mouseover",()=>{
        const userChoice=element.getAttribute("id");
        playGame(userChoice);
    });
});

restart.addEventListener("click",()=>{
    comp_score.innerText=0;
    user_score.innerText=0;
    bt.innerText="Pick Your move";
    bt.style.backgroundColor="#FD8B51";
});

