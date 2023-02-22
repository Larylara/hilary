document.addEventListener("DOMContentLoaded", function() {
    let chrono, m= 0, s = 0, t = 0;
    document.querySelector("#chrono").innerText = m + " "  + ":" + " " + s + " " + ":" + " " + t;
    function myFunction() {
        t++;
        if(t >= 60) {
            t = 0;
            s++;
        }
        if(s >= 60) {
            s = 0;
            m++;
        }
        document.querySelector("#chrono").innerText = m + " "  + ":" + " " + s + " " + ":" + " " + t  ;
    }
    function fonction() {
        if(chrono) {
            clearInterval(chrono);    
            chrono = null;
            document.getElementById("first").innerText = "Start";
        }
        else {
            chrono = setInterval( myFunction, 17);
            document.getElementById("first").innerText = "Stop";
        }
    }
    function stop() {
        m = 0;
        s = 0;
        t = 0;
        document.querySelector("#chrono").innerText = m + " " + ":" + " " + s + " " + ":" + " " + t;
        clearInterval(chrono);
    }
    document.getElementById("first").addEventListener("click", fonction);
    document.getElementById("first").style = "padding: 1rem";
    document.getElementById("second").addEventListener("click", stop);
    document.getElementById("second").style = "padding: 1rem";
})