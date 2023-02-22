document.addEventListener("DOMContentLoaded", function() {
    let divBlue, countX = 0, countY = 0, pLeft = 1, pTop = 1, screenWidth, screenHeight, ballId;
    window.requestAnimationFrame(movement);
    ballId = window.requestAnimationFrame(movement);
    function movement() {
        window.requestAnimationFrame(movement);
        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;
        divBlue = document.querySelector("#ball");

        if(countX > screenWidth - (parseInt(divBlue.clientWidth)) || countX < 0) {
            pLeft *= -1;
        }
        countX += 4 * pLeft;
        divBlue.style.left = `${countX}px`;
        if(countY > screenHeight - (parseInt(divBlue.clientHeight)) || countY < 0) {
            pTop *= -1;
        }
        countY += 4 * pTop;
        divBlue.style.top = `${countY}px`;

        document.addEventListener("click", function () {
            if(ballId) {
                cancelAnimationFrame(ballId);
                ballId = null;
            }
            else {
                ballId = window.requestAnimationFrame(movement); 
            }
        })
    }
})