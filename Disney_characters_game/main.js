function navi() {
    document.getElementById('expandingMenu').style.visibility = "visible";
}

function naviOut() {
    document.getElementById('expandingMenu').style.visibility = "hidden";
}

function mouseOver() {
    document.getElementById('mickey').src = "images/mickey_1.jpg";
}

function mouseOut() {
    document.getElementById('mickey').src = "images/Mickey_Mouse.png";
}

function slide() {
    var x;
    x = document.getElementById("likeDisney").value;
    if (x > 7.1) {
        document.getElementById("opinion").innerHTML = "I Love Disney !"
    } else if (x > 4.5) {
        document.getElementById("opinion").innerHTML = "I like Disney.";
    } else if (x > 2.5) {
        document.getElementById("opinion").innerHTML = "It is okay.";
    } else {
        document.getElementById("opinion").innerHTML = "I don't like.";
    }
}