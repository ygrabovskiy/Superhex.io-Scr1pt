// ==UserScript==
// @name         Superhex.io Scr1pt
// @namespace    Superhex.io Scr1pt
// @version      1.2.1
// @homepageURL  https://github.com/Truebamateo/Superhex.io-Scr1pt
// @updateURL    https://github.com/Truebamateo/Superhex.io-Scr1pt/blob/master/Script.js
// @icon         http://superhex.io/img/fav_icon_1.png
// @description  Script para Superhex.io
// @author       Truebamateo
// @match        http://superhex.io/*
// @grant        none
// ==/UserScript==


var Text1TBM = localStorage.getItem("Text1TBM");
var AdsTBM = localStorage.getItem("AdsTBM");
removeAds = function(checkBox)
{
   if(checkBox)
   {
     if(!Check1.checked) //Restore Ads
     {
         localStorage.removeItem("AdsTBM");
         alert("Anuncios activados. Para que sean visibles, es necesario recargar la página.");
       } else {
    localStorage.setItem("AdsTBM", true);
    superhex.clickPlay = superhex.aipComplete;
    superhex.clickPlayAgain = superhex.aipComplete;
    document.getElementById("div-gpt-ad-1490263292583-0").innerHTML = "Anuncio bloqueado por Superhex.io Scr1pt";
    document.getElementById("div-gpt-ad-1490263292583-0").setAttribute("id", "adBlockedTBM"); //data-google-query-id
    document.getElementById("adBlockedTBM").setAttribute("data-google-query-id", "null");
    document.getElementById("cdm-zone-01").innerHTML = "Anuncio bloqueado por Superhex.io Scr1pt";
    alert("Anuncios desactivados.");
  }
} else {
      superhex.clickPlay = superhex.aipComplete;
      superhex.clickPlayAgain = superhex.aipComplete;
      setTimeout(function(){
        Check1.checked = true;
      },150);
      setTimeout(function(){
        document.getElementById("div-gpt-ad-1490263292583-0").innerHTML = "Anuncio bloqueado por Superhex.io Scr1pt";
        document.getElementById("div-gpt-ad-1490263292583-0").setAttribute("id", "adBlockedTBM");
        document.getElementById("adBlockedTBM").setAttribute("data-google-query-id", "null");
        document.getElementById("cdm-zone-01").innerHTML = "Anuncio bloqueado por Superhex.io Scr1pt";
      },1350);
   }
};

if(Text1TBM)
   {
    document.getElementById("button-play-text").innerText = Text1TBM;
   }

if(AdsTBM)
{
  removeAds(false);
}

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

changeT1 = function()
{
  var Text1Prompt = window.prompt("Texto del botón Play:");
  if(Text1Prompt === null)
    {
        alert("Texto del botón Play no cambiado.");
    } else {
        document.getElementById("button-play-text").innerText = Text1Prompt;
        localStorage.setItem("Text1TBM", Text1Prompt);
        alert("Texto del botón Play cambiado a: " + Text1Prompt);
    }
};

unlockSK = function()
{
  if(localStorage.getItem("shareClicked") && localStorage.getItem("subscribeClicked") && localStorage.getItem("likeClicked") && localStorage.getItem("tweetClicked") && localStorage.getItem("followClicked"))
  {
    alert("Ya tienes los skins desbloqueados.");
  } else {
    localStorage.setItem("shareClicked", 1);
    localStorage.setItem("subscribeClicked", 1);
    localStorage.setItem("likeClicked", 1);
    localStorage.setItem("tweetClicked", 1);
    localStorage.setItem("followClicked", 1);
    alert("Los siguientes skins fueron desbloqueados: (Puede que algunos ya los hallas desbloqueado anteriormente.)\nPollito amarillo.\nAve celeste.\nVaca.\nAve roja.\nElefante.");
  }
};

var scrText1 = document.createElement("h2");
scrText1.setAttribute("style", "color: white; position: fixed; top: 50px; left: 30px;");
scrText1.innerText = "Superhex.io Scr1pt 1.2.1";
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

var btn5 = document.createElement("Button");
btn5.setAttribute("style", "position: fixed; top: 200px; left: 30px; height:20px; width:140px;");
btn5.setAttribute("class", "green");
btn5.setAttribute("type", "button");
btn5.innerText = "Texto del botón Play";
btn5.setAttribute("onclick", "changeT1()");
document.getElementById("homepage").appendChild(btn5);

var Check1 = document.createElement("INPUT");
Check1.setAttribute("type", "checkbox");
Check1.setAttribute("id", "checkAdBlock");
Check1.setAttribute("style", "position: fixed; top: 230px; left: 30px;");
Check1.setAttribute("onclick", "removeAds(true)");
document.getElementById("homepage").appendChild(Check1);

var check1Text = document.createElement("h5");
check1Text.setAttribute("style", "color: white; position: fixed; top: 210px; left: 50px;");
check1Text.innerText = "Desactivar anuncios (BETA)";
document.getElementById("homepage").appendChild(check1Text);

var btn6 = document.createElement("Button");
btn6.setAttribute("style", "position: fixed; top: 255px; left: 30px; height:20px; width:140px;");
btn6.setAttribute("class", "green");
btn6.setAttribute("type", "button");
btn6.innerText = "Desbloquear skins";
btn6.setAttribute("onclick", "unlockSK()");
document.getElementById("homepage").appendChild(btn6);
