function contActive() {
    var selector = document.getElementById("cont-colors");
    var selector2 = document.getElementById("btn-elemento");
    selector.classList.toggle("active");
    selector2.classList.toggle("active");
}

function bgBlue() {
    var selector = document.getElementById("body");
    selector.className = '';
    selector.classList.toggle("blue");
}

function bgYellow() {
    var selector = document.getElementById("body");
    selector.className = '';
    selector.classList.toggle("yellow");
}

function bgOriginal() {
    var selector = document.getElementById("body");
    selector.className = '';
    selector.classList.toggle("original");
}

function bgVerde() {
    var selector = document.getElementById("body");
    selector.className = '';
    selector.classList.toggle("verde");
}

function bgNaranja() {
    var selector = document.getElementById("body");
    selector.className = '';
    selector.classList.toggle("naranja");
}


AOS.init();