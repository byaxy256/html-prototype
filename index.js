const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minute");
const secondE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");

function updateClock(){
    let h = new Date().gethours();
    let m = new Date().getminutes();
    let s = new Date().getseconds();
    let ampm = "AM"
    
    if (h > 12) {
        h = h-12;
        ampm = "PM";
    }
    
    h = h <10 ?  "0" + h : h;
    m = m <10 ?  "0" + m : m;
    s = s <10 ?  "0" + s : s;
    
    hourE1.innerText = h;
    minuteE1.innerText = m;
    secondE1.innerText = s;
    ampmE1, (innerText = ampm);
    setTimeout(()=>{
        updateClock()
    }, 1000)
}
updateClock();
