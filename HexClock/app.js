function setBgColour(){
    var BgColour = getTimeString();
    document.body.style.background = '#'+BgColour;
    document.getElementById('hex-colour').innerText = '#'+BgColour;
}

function setTime(){
    var timeString = getTimeString();
    timeString = timeString.slice(0,2) + ' : ' + timeString.slice(2,4)+ ' : ' + timeString.slice(4,6);
    document.getElementById('clock').innerText = timeString;

}

function getTimeString(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if(hours.toString().length == 1)
        hours = '0'+hours;
    if(minutes.toString().length == 1)
        minutes = '0'+minutes;
    if(seconds.toString().length == 1)
        seconds = '0'+seconds;

    return +hours+''+minutes+''+seconds;
}

setInterval(() => { 
   setBgColour();
   setTime();
}, 1000);
