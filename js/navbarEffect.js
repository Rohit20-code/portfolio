
window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.boxShadow = "0 0 20px rgba(0,255,255,0.2)";
    }
    else{
        navbar.style.boxShadow = "none";
    }

});
