let gameSeq = [];
let userSeq = [];
let btns = ["yellow","red","green","blue"];
let high=[];
// let max = highestLevel(high);
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener ("keypress", function()
{
    if (started == false){
        console.log("game started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add ("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash")}, 350);

}
function userFlash(btn){
    btn.classList.add ("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")}, 350);

}

function levelUp(){
    userSeq = [];
    level++ ;
    h2.innerText = `Level ${level}`;
    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];
    randomBtn= document.querySelector(`.${randomColor}`)
    gameSeq.push(randomColor);
    gameFlash(randomBtn);

}

function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
        
        if(userSeq.length == gameSeq.length){
        setTimeout(levelUp, 1000);
        }
       
    }
    else {
        // high.push(level-1);
        h2.innerHTML = `Game over!!! <b> your score is ${level-1}.</b><br> please press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
        

        reset();
    }

}

function btnPress(){
let btn = this;
userFlash(btn);

userColor = btn.getAttribute("id");

userSeq.push(userColor);
checkAns(userSeq.length - 1);


}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}

// let highestValue = high.reduce((max,el)=>{
//     if(el>max){
//         return el;
//     }
//     else{
//         return max;
//     }
// });