// const tableau = [
//     ["Silvinoh", "Sahid", "Serge", "Hilary", "Armel", "Carlton"],
//     ["red", "yellow", "blue", "green", "black", "indigo"],
//     {
//         sel: "25kg",
//         tomates: 10,
//         huile: "7l",
//         riz: "15kg",
//         eau: "2l",
//         piment: 29
//     },
//     [
//         ["Lamborghini", "Tesla", "BMW", "Ferrari", "Toyota", "Mercedes-Benz"],
//         ["LouisVitton", "Gucci", "Prada", "Adidas", "Jordan", "Nike"]
//     ]
// ]

// for (let key in tableau) {
//     // console.log(tableau[key]);
//     for (let value in tableau[key]) {
//         // console.log(tableau[key][value]);
//     if (typeof tableau[key][value] === "object") {
//         for(let ind in tableau[key][value]) {
//             console.log(tableau[key][value][ind]);
//         }
//     }
//     else
//         console.log(tableau[key][value]);
// }
// }



let x = 0;
function move() {
    x++
    if (x == 1) {
        document.querySelector(".red").style = "left: 35rem";
    }
    else if (x == 2){
        document.querySelector(".red").style = "top: 18rem; left: 35rem";
    }
    else if (x == 3){
        document.querySelector(".red").style = "left: 3; top: 18rem";
    }
    else if (x == 4){
        document.querySelector(".red").style = "top: 0, left: 0";
        x = 0;
    }
}

function hide(){
    document.querySelector(".modal").style = "display: none"
}

document.getElementById("moveDiv").addEventListener("click", move);
document.getElementById("hideModal").addEventListener("click", hide);

document.addEventListener("DOMContentLoaded", function() {
    let chrono,m= 0, s = 0, t = 0;
    function myFunction() {
        t++;
        if(t >= 59) {
            t = 0;
            s++;
        }
        if(s >= 59) {
            s = 0;
            m++;
        }
        document.querySelector("#chrono").innerText = m + " "  + ":" + " " + s + " " + ":" + " " + t  ;
    }
    function fonction() {
        if(chrono) {
            clearInterval(chrono);    
            chrono = null;
        }
        else {
            chrono = setInterval( myFunction, 17);
        }
    }
    function stop() {
        m = 0;
        s = 0;
        t = 0;
        document.querySelector("#chrono").innerText = m + " " + ":" + " " + s + " " + ":" + " " + t;
        clearInterval(chrono);
    }
    chrono = setInterval( myFunction, 17);
    document.getElementById("first").addEventListener("click", fonction);
    document.getElementById("second").addEventListener("click", stop);
})