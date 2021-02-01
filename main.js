const hourHand = document.getElementsByClassName('hr')[0];
const minHand = document.getElementsByClassName('min')[0];
const secHand = document.getElementsByClassName('sc')[0];

setInterval(function(){
    setClock();
}, 1000);

function setClock() {
    let date = new Date();
    
    const secondsRatio =  date.getSeconds() / 60;
    const minRatio = (secondsRatio +  date.getMinutes()) / 60;
    
    const hoursRatio = (minRatio + date.getHours())/ 12;
    hourHand.style.setProperty('--rotation', (hoursRatio*360))
        minHand.style.setProperty('--rotation', (minRatio*360))
        secHand.style.setProperty('--rotation', (secondsRatio*360))
}

setClock();