let cursor = document.getElementsByClassName("cursor");
let posX = 0;
let posY = 0;
document.addEventListener("DOMContentLoaded", () => {
    document.body.onmousemove = function (e) {
        posX = e.clientX + 4 + "px";
        posY = e.clientY + 4 + "px";
        cursor[0].style.display = "block";
        cursor[0].style.left = posX;
        cursor[0].style.top = posY;
        console.log(posX);
        console.log(posY);
    };
});
