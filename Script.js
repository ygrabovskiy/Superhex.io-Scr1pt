// ==UserScript==
// @name         Superhex.io Scr1pt
// @namespace    SuperhexIoScr1pt
// @version      BETA_1.1
// @homepageURL  https://github.com/Truebamateo/Superhex.io-Scr1pt
// @icon         http://superhex.io/img/fav_icon_1.png
// @description  Script para Superhex.io
// @author       Truebamateo
// @match        http://superhex.io/*
// @grant        none
// ==/UserScript==


var Text1TBM = window.localStorage.getItem("Text1TBM");

if(Text1TBM)
   {
    document.getElementById("button-play-text").innerText = Text1TBM;
   }

document.onkeydown = function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===187){
        superhex.aipComplete();
    }
};

goGitHub = function()
{
  window.open("https://github.com/Truebamateo/Superhex.io-Scr1pt");
};

changeQ = function()
{
    var QualityPrompt = window.prompt("Calidad del juego:\n0.5: Low (Baja)\n0.75: Medium (Media)\n1: High (Alta)");
    QualityPrompt = Number(QualityPrompt);
    if(QualityPrompt > 2.7)alert("ADVERTENCIA: Establecer la calidad mayor a 2.7 puede causar problemas");
    if(QualityPrompt < 0.1 && QualityPrompt > 0)alert("ADVERTENCIA: Establecer la calidad menor a 0.1 puede causar problemas");
    if(QualityPrompt.toString() == "NaN")
    {
        alert("Calidad inválida. Solo puedes insertar números.\nEjemplo: 1.2");
    } else if(QualityPrompt === 0) {
        alert("Calidad no cambiada.");
    } else {
        superhex.setQuality(QualityPrompt);
        alert("Calidad cambiada a: " + QualityPrompt);
    }
};

changeS = function()
{
    var SkinPrompt = window.prompt("ID de la Skin: (Si te abre una página, cierrala)");
    SkinPrompt = Number(SkinPrompt);
    if(SkinPrompt.toString() == "NaN")
    {
        alert("ID de la skin inválida. Solo puedes insertar números.");
    } else if(SkinPrompt === 0) {
        alert("Skin no cambiada.");
    } else {
        superhex.selectSkin(SkinPrompt);
        alert("Skin cambiada a: " + SkinPrompt);
    }
};

teclasAc = function()
{
    alert("Teclas con funciones:\n+ (*) : Inicia el juego sin el anuncio.");
};

changeT1 = function()
{
  var Text1Prompt = window.prompt("Texto del botón Play:");
  if(Text1Prompt === null)
    {
        alert("Texto del botón Play no cambiado.");
    } else {
        document.getElementById("button-play-text").innerText = Text1Prompt;
        window.localStorage.setItem("Text1TBM", Text1Prompt);
        alert("Texto del botón Play cambiado a: " + Text1Prompt);
    }
};

var scrText1 = document.createElement("h2");
scrText1.setAttribute("style", "color: white; position: fixed; top: 50px; left: 30px;");
scrText1.innerText = "Superhex.io Scr1pt vBETA 1.1";
document.getElementById("homepage").appendChild(scrText1);

var btn = document.createElement("Button");
btn.setAttribute("style", "position: fixed; top: 110px; left: 30px; height:20px; width:140px;");
btn.setAttribute("class", "green");
btn.setAttribute("type", "button");
btn.innerText = "GitHub";
btn.setAttribute("onclick", "goGitHub();");
document.getElementById("homepage").appendChild(btn);

var btn2 = document.createElement("Button");
btn2.setAttribute("style", "position: fixed; top: 140px; left: 30px; height:20px; width:140px;");
btn2.setAttribute("class", "green");
btn2.setAttribute("type", "button");
btn2.innerText = "Cambiar calidad";
btn2.setAttribute("onclick", "changeQ();");
document.getElementById("homepage").appendChild(btn2);

var btn3 = document.createElement("Button");
btn3.setAttribute("style", "position: fixed; top: 170px; left: 30px; height:20px; width:140px;");
btn3.setAttribute("class", "green");
btn3.setAttribute("type", "button");
btn3.innerText = "Cambiar skin (BETA)";
btn3.setAttribute("onclick", "changeS();");
document.getElementById("homepage").appendChild(btn3);

var btn4 = document.createElement("Button");
btn4.setAttribute("style", "position: fixed; top: 200px; left: 30px; height:20px; width:140px;");
btn4.setAttribute("class", "green");
btn4.setAttribute("type", "button");
btn4.innerText = "Teclas con funciones";
btn4.setAttribute("onclick", "teclasAc()");
document.getElementById("homepage").appendChild(btn4);

var btn5 = document.createElement("Button");
btn5.setAttribute("style", "position: fixed; top: 230px; left: 30px; height:20px; width:140px;");
btn5.setAttribute("class", "green");
btn5.setAttribute("type", "button");
btn5.innerText = "Texto del botón Play";
btn5.setAttribute("onclick", "changeT1()");
document.getElementById("homepage").appendChild(btn5);
