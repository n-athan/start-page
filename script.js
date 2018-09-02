// Get current time
function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    m=checkTime(m);
    document.getElementById('txt').innerHTML=h+' '+m;
    t=setTimeout('startTime()',500);
}
// add a zero in front of numbers<10
function checkTime(i) {
    if (i<10) {
        i="0" + i;
    }
    return i;
}
// Get correct greeting for time of day
function checkPartday() {
    var h= new Date().getHours();
    var g="dag";
    if (h<6) {
        g = "nacht";
    } else if (h<12) {
        g = "morgen";
    } else if (h<18) {
        g = "middag";
    } else {
        g = "avond";
    }
    document.getElementById("partday").innerHTML = g;
}
// Get day, date, month in dutch
function dayMonth() {
    var options = {weekday: 'long', day: 'numeric', month: 'long' };
    var prnDt = new Date().toLocaleDateString('nl-nl', options);
    document.getElementById("day").innerHTML = prnDt;
}