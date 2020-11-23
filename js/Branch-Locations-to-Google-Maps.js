/*
    nav menu icon
*/
window.onload=function(){

    document.getElementById("menu-icon").addEventListener("click", function() {

        var element1 = document.getElementById("hide-or-show");
        element1.classList.toggle("active");

        this.classList.toggle("active");
    })
}

/*
    nav menu icon close
*/
function chicago() {
    document.getElementById("chicago").style.display = "block";
}
function newYork() {
    document.getElementById("new-york").style.display = "block";
}
function brazil() {
    document.getElementById("brazil").style.display = "block";
}
function madrid() {
    document.getElementById("madrid").style.display = "block";
}
function oslo() {
    document.getElementById("oslo").style.display = "block";
}
function moscow() {
    document.getElementById("moscow").style.display = "block";
}
function peking() {
    document.getElementById("peking").style.display = "block";
}
function doteClose() {
    document.getElementById("chicago").style.display = "none";
    document.getElementById("new-york").style.display = "none";
    document.getElementById("brazil").style.display = "none";
    document.getElementById("madrid").style.display = "none";
    document.getElementById("oslo").style.display = "none";
    document.getElementById("moscow").style.display = "none";
    document.getElementById("peking").style.display = "none";
}

/* blog show */

function blogShow(){
    document.getElementById("blog-show").style.display = "grid";
}

/* author show */

function authorShow(){
    document.getElementById("author-show").style.display = "grid";
}