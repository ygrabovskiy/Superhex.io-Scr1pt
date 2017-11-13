// ==UserScript==
// @name         Superhex.io Scr1pt
// @namespace    SuperhexIoScr1pt
// @version      0.1.3
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

commandsTBM = function(cmd){
    cmd = window.prompt("Superhex.io Scr1pt por TBM - Insertar comando: (Para ver la lista de comandos insertar Ayuda)");
    if (cmd == "Ayuda" || cmd == "ayuda" || cmd == "AYUDA")
    {
        alert(" Comandos:\nAyuda: Muestra la lista de comandos.\nCalidad: Establece la calidad del juego.\nParty: Crea una party para jugar con tus amig@s.\nSkin: Selecciona la skin que quieres utilizar.\nTeclas: Muestra la lista de las teclas con funciones.\nTexto1: Cambia el texto del botón Play.");
    } else if(cmd == "Calidad" || cmd == "calidad" || cmd == "CALIDAD")
    {
        var QualityPrompt = window.prompt("Calidad del juego: (Máximo 2.8)");
        QualityPrompt = Number(QualityPrompt);
        superhex.setQuality(QualityPrompt);
    } else if(cmd == "Party" || cmd == "party" || cmd == "PARTY")
    {
      superhex.createParty();
    } else if(cmd == "Skin" || cmd == "skin" || cmd == "SKIN")
    {
        var SkinPrompt = window.prompt("ID de la Skin: (Si te abre una página, cierrala)");
        SkinPrompt = Number(SkinPrompt);
        superhex.selectSkin(SkinPrompt);
    } else if(cmd == "Teclas" || cmd == "teclas" || cmd=="TECLAS")
    {
        alert(" Teclas con funciones:\n+ (*) : Inicia el juego sin el anuncio.");
    } else if(cmd == "Texto1" || cmd == "texto1" || cmd == "TEXTO1")
    {
        var Text1Prompt = window.prompt("Texto del botón Play:");
        document.getElementById("button-play-text").innerText = Text1Prompt;
        window.localStorage.setItem("Text1TBM", Text1Prompt);
    }
        };

var btn = document.createElement("IMG");
btn.setAttribute("src", "http://www.healthmarketsinc.com/wp-content/uploads/2015/03/hamburger-menu.png");
btn.setAttribute("style", "position: fixed; top: 100px;");
btn.setAttribute("onclick", "commandsTBM();");
document.getElementById("homepage").appendChild(btn);

var btn2 = document.createElement("IMG");
btn2.setAttribute("src", "http://www.healthmarketsinc.com/wp-content/uploads/2015/03/hamburger-menu.png");
btn2.setAttribute("style", "position: fixed; top: 150px;");
btn2.setAttribute("onclick", "commandsTBM();");
document.getElementById("respawn").appendChild(btn2);
