let horizontalUngerLine=document.getElementById("horizontal-underline");
let horizontalMenus=document.querySelectorAll("nav:first-child a");
let verticalBar = document.getElementById("vertical-underline");
let verticalMenus = document.querySelectorAll("nav:nth-child(2) a");

horizontalMenus.forEach(menu=>menu.addEventListener("click", (e)=>horizontalIndicator(e)));
verticalMenus.forEach(menu=>menu.addEventListener("click", (e)=>verticalIndicator(e)));

function horizontalIndicator(e){
    horizontalUngerLine.style.left = e.currentTarget.offsetLeft + "px";
    horizontalUngerLine.style.width = e.currentTarget.offsetWidth + "px";
    horizontalUngerLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}

function verticalIndicator(e){
    verticalBar.style.left = e.currentTarget.offsetLeft + "px";
    verticalBar.style.width = e.currentTarget.offsetWidth + "px"
    verticalBar.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}