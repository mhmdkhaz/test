// start in nav
let aperentnav = document.getElementById("nav");
let nav = document.querySelectorAll("ul li");
/*
function navbar() {
    for(let i=0 ;  i <= nav.length ; i++){
        nav[i].onclick = function () {
            nav[i].style.color="#4b8ef1";
        }
    }
}
navbar();
*/

window.onscroll = function () {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        aperentnav.style.backgroundColor = "#fff";
    }
    else{
        aperentnav.style.backgroundColor = "transparent";
    }
}