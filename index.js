let imgLight = "img/desenvolvedor.png";
let imgDark = "img/desenvolvedor_dark.png";

let ballLight = "img/circulo.png" ;
let ballDark = "img/circulo_dark.png";

let lightSectionColor = "#DEE2E5";
let darkSectionColor = "blue";

function trocarTema() {
    
    document.getElementById("dev").src = imgDark;
    let trocaDev = imgLight;
    imgLight = imgDark;
    imgDark = trocaDev;


    document.getElementById("ball").src = ballDark;
    let trocaBall = ballLight;
    ballLight = ballDark;
    ballDark = trocaBall;

    document.getElementById("intro").style.backgroundColor = darkSectionColor;

    let trocarSecton = lightSectionColor;
    lightSectionColor = darkSectionColor;
    darkSectionColor = trocarSecton;

}