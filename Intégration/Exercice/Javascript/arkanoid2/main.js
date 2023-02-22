
document.addEventListener("DOMContentLoaded", function(){
    // declaration de variable
    let ball = {
        color: "purple",
        radius:10,
        x: 30,
        y: 450,
        dir: 1
    };
    let paddle = {
        color: "black",
        y: 680,
        x: 600,
        width: 150,
        height: 20,
        dir: 0,
        speed: 1
    }
    let canvasDiv = document.getElementById("canvas");
    let ctx = canvasDiv.getContext("2d");
    let animationId = window.requestAnimationFrame(displayGame);

    // fonction displayGame pour reinitialiser les canvas et afficher la balle
    function displayGame() {
     let hauteurC = canvasDiv.clientHeight;
         animationId = window.requestAnimationFrame(displayGame);

            
        if(ball.y > (hauteurC - ball.radius) || ball.y - ball.radius < 0) {
            ball.dir *= -1; 
        }
        ball.y += 2* ball.dir;
        displayCircle();
        movePaddle();
    }
    displayGame(); 
    
    
    function displayCircle() {
        
        ctx.clearRect(0, 0, canvas.clientWidth,canvas.clientHeight);
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
        ctx.fillStyle = ball.color;
        ctx.fill();
        
        displayPaddle();
    }

    function movePaddle(e) {
        switch(e.key){
        case 'ArrowRight':
            paddle.dir = 1 
            break;
        case 'ArrowLeft':
            paddle.dir = -1;
            break;
    }
    }

    function displayPaddle() {
        // dessiner un rectangle dans le canvas

        ctx.fillStyle = paddle.color;
        ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    }

})