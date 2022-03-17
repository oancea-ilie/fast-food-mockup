let navToggle = document.querySelector(".nav-toggle");

let bar = document.querySelector(".fa-bars");

let close = document.querySelector(".fa-times");

let headerContainer = document.querySelector("header .container");

let toggle = false;

let corectie = ()=>{
    if(innerWidth<1024){
        logo.src = "img/logo-2.png";
    }
    if(innerWidth>=1024){
        logo.src = "img/logo-1024.png";
    }
    if(innerWidth>=768 && toggle == true){
        toggle = false;
        bar.classList.remove("fa-times");
        bar.classList.add("fa-bars");
        navToggle.style.display = "none";
        toggle = false;
        headerContainer.style.borderBottom= "none";
    }
}
bar.addEventListener("click",()=>{

    if(toggle == false){
        navToggle.style.display = "flex";
        bar.classList.remove("fa-bars");
        bar.classList.add("fa-times");
        toggle = true;
        headerContainer.style.borderBottom = " 1px solid #cacaca83";
    }else{
        bar.classList.remove("fa-times");
        bar.classList.add("fa-bars");
        navToggle.style.display = "none";
        toggle = false;
        headerContainer.style.borderBottom= "none";
    }
});

let logo = document.querySelector(".logo");
//  schimb imagine
// corectie resize cand bar este deschis
window.addEventListener("resize", corectie);
corectie();