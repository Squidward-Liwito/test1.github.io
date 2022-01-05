var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {

    if (character.classList != "animate") { character.classList.add("animate"); }
    setTimeout(function() {
        character.classList.remove("animate");
    }, 500);
}
x = 1;

function printx() {
    x = x + 1;
    console.log(x);
}

// var checkDead = setInterval(function() {
//     var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//     var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("Left"));
//     if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
//         block.style.animation = "none";
//         block.style.display = "none";
//         alert("u lose!");
//     }
// }, 10);