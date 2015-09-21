/**
 * Created by Dineile on 9/19/2015.
 */

var Timer;
var TotalSeconds;


function CreateTimer(TimerID, Time) {
    Timer = document.getElementById(TimerID);
    TotalSeconds = Time;

    UpdateTimer()
    window.setTimeout("Tick()", 1000);
}

function Tick() {
    if (TotalSeconds <= 0) {
        alert("Time's up! Submit answers.")
        return;
    }

    TotalSeconds -= 1;
    UpdateTimer()
    window.setTimeout("Tick()", 1000);
}

function UpdateTimer() {
    var Seconds = TotalSeconds;


    var Minutes = Math.floor(Seconds / 60);
    Seconds -= Minutes * (60);


    var TimeStr = LeadingZero(Minutes) + ":" + LeadingZero(Seconds);

    Timer.innerHTML = TimeStr;
}


function LeadingZero(Time) {

    return (Time < 10) ? "0" + Time : + Time;

}