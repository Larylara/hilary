document.addEventListener("DOMContentLoaded", function () {
    let canvasDiv = document.getElementById('canvas')
    let canvas = document.getElementById('canvas').getContext('2d');
    let posX = 120, posY = 40;
    //Dessiner un rectanglen plein avec fillRect(la position x, la position y, la Largeur, la hauteur)
    canvas.fillStyle = "gray";
    canvas.fillRect(0, 0, canvasDiv.clientWidth, canvasDiv.clientHeight);
    canvas.fillStyle = "black";
    canvas.fillRect(posX, posY, 200, 150);
    document.addEventListener("mousemove", function (event) {
        canvas.clearRect(0, 0, canvasDiv.clientWidth, canvasDiv.clientHeight);
        canvas.fillStyle = "gray";
        canvas.fillRect(0, 0, canvasDiv.clientWidth, canvasDiv.clientHeight);
        canvas.fillStyle = "black";
        posX = event.x; //recuperation de la position abcisse
        posY = event.y; //recuperation de la position ordonné
        canvas.fillRect(posX, posY, 200, 150);
    })

    // document.addEventListener("keyup",function(events){

    //     if(events.key=='ArrowRight'){
    //         canvas.clearRect(posX,posY,20,150)
    //         posX++;
    //     }
    //     if(events.key=='ArrowLeft'){
    //         canvas.clearRect(posX,posY,20,150)
    //         posX--;
    //     }
    //     if(events.key=='ArrowUp'){
    //         canvas.clearRect(posX,posY,20,150)
    //         posY--;
    //     }
    //     if(events.key=='ArrowDown'){
    //         canvas.clearRect(posX,posY,20,150)
    //         posY++;
    //     }
    //     canvas.fillRect(posX, posY, 200,150)

    // })


    // //Vous pouvez modifier la couleur du dessin avec fillStyle(la couleur) avant de dessiner le rectangle avec fillRect
    // canvas.fillStyle="red";
    // canvas.fillRect(0, 140, 200,150)
    // //pour effacer un rectangle dans canvas on utilise la fontion clearRect( la positon x, la position en y la largeur et la hauteur)
    // canvas.clearRect(120,40,20,150)
    // //Ajouter une bordure et definir sa coleur grace à strokeRect et strokeStyle
    // canvas.strokeStyle="blue"
    // canvas.strokeRect(100,20,200,150)
    // //Dessiner un rectangle vide et sans bordure se fait avec rect(a position x, la position y, la Largeur, la hauteur)
    // canvas.rect(200,50,300,200)
    // //Pour y a jouter les bordures on utilisera stroke sans coordonné
    // //canvas.stroke()

    // console.log(canvas);
})