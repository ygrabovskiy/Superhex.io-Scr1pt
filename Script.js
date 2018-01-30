// ==UserScript==
// @name         Superhex.io Scr1pt
// @namespace    Superhex.io Scr1pt
// @version      1.2.3
// @homepageURL  https://github.com/Truebamateo/Superhex.io-Scr1pt
// @icon         http://superhex.io/img/fav_icon_1.png
// @description  Script para Superhex.io
// @author       Truebamateo
// @match        http://superhex.io/*
// @grant        none
// ==/UserScript==


var Text1TBM = localStorage.getItem("Text1TBM");
var AdsTBM = localStorage.getItem("AdsTBM");
var adsDeleted = false;
var skinPag = 1;
//var currSkin = 0;

window.onload = function ()
{
  mkGui();
  var skinRightArrow = document.getElementById("skin-right-arrow");
  var skinLeftArrow = document.getElementById("skin-left-arrow");
  skinRightArrow.setAttribute("onclick", "skinChangePage(true, 1)");
  skinLeftArrow.setAttribute("onclick", "skinChangePage(false, 1)");
};

skinChangePage = function(next, cantidad)
{
  if(!next) {
    if(cantidad == 1) {
    superhex.previousSkins();
    skinPag--;
  } else if(cantidad == 2) {
    superhex.previousSkins();
    superhex.previousSkins();
    skinPag = skinPag - 2;
  } else if(cantidad == 3) {
    superhex.previousSkins();
    superhex.previousSkins();
    superhex.previousSkins();
    skinPag = skinPag - 3;
  }
  } else {
    if(cantidad == 1)  {
    superhex.nextSkins();
    skinPag++;
  } else if(cantidad == 2) {
    superhex.nextSkins();
    superhex.nextSkins();
    skinPag = skinPag + 2;
  } else if(cantidad == 3) {
    superhex.nextSkins();
    superhex.nextSkins();
    superhex.nextSkins();
    skinPag = skinPag + 3;
  }
  }
};

/*changeSkin = function(ID)
{                               COMING SOON - PRÓXIMAMENTE

}; */

removeAds = function(checkBox)
{
   if(checkBox)
   {
     if(!document.getElementById("checkAdBlock").checked) //Restore Ads
     {
         localStorage.removeItem("AdsTBM");
         adsDeleted = true;
         alert("Anuncios activados. Para que sean visibles, es necesario recargar la página.");
       } else {
    localStorage.setItem("AdsTBM", true);
    superhex.clickPlay = superhex.aipComplete;
    superhex.clickPlayAgain = superhex.aipComplete;
    if(!adsDeleted) {
    var Ad14 = document.getElementById("div-gpt-ad-1490263292583-0");
    Ad14.innerHTML = "Anuncio bloqueado por Superhex.io Scr1pt";
    Ad14.setAttribute("id", "adBlockedTBM");
    Ad14 = document.getElementById("adBlockedTBM");
    Ad14.setAttribute("data-google-query-id", "null");
    document.getElementById("cdm-zone-01").innerHTML = "Anuncio bloqueado por Superhex.io Scr1pt";
  }
    alert("Anuncios desactivados.");
  }
} else {
      superhex.clickPlay = superhex.aipComplete;
      superhex.clickPlayAgain = superhex.aipComplete;
      setTimeout(function(){
        var Ad14 = document.getElementById("div-gpt-ad-1490263292583-0");
        Ad14.innerHTML = "Anuncio bloqueado por Superhex.io Scr1pt";
        Ad14.setAttribute("id", "adBlockedTBM");
        Ad14 = document.getElementById("adBlockedTBM");
        Ad14.setAttribute("data-google-query-id", "null");
        document.getElementById("cdm-zone-01").innerHTML = "Anuncio bloqueado por Superhex.io Scr1pt";
      },1350);
   }
};

if(Text1TBM) document.getElementById("button-play-text").innerText = Text1TBM;

if(AdsTBM) removeAds(false);

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
    var SkinPrompt = window.prompt("ID de la Skin:\nNota: Para establecer la skin 0 se debe utilizar 0.1");
    SkinPrompt = Number(SkinPrompt);
    superhex.nextSkins();
    superhex.previousSkins();
    var ChickenS2 = false;
    var TweetS2 = false;
    var CowS2 = false;
    var RedBirdS2 = false;
    var ElephantS2 = false;
    if(localStorage.getItem("followClicked")) ChickenS2 = true;
    if(localStorage.getItem("tweetClicked")) TweetS2 = true;
    if(localStorage.getItem("likeClicked")) CowS2 = true;
    if(localStorage.getItem("subscribeClicked")) RedBirdS2 = true;
    if(localStorage.getItem("shareClicked")) ElephantS2 = true;
    if(SkinPrompt.toString() == "NaN")
    {
        alert("ID de la skin no válido. Solo puedes insertar números.");
    } else if(SkinPrompt == 0.1) {
        if(skinPag == 2) skinChangePage(false, 1);
        if(skinPag == 3) skinChangePage(false, 2);
        if(!ChickenS2) localStorage.setItem("followClicked", 1);
        superhex.selectSkin(0);
        if(!ChickenS2) localStorage.removeItem("followClicked");
        alert("Skin cambiada a: 0");
    } else if(SkinPrompt === 0) {
        alert("Skin no cambiada.");
    } else {
        if(SkinPrompt == 1) {
           if(skinPag == 2) skinChangePage(false, 1);
           if(skinPag == 3) skinChangePage(false, 2);
           if(!TweetS2) localStorage.setItem("tweetClicked", 1);
           superhex.selectSkin(SkinPrompt);
           alert("Skin cambiada a: " + SkinPrompt);
           if(!TweetS2) localStorage.removeItem("tweetClicked");
        } else if(SkinPrompt == 2) {
           if(skinPag == 2) skinChangePage(false, 1);
           if(skinPag == 3) skinChangePage(false, 2);
           if(!CowS2) localStorage.setItem("likeClicked", 1);
           superhex.selectSkin(SkinPrompt);
           alert("Skin cambiada a: " + SkinPrompt);
           if(!CowS2) localStorage.removeItem("likeClicked");
        } else if(SkinPrompt == 3) {
           if(skinPag == 2) skinChangePage(false, 1);
           if(skinPag == 3) skinChangePage(false, 2);
           if(!RedBirdS2) localStorage.setItem("subscribeClicked", 1);
           superhex.selectSkin(SkinPrompt);
           alert("Skin cambiada a: " + SkinPrompt);
           if(!RedBirdS2) localStorage.removeItem("subscribeClicked");
        } else if(SkinPrompt == 4) {
           if(skinPag == 1) skinChangePage(true, 1);
           if(skinPag == 3) skinChangePage(false, 1);
           if(!ElephantS2) localStorage.setItem("shareClicked", 1);
           superhex.selectSkin(SkinPrompt);
           alert("Skin cambiada a: " + SkinPrompt);
           if(!ElephantS2) localStorage.removeItem("shareClicked");
        } else {
          if(SkinPrompt <= 9) {
          try {
           if(SkinPrompt >= 8 && skinPag == 1) skinChangePage(true, 2);
           if(SkinPrompt >= 8 && skinPag == 2) skinChangePage(true, 1);
           if(SkinPrompt >= 4 && SkinPrompt < 8 && skinPag == 1) skinChangePage(true, 1);
           if(SkinPrompt >= 4 && SkinPrompt < 8 && skinPag == 3) skinChangePage(false, 1);
           superhex.selectSkin(SkinPrompt);
           alert("Skin cambiada a: " + SkinPrompt);
          } catch(err) {
            alert("Se ha producido un error. Asegúrate de insertar un ID válido.");
          }
          } else {
            alert("La skin " + SkinPrompt + " no existe. Introduzca un número menor a 10.");
          }
        }
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
    var ChickenS = true;
    var TweetS = true;
    var CowS = true;
    var RedBirdS = true;
    var ElephantS = true;
    if(localStorage.getItem("followClicked")) ChickenS = false;
    if(localStorage.getItem("tweetClicked")) TweetS = false;
    if(localStorage.getItem("likeClicked")) CowS = false;
    if(localStorage.getItem("subscribeClicked")) RedBirdS = false;
    if(localStorage.getItem("shareClicked")) ElephantS = false;
    localStorage.setItem("shareClicked", 1);
    localStorage.setItem("subscribeClicked", 1);
    localStorage.setItem("likeClicked", 1);
    localStorage.setItem("tweetClicked", 1);
    localStorage.setItem("followClicked", 1);
    superhex.nextSkins();
    superhex.previousSkins();
    alert("Los siguientes skins fueron desbloqueados:");
    if(ChickenS) alert("Pollo amarillo.");
    if(TweetS) alert("Ave celeste.");
    if(CowS) alert("Vaca.");
    if(RedBirdS) alert("Ave roja.");
    if(ElephantS) alert("Elefante.");
  }
};

var scrText1 = document.createElement("h2");
scrText1.setAttribute("style", "color: white; position: fixed; top: 50px; left: 30px;");
scrText1.innerText = "Cargando Superhex.io Scr1pt...";
document.getElementById("homepage").appendChild(scrText1);

mkGui = function() {

scrText1.innerText = "Superhex.io Scr1pt v1.2.3";

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
btn3.innerText = "Establecer Skin (ID)";
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

if(AdsTBM) Check1.checked = true;

var check1Text = document.createElement("h5");
check1Text.setAttribute("style", "color: white; position: fixed; top: 210px; left: 50px;");
check1Text.innerText = "Desactivar anuncios";
document.getElementById("homepage").appendChild(check1Text);

var btn6 = document.createElement("Button");
btn6.setAttribute("style", "position: fixed; top: 255px; left: 30px; height:20px; width:140px;");
btn6.setAttribute("class", "green");
btn6.setAttribute("type", "button");
btn6.innerText = "Desbloquear skins";
btn6.setAttribute("onclick", "unlockSK()");
document.getElementById("homepage").appendChild(btn6);
};
