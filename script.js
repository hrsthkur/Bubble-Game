var timer = 60;
var score = 0;
var rn = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
    getNewHit()
    makebubble();
}
function makebubble(){
    var clutter = ""

for(var i=1;i<=220;i++){
    clutter+=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`;

}

document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer(){
   var timerr =  setInterval(() => {
        if(timer>0){
        timer--;
       document.querySelector("#timervalue").innerHTML = timer;
        }
        else{
            clearInterval(timerr);
        }
    
    }, 1000);
    
}

function getNewHit(){
    rn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rn 
}


document.querySelector("#pbtm").addEventListener("click",(dets)=>{
var clicknum = Number(dets.target.textContent);


if(clicknum === rn) 
    {
       
        increaseScore();
    }

})
runTimer();
makebubble();
getNewHit()