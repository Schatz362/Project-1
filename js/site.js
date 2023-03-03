var ball = document.getElementById("ball");

function balls() {
    function loop() {
        ball.style.animation = "bounce 2s";
        ball.addEventListener("animationend", function() {
            ball.style.animation = "";
                setTimeout(loop, 100);
        });
    }
    loop();
}