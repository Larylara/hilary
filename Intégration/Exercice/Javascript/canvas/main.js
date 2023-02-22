document.addEventListener("DOMContentLoaded", function() {

    let canvas = document.querySelector("#canvas").getContext("2d");

    canvas.fillStyle = "rgb(89, 145, 202)";
    canvas.fillRect(10, 10, 200, 50);
    canvas.fillRect(250, 10, 200, 50);
    canvas.fillRect(500, 10, 200, 50);
    canvas.fillRect(750, 10, 200, 50);

    canvas.fillStyle = "rgb(89, 145, 202)";
    canvas.fillRect(10, 80, 200, 50);
    canvas.fillRect(250, 80, 200, 50);
    canvas.fillRect(500, 80, 200, 50);
    canvas.fillRect(750, 80, 200, 50);

    canvas.fillStyle = "rgb(89, 145, 202)";
    canvas.fillRect(10, 150, 200, 50);
    canvas.fillRect(250, 150, 200, 50);
    canvas.fillRect(500, 150, 200, 50);
    canvas.fillRect(750, 150, 200, 50);

    console.log(canvas);
    // canvas.addEventListener("click", function() {
    // })
})