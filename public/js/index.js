"use strict"

document.addEventListener("DOMContentLoaded",() => {
    
    
    
    // Dropdown 

    let dropdown = document.querySelector("#dropdown");
    let aboutHidden = document.querySelector("#aboutHidden");
    let dropdowntbtn = document.querySelector("#dropdownBtn");
    let dropdownHidden = document.querySelector("#dropdownHidden");
    dropdown.style.display = "none";

    aboutHidden.style.display = "none";

    let about = document.querySelector("#about");
    let aboutHid = document.querySelector("#aboutHid");


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




    aboutHid.addEventListener("mouseover",function(){
        aboutHidden.style.display = "block";
    })

    aboutHid.addEventListener("mouseleave",function(){
        aboutHidden.style.display = "none";
    })

    aboutHid.addEventListener("mouseover",function(){
        aboutHidden.style.display = "block";
    })
    aboutHid.addEventListener("mouseleave",function(){
        aboutHidden.style.display = "none";
    })

    aboutHidden.addEventListener("mouseenter",function(){
        aboutHidden.style.display ="block";
    })
    aboutHidden.addEventListener("mouseleave",function(){
        aboutHidden.style.display ="hidden";
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

    let state = 0;
    dropdowntbtn.addEventListener("click",function(){
        if(state === 0){
            dropdownHidden.style.display = "block"
            state = 1
        }else{
            dropdownHidden.style.display = "none";
            state = 0
        }
       
    })
   
})