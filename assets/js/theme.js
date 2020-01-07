

const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navigation-top");
const body = document.querySelector("body");
hamburger.onclick = () => {
    console.log("clicked");
    if (hamburger.classList.contains("open")){
        hamburger.classList.remove("open");
        navbar.classList.remove("show");
        body.classList.remove("nav-open");
    }else{
        hamburger.classList.add("open");
        navbar.classList.add("show");
        body.classList.add("nav-open");
    }
}
