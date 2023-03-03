const overlay = document.getElementById("overlay");
const circle = document.getElementById("circle");
const square = document.getElementById("square");
const triangle = document.getElementById("triangle")
const circle2 = document.getElementById("circle2");
const square2 = document.getElementById("square2");
const triangle2 = document.getElementById("triangle2")
const message = document.getElementById("message")

function showOverlay() {
    const form = document.querySelector('#shape-form');
    const elements = form.querySelectorAll('input');
    let formCompleted = true;

    elements.forEach(element => {
        if (element.hasAttribute('required') && !element.value) {
            formCompleted = false;
        } else if (element.hasAttribute('pattern')) {
            const pattern = new RegExp(element.getAttribute('pattern'));
            if (!pattern.test(element.value)) {
                allCompleted = false;
            }
        }
    });

    if(formCompleted) {
        overlay.style.display = "block";
        circle.style.display = "block";
        square.style.display = "block";
        triangle.style.display = "block";
        circle2.style.display = "block";
        square2.style.display = "block";
        triangle2.style.display = "block";
        message.style.display = "block";
    }
}