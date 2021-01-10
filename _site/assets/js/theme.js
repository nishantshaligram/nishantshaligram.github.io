// Hamburger Click - Navigation Open
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

// Theme mode switch click - Change theme
const settings = localStorage;
const theme_switch = document.getElementById("theme-switch");
const html = document.querySelector("html");
getThemeSettings = () => {
    var result = settings.getItem("theme-mode");
    return result;
}
setThemeSettings = (value) => {
    settings.setItem("theme-mode",value);
}
window.onload = () => {
    const theme_mode = getThemeSettings();
    if( theme_mode === "light"){
        if(html.classList.contains("bg-dark")){
            html.classList.remove("bg-dark");
            theme_switch.checked = false;
        }
    }else if( theme_mode === "dark" ){
        if(!html.classList.contains("bg-dark")){
            html.classList.add("bg-dark");
            theme_switch.checked = true;
        }
    }
}
theme_switch.onchange = (value) => {
    if(html.classList.contains("bg-dark")){
        html.classList.remove("bg-dark");
        setThemeSettings("light");
    }else {
        html.classList.add("bg-dark");
        setThemeSettings("dark");
    }
}