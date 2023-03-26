let clock=document.querySelector(".clock");
let myClock;
const clockfunc =()=>{
    let date =new Date();
    myClock=date.toLocaleTimeString();
    clock.innerHTML=myClock;
}
let setTime = setInterval(clockfunc,1000);