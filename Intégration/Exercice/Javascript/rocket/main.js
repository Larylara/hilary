'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
    
/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

   



/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
document.addEventListener("DOMContentLoaded", function() {
    let s = 10, chrono, setIntervalId;
    chrono = document.querySelector("#chrono");
    chrono.innerText = `${s}`;
    
    function btnGreen() {
        s--; 
        chrono.innerText = `${s}`;
        if (s == 0) {
            clearInterval(setIntervalId);
            setIntervalId = null;
            document.querySelector("#rocket").classList.add("tookOff");
        }
    }
    document.getElementById("firing-button").addEventListener("click", function() {
        setIntervalId =  setInterval(btnGreen, 1000);
        document.getElementById("firing-button").classList.add("disabled");
        document.querySelector("#rocket").setAttribute("src", "./images/rocket2.gif");
    });

    document.getElementById("#reset").addEventListener("click", function() {
        s = 10;
    });
})