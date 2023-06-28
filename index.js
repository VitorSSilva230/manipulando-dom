let imgLight = "img/desenvolvedor_light.png";
let imgDark = "img/desenvolvedor_dark.png";

let ballLight = "img/circulo_light.png" ;
let ballDark = "img/circulo_dark.png";

let lightSectionColor = "#DEE2E5";
let darkSectionColor = "blue";

let logoLight = "img/lobo_light.png";
let logoDark = "img/lobo_dark.png";

let headerLight = "white";
let headerDark = "black";

let titleLight = "white";
let titleDark = "black";

let descriptionLight = "white";
let descriptionDark = "black";

function trocarTema() {
    
    document.getElementById("dev").src = imgLight;
    let trocaDev = imgDark;
    imgDark = imgLight;
    imgLight = trocaDev;


    document.getElementById("ball").src = ballLight;
    let trocaBall = ballDark;
    ballDark = ballLight;
    ballLight = trocaBall;

    document.getElementById("intro").style.backgroundColor = darkSectionColor;
    let trocarSecton = lightSectionColor;
    lightSectionColor = darkSectionColor;
    darkSectionColor = trocarSecton;

    document.getElementById("logo").src = logoDark;
    let trocaLogo = logoLight;
    logoLight = logoDark;
    logoDark = trocaLogo;

    document.getElementById("header").style.backgroundColor= headerLight;
    let trocaHeader = headerDark;
    headerDark = headerLight;
    headerLight = trocaHeader;

    document.getElementById("title").style.color= titleLight;
    let trocaTitle = titleDark;
    titleDark = titleLight;
    titleLight = trocaTitle;

    document.getElementById("description").style.color= descriptionLight;
    let trocaDescription = descriptionDark;
    descriptionDark = descriptionLight;
    descriptionLight = trocaDescription;


}