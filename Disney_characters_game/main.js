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

function characterInfo() {

    var y = Math.floor((Math.random() * 5) + 1);
    document.getElementById("herox").src = "images/hero" + y + ".jpg";

    var z = document.getElementById("choice");
    var i = (z.selectedIndex) + 1;


    if (i == y)
        document.getElementById("demo").innerHTML = "<strong>You Win!</strong>";
    else {
        document.getElementById("demo").innerHTML = "<strong>You Lose!</strong>";
    }

    if (y == 1) {
        document.getElementById("name").innerHTML = "Lightning McQueen";
        document.getElementById("name1").innerHTML = "Lightning McQueen";
        document.getElementById("movie").innerHTML = "Cars";
        document.getElementById("bestFriend").innerHTML = "Mater";
        document.getElementById("nemesis").innerHTML = "Chick Hicks";
        document.getElementById("song").innerHTML = "Life is a Highway";
        document.getElementById("lyrics").innerHTML = "Life's like a road that you travel on<br> When theres one day here, and the next day gone<br>Sometimes you bend, sometimes you stand<br> Sometimes you turn your back to the wind";
    } else if (y == 2) {
        document.getElementById("name").innerHTML = "Buzz Astral";
        document.getElementById("name1").innerHTML = "Buzz Astral";
        document.getElementById("movie").innerHTML = "Toy Story";
        document.getElementById("bestFriend").innerHTML = "Sheriff Woody Pride";
        document.getElementById("nemesis").innerHTML = "Emperor Zurg";
        document.getElementById("song").innerHTML = "You've Got a Friend in Me";
        document.getElementById("lyrics").innerHTML = "You've got a friend in me <br>You've got a friend in me <br>When the road looks rough ahead<br>And you're miles and miles<br>From your nice warm bed<br>You just remember what your old pal said";
    } else if (y == 3) {
        document.getElementById("name").innerHTML = "Stich";
        document.getElementById("name1").innerHTML = "Stich";
        document.getElementById("movie").innerHTML = "Lilo & Stich";
        document.getElementById("bestFriend").innerHTML = "Lilo";
        document.getElementById("nemesis").innerHTML = "Captain Gantu";
        document.getElementById("song").innerHTML = "Hawaiian Roller Coaster Ride";
        document.getElementById("lyrics").innerHTML = "There's no place I'd rather be<br>Then on my surfboard out at sea<br>Lingering in the ocean blue<br>And If I had one wish come true<br>I'd surf till the sun sets";
    } else if (y == 4) {
        document.getElementById("name").innerHTML = "Maui";
        document.getElementById("name1").innerHTML = "Maui";
        document.getElementById("movie").innerHTML = "Moana";
        document.getElementById("bestFriend").innerHTML = "Mini Maui";
        document.getElementById("nemesis").innerHTML = "Tamatoa";
        document.getElementById("song").innerHTML = "You're Welcome";
        document.getElementById("lyrics").innerHTML = "So what can I say except you're welcome<br>For the islands I pulled from the sea<br>There's no need to pray, it's okay<br>You're welcome<br>Ha, I guess it's just my way of being me<br>You're welcome<br>You're welcome";
    } else {
        document.getElementById("name").innerHTML = "Aladdin";
        document.getElementById("name1").innerHTML = "Aladdin";
        document.getElementById("movie").innerHTML = "Aladdin";
        document.getElementById("bestFriend").innerHTML = "Abu";
        document.getElementById("nemesis").innerHTML = "Jafar";
        document.getElementById("song").innerHTML = "Arabian Nights";
        document.getElementById("lyrics").innerHTML = "Oh, imagine a land, it's a faraway place<br>Where the caravan camels roam<br>Where you wander among every culture and ongue <br>It's chaotic, but, hey, it's home";

    }
}
