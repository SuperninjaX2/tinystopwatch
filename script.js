 const clock = document.getElementById('display');
let x = 0;
let timer;
/*secs counter*/

function start() {
    timer=setInterval(()=>{
        x+=10;
        let dateTimer = new Date(x);
        
     clock.innerHTML = 
          ('0'+dateTimer.getUTCHours()).slice(-2) + ':' +
          ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
          ('0'+dateTimer.getUTCSeconds()).slice(-2) + ':' +
          ('0'+dateTimer.getUTCMilliseconds()).slice(-3,-1);
        }, 10);
      }   
    


function pause(){
    clearInterval(timer);
}
 


//click
document.addEventListener("click",(c)=>{
    const j=c.target;
    
    if (j.id==='btn') 
     start()   
    
    if (j.id==="stop") 
        pause();
    
});

         