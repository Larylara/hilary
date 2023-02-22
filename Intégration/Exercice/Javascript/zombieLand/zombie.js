// document.addEventListener("DOMContentLoaded", function() {

//     let largeurImg, divZombie, setId;

//     divZombie = document.querySelector("#zombie");
//     largeurImg = -divZombie.clientWidth;

//    setId = setInterval(animation, 500);
   
//     function animation() {
//         largeurImg += 100;
//         divZombie.style.right = `${largeurImg}px`;

//         if(largeurImg === 0) {
//             largeurImg = -divZombie.clientWidth;
//         }
//     }
// });




document.addEventListener("DOMContentLoaded", function() {

    let zombie, pleft = 0, setIntervalId, divZombie;  

    divZombie = document.querySelector("#zombietomb");
    zombie = document.querySelector("#zombie");
    setIntervalId = setInterval(animation, 100);

    function animation() {
        pleft += 100;
        zombie.style.left = `-${pleft}px`;
        if(pleft == zombie.clientWidth) {
            pleft = 0;
        }
    }
})