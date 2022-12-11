"use strict"

document.addEventListener("DOMContentLoaded",() => {
    // Dropdown 

    let dropdown = document.querySelector("#dropdown");
    dropdown.style.display = "none";

    let about = document.querySelector("#about");
    about.addEventListener("mouseover",function(){
        dropdown.style.display = "block";
    })

    about.addEventListener("mouseleave",function(){
        dropdown.style.display = "none";
    })

    dropdown.addEventListener("mouseover",function(){
        dropdown.style.display = "block";
    })
    dropdown.addEventListener("mouseleave",function(){
        dropdown.style.display = "none";
    })

    let nav = document.querySelector("#nav");
    nav.style.backgroundColor  = "#4230DD";

    window.addEventListener("scroll",function(e){
        if(window.scrollY > 81){
            nav.style.backgroundColor = "rgba(66,48,221,0.8)";
        }else{
            nav.style.backgroundColor  = "#4230DD";
        }
    })
   
})