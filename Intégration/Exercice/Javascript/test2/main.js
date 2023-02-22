'use strict';

// On défini le propriété de notre cercle que l'on va dessiner dans un objet
let circle = {
    color: "#FF0000",
    radius:10,
    x:20,
    y:20
};

// Notre context et notre Canvas sont définis dans le Scope global pour un accès par nos fonctions
let canvas, canvasDom, ctx;
// let posX = 100, posY = 75;



// Dès que le DOM est chargé on commence
document.addEventListener('DOMContentLoaded', function () {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    
    ctx.fillStyle = "#FF0000";
    // ctx.beginPath();
    // ctx.arc(100, 75, 25, 0, 2 * Math.PI);
    // ctx.stroke();
    // ctx.fill();

    document.addEventListener('keydown', moveCircle);
    displayCircle();
});
    function moveCircle(e) {   
        switch(e.key)
    {
        case 'ArrowRight':
            if (circle.x + circle.radius < canvas.width ) circle.x++;
            break;
        case 'ArrowLeft':
            if (circle.x > 0) circle.x--;
            break;
        case 'ArrowUp':
            if (circle.y > 0) circle.y--;
            break;
        case 'ArrowDown':
            if (circle.y + circle.radius < canvas.height) circle.y++;
            break;
        }
        displayCircle()
    }

        function displayCircle()
            {
                // On vide le Canvas avant de redessiner
                ctx.clearRect(0, 0, canvas.width, canvas.height);
        
                // On dit au contexte que la couleur de remplissage est gris
                ctx.fillStyle = '#DDDDDD';
                // On rempli le Canvas de gris
                // ctx.fillRect(circle.x, circle.y, canvas.width, canvas.height);
        
                // On dit au contexte que la couleur de remplissage est rouge
                ctx.fillStyle = circle.color;
        
                // On trace un nouveau carré rempli (fill) avec cette couleur
                // ctx.fillRect(posX, posY, circle.radius, circle.radius);
                ctx.beginPath();
                ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill();
        }

        