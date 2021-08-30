 const clock = document.getElementById('display');
let x = 0;
let timer;
/*secs counter*/

function start() {
    timer=setInterval(()=>{
        x+=10;
        let dateTimer = new Date(x);
       clock.style.color="grey" ;
       
       
     clock.innerHTML = 
          ('0'+dateTimer.getUTCHours()).slice(-2) + ':' +
          ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
          ('0'+dateTimer.getUTCSeconds()).slice(-2) + ':' +
          ('0'+dateTimer.getUTCMilliseconds()).slice(-3,-1);
        }, 10);
      }   
    


function pause(){
    clock.style.color="red";
    clearInterval(timer);
}
 


//click
document.addEventListener("click",(c)=>{
    const j=c.target;
    
    if (j.id==='btn') 
     start()   
    
    if (j.id==="stop") 
        pause();
     if (j.id==="reset") {
         reset()
     }   
     
    
});

         /*touch*/
const touch=document.getElementById("body");
let title=document.getElementById("h");

function eff() {
    touch.style.backgroundColor="black";
    clock.style.color="white";
    title.style.color="white";
    // body...
}
/*touch.addEventListener("dblclick",()=>{
   eff()
})*/