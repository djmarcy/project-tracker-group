let todaysDate = $("#current-day");
let webClock = $("#clock");
//This should create the different parts of the timer: the date and the time.

todaysDate.text(moment().format('ddd MM/DD/y'));

function update(){
    webClock.html(moment().format('H:mm:ss'))
};

// This should run on page open
setInterval(update, 1000);