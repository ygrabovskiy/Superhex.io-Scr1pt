// ==UserScript==
// @name         Superhex.io Scr1pt
// @namespace    Superhex.io Scr1pt
// @version      1.4.1
// @homepageURL  https://github.com/Truebamateo/Superhex.io-Scr1pt
// @icon         http://superhex.io/img/fav_icon_1.png
// @description  Script for Superhex.io
// @description:es-ES Script para Superhex.io
// @author       Truebamateo
// @match        http://superhex.io/*
// @grant        none
// ==/UserScript==

storageAvailable = function(type) {
	try {
		var storage = window[type],
		x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e) {
		return false;
	}
};

var currSkin = 0;
if(storageAvailable('localStorage')) {
var Text1TBM = localStorage.getItem("Text1TBM"), AdsTBM = localStorage.getItem("AdsTBM"), Language = localStorage.getItem("LangTBM"); currSkin = localStorage.getItem("selectedSkin");
} else console.warn("WARNING: Your browser doesn't support localStorage.\nADVERTENCIA: Tu navegador no soporta localStorage (almacenamiento local).");
var adsDeleted = false,
skinPag = 1,
adsRestoredTxt = "Ads restored. The changes will take effect when the page is reloaded.",
adBlockedTxt = "Ad blocked by Superhex.io Scr1pt",
adsRemovedTxt = "Ads removed.",
qChangeTxt = "Quality:\n0.5: Low\n0.75: Medium\n1: High",
q27Txt = "WARNING: Setting the quality higher than 2.7 may cause problems.",
q01Txt = "WARNING: Setting the quality lower than 0.1 may cause problems.",
qInvalidTxt = "Invalid quality. You can only insert numbers.\nExample: 1.2",
qNotChangedTxt = "Quality not changed.",
qChangedTxt = "Quality changed to: ",
sChangeTxt = "Skin ID:\nNote: To set the Skin 0 should use 0.1",
sInvalidTxt = "Skin ID invalid. You can only insert numbers.",
s0Txt = "Skin changed to: 0",
sNotChangedTxt = "Skin not changed.",
sChangedTxt = "Skin changed to: ",
sErrorTxt = "An error has occurred. Make sure to insert a valid ID.",
sTheSTxt = "The skin ",
sNoExist = " doesn't exist. Enter a number less than 10.",
localStorageTxt = "Your browser doesn't support localStorage, therefore, you can't use this function.",
pTextTxt = "Play button text:",
pTextNotChangedTxt = "Play button text not changed.",
pTextChangedTxt = "Play button text changed to: ",
sUnlockekdTxt = "You already have the skins unlocked.",
sUnlockedsTxt = "The following skins were unlocked:",
sChickenTxt = "Yellow chicken.",
sBirdTxt = "Light blue bird.",
sCowTxt = "Cow.",
sBird2Txt = "Red bird.",
sElephantTxt = "Elephant.",
loadingScriptTxt = "Loading Superhex.io Scr1pt...",
sAlreadyTxt = "You already have the skin ",
sAlreadyTxt2 = "", //Dejar vacio
keyActionsTxt = "Keys:\n\n1 = Hide/show Leaderboard.\n0 = Hide/show UI.\n2 = Show/hide FPS and other data.",
partyTxt = "Party ID:",
party5Txt = "The ID of the Party can't be less than 5.",
party6Txt = "The ID of the Party can't be greater than 6.";

window.onload = function () {
  mkGui();
  var skinRightArrow = document.getElementById("skin-right-arrow"),
  skinLeftArrow = document.getElementById("skin-left-arrow");
  skinRightArrow.setAttribute("onclick", "skinChangePage(true, 1)");
  skinLeftArrow.setAttribute("onclick", "skinChangePage(false, 1)");
	if(storageAvailable('localStorage') && Language == "ES") changeLang(false, false);
};

changeLang = function(write, ing) {
  if(ing) {
    if(storageAvailable('localStorage')) localStorage.setItem('LangTBM', 'EN');
    alert("Language changed to English. The changes will take effect when the page is reloaded.");
		document.getElementById("btn7").innerText = "Español (Spanish)";
		document.getElementById("btn7").setAttribute("onclick", "changeLang(true, false);");
  } else {
		loadingScriptTxt = "Cargando Superhex.io Scr1pt...";
    adsRestoredTxt = "Anuncios restaurados. Para que sean visibles, es necesario recargar la página.";
    adBlockedTxt = "Anuncio bloqueado por Superhex.io Scr1pt";
    adsRemovedTxt = "Anuncios removidos.";
    qChangeTxt = "Calidad:\n0.5: Low (Baja)\n0.75: Medium (Media)\n1: High (Alta)";
    q27Txt = "ADVERTENCIA: Establecer la calidad mayor a 2.7 puede causar problemas.";
    q01Txt = "ADVERTENCIA: Establecer la calidad menor a 0.1 puede causar problemas.";
    qInvalidTxt = "Calidad inválida. Solo puedes insertar números.\nEjemplo: 1.2";
    qNotChangedTxt = "Calidad no cambiada.";
    qChangedTxt = "Calidad cambiada a: ";
    sChangeTxt = "ID de la Skin:\nNota: Para establecer la skin 0 se debe utilizar 0.1";
    sInvalidTxt = "ID de la skin inválido. Solo puedes insertar números.";
    s0Txt = "Skin cambiada a: 0";
    sNotChangedTxt = "Skin no cambiada.";
    sChangedTxt = "Skin cambiada a: ";
    sErrorTxt = "Se ha producido un error. Asegúrate de insertar un ID válido.";
    sTheSTxt = "La skin ";
    sNoExist = " no existe. Introduzca un número menor a 10.";
    localStorageTxt = "Tu navegador no soporta localStorage, por lo tanto, no puedes utilizar esta función.";
		pTextTxt = "Texto del botón Play:";
		pTextNotChangedTxt = "Texto del botón Play no cambiado.";
		pTextChangedTxt = "Texto del botón Play cambiado a: ";
		sUnlockekdTxt = "Ya tienes los skins desbloqueados.";
		sUnlockedsTxt = "Los siguientes skins fueron desbloqueados:";
		sChickenTxt = "Pollo amarillo.";
		sBirdTxt = "Ave celeste.";
		sCowTxt = "Vaca.";
		sBird2Txt = "Ave roja.";
		sElephantTxt = "Elefante.";
		sAlreadyTxt = "Ya tienes el skin ";
		sAlreadyTxt2 = " puesto.";
		partyTxt = "ID de la Party:";
		party5Txt = "El ID de la Party no puede ser menor a 5.";
		party6Txt = "El ID de la Party no puede ser mayor a 6.";
		keyActionsTxt = "Teclas:\n\n1 = Oculta/muestra la Tabla de clasificación.\n0 = Oculta/muestra la UI.\n2 = Muestra/oculta los FPS y otros datos.";
		document.getElementById("btn2").innerText = "Cambiar calidad";
		document.getElementById("btn3").innerText = "Establecer Skin (ID)";
		document.getElementById("btn5").innerText = "Texto del botón Play";
		document.getElementById("check1Text").innerText = "Remover anuncios";
		document.getElementById("btn6").innerText = "Desbloquear skins";
		document.getElementById("btn7").innerText = "English (Inglés)";
		document.getElementById("btn7").setAttribute("onclick", "changeLang(false, true);");
		document.getElementById("btn8").innerText = "Crear Party";
		document.getElementById("scrText2").innerText = keyActionsTxt;
    if(write) {
      if(storageAvailable('localStorage')) localStorage.setItem('LangTBM', 'ES');
      alert("Idioma cambiado a Español.");
    }
  }
};

skinChangePage = function(next, cantidad) {
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

changeSkin = function(ID) {
	var canChangeS = true;
	if(currSkin != ID) {
	  if(ID <= 3) {
      if(skinPag == 2) skinChangePage(false, 1); else if(skinPag == 3) skinChangePage(false, 2);
	  } else if(ID <= 7) {
		  if(skinPag == 1) skinChangePage(true, 1); else if(skinPag == 3) skinChangePage(false, 1);
	  } else if(ID <= 9) {
		  if(skinPag == 2) skinChangePage(true, 1); else if(skinPag == 1) skinChangePage(true, 2);
	  } else {
		  alert(sTheSTxt + ID + sNoExist);
		  canChangeS = false;
	  }
	    if(canChangeS == true) {
	      superhex.selectSkin(ID);
	      currSkin = ID;
	      alert(sChangedTxt + ID);
      }
  } else alert(sAlreadyTxt + ID + sAlreadyTxt2);
};

removeAds = function(checkBox) {
  if(checkBox) {
    if(!document.getElementById("checkAdBlock").checked) { //Restore Ads
      if(storageAvailable('localStorage')) localStorage.removeItem("AdsTBM");
        adsDeleted = true;
        alert(adsRestoredTxt);
    } else {
      if(storageAvailable('localStorage')) localStorage.setItem("AdsTBM", true);
      superhex.clickPlay = superhex.aipComplete;
      superhex.clickPlayAgain = superhex.aipComplete;
      if(!adsDeleted) {
        var Ad14 = document.getElementById("div-gpt-ad-1490263292583-0");
        Ad14.innerHTML = adBlockedTxt;
        Ad14.setAttribute("id", "adBlockedTBM");
        Ad14 = document.getElementById("adBlockedTBM");
        Ad14.setAttribute("data-google-query-id", "null");
        document.getElementById("cdm-zone-01").innerHTML = adBlockedTxt;
      }
      alert(adsRemovedTxt);
    }
  } else {
    superhex.clickPlay = superhex.aipComplete;
    superhex.clickPlayAgain = superhex.aipComplete;
    setTimeout(function(){
      var Ad14 = document.getElementById("div-gpt-ad-1490263292583-0");
      Ad14.innerHTML = adBlockedTxt;
      Ad14.setAttribute("id", "adBlockedTBM");
      Ad14 = document.getElementById("adBlockedTBM");
      Ad14.setAttribute("data-google-query-id", "null");
      document.getElementById("cdm-zone-01").innerHTML = adBlockedTxt;
    },1350);
  }
};

if(storageAvailable('localStorage')) {
if(Text1TBM) document.getElementById("button-play-text").innerText = Text1TBM;
if(AdsTBM) removeAds(false);
}

document.onkeyup = function(e) {
  try {
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===49 && document.getElementById("leaderboard").getAttribute("style") != null || key===97 && document.getElementById("leaderboard").getAttribute("style") != null) if(document.getElementById("leaderboard").getAttribute("style") == "display: block;") document.getElementById("leaderboard").setAttribute("style", "display: none;"); else document.getElementById("leaderboard").setAttribute("style", "display: block;");
		if(key===48 && document.getElementById("leaderboard").getAttribute("style") != null || key===96 && document.getElementById("leaderboard").getAttribute("style") != null) {
      if(document.getElementById("leaderboard").getAttribute("style") == "display: block;") document.getElementById("leaderboard").setAttribute("style", "display: none;");
		  if(document.getElementById("minimap").getAttribute("style") == "display: block;") document.getElementById("minimap").setAttribute("style", "display: none;");
	    if(document.getElementById("friendsScores").getAttribute("style") == "display: block;") document.getElementById("friendsScores").setAttribute("style", "display: none;");
		  if(document.getElementById("score").getAttribute("style") == "display: block;") document.getElementById("score").setAttribute("style", "display: none;"); else {
		    document.getElementById("score").setAttribute("style", "display: block;");
			  document.getElementById("minimap").setAttribute("style", "display: block;");
			  document.getElementById("leaderboard").setAttribute("style", "display: block;");
			  if(window.location.hash != "") document.getElementById("friendsScores").setAttribute("style", "display: block;");
		  }
		}
		if(key===50 || key === 98) if(document.getElementById("fps").getAttribute("style") == "display: block; color: white;") document.getElementById("fps").setAttribute("style", "display: none;"); else document.getElementById("fps").setAttribute("style", "display: block; color: white;");
	} catch(err) {
	  console.error("Superhex.io Scr1pt Error onkeydown: " + err);
	}
};

goGitHub = function() {
  window.open("https://github.com/Truebamateo/Superhex.io-Scr1pt");
};

changeQ = function() {
  var QualityPrompt = window.prompt(qChangeTxt);
  QualityPrompt = Number(QualityPrompt);
  if(QualityPrompt > 2.7) alert(q27Txt);
  if(QualityPrompt < 0.1 && QualityPrompt > 0) alert(q01Txt);
  if(QualityPrompt.toString() == "NaN") alert(qInvalidTxt); else if(QualityPrompt === 0) alert(qNotChangedTxt); else {
    superhex.setQuality(QualityPrompt);
    alert(qChangedTxt + QualityPrompt);
  }
};

changeS = function() {
  var SkinPrompt = window.prompt(sChangeTxt);
  SkinPrompt = Number(SkinPrompt);
  superhex.nextSkins();
  superhex.previousSkins();
  var ChickenS2 = false,
  TweetS2 = false,
  CowS2 = false,
  RedBirdS2 = false,
  ElephantS2 = false;
  if(storageAvailable('localStorage')) {
	  currSkin = localStorage.getItem("selectedSkin");
    if(localStorage.getItem("followClicked")) ChickenS2 = true;
    if(localStorage.getItem("tweetClicked")) TweetS2 = true;
    if(localStorage.getItem("likeClicked")) CowS2 = true;
    if(localStorage.getItem("subscribeClicked")) RedBirdS2 = true;
    if(localStorage.getItem("shareClicked")) ElephantS2 = true;
    if(SkinPrompt.toString() == "NaN") alert(sInvalidTxt); else if(SkinPrompt == 0.1) {
      if(!ChickenS2) localStorage.setItem("followClicked", 1);
      changeSkin(0);
      if(!ChickenS2) localStorage.removeItem("followClicked");
    } else if(SkinPrompt === 0) alert(sNotChangedTxt); else {
        if(SkinPrompt == 1) {
            if(!TweetS2) localStorage.setItem("tweetClicked", 1);
            changeSkin(SkinPrompt);
            if(!TweetS2) localStorage.removeItem("tweetClicked");
        } else if(SkinPrompt == 2) {
            if(!CowS2) localStorage.setItem("likeClicked", 1);
            changeSkin(SkinPrompt);
            if(!CowS2) localStorage.removeItem("likeClicked");
        } else if(SkinPrompt == 3) {
            if(!RedBirdS2) localStorage.setItem("subscribeClicked", 1);
            changeSkin(SkinPrompt);
            if(!RedBirdS2) localStorage.removeItem("subscribeClicked");
        } else if(SkinPrompt == 4) {
            if(!ElephantS2) localStorage.setItem("shareClicked", 1);
            changeSkin(SkinPrompt);
            if(!ElephantS2) localStorage.removeItem("shareClicked");
        } else {
            try {
              changeSkin(SkinPrompt);
            } catch(err) {
						  console.error("Superhex.io Scr1pt Error changing skin by ID: " + err);
              alert(sErrorTxt);
            }
        }
    }
  } else alert(localStorageTxt);
};

changeT1 = function() {
  var Text1Prompt = window.prompt(pTextTxt);
  if(Text1Prompt === null) {
    alert(pTextNotChangedTxt);
  } else {
	  if(Text1Prompt != "Play") {
      document.getElementById("button-play-text").innerText = Text1Prompt;
      if(storageAvailable('localStorage')) localStorage.setItem("Text1TBM", Text1Prompt);
      alert(pTextChangedTxt + Text1Prompt);
		} else {
		  document.getElementById("button-play-text").innerText = Text1Prompt;
			if(storageAvailable('localStorage')) localStorage.removeItem("Text1TBM");
			alert(pTextChangedTxt + Text1Prompt);
		}
  }
};

unlockSK = function() {
  if(storageAvailable('localStorage')) {
    if(localStorage.getItem("shareClicked") && localStorage.getItem("subscribeClicked") && localStorage.getItem("likeClicked") && localStorage.getItem("tweetClicked") && localStorage.getItem("followClicked")) alert(sUnlockekdTxt); else {
      var ChickenS = true, TweetS = true, CowS = true, RedBirdS = true, ElephantS = true;
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
      alert(sUnlockedsTxt);
      if(ChickenS) alert(sChickenTxt);
      if(TweetS) alert(sBirdTxt);
      if(CowS) alert(sCowTxt);
      if(RedBirdS) alert(sBird2Txt);
      if(ElephantS) alert(sElephantTxt);
    }
  } else alert(localStorageTxt);
};

mkParty = function() {
  var partyPrompt = window.prompt(partyTxt);
	if(partyPrompt !== null && partyPrompt.length != 0) {
	  if(partyPrompt.length < 5) alert(party5Txt); else if(partyPrompt.length > 6) alert(party6Txt); else {
			document.getElementById("create-party").style.display = "none";
			document.getElementById("in-party").style.display = "block";
			window.location.hash = partyPrompt;
			document.getElementById("party-share-link").value = "http://" + window.location.hostname + (window.location.port ? ":" + window.location.port : "") + window.location.pathname + "#" + partyPrompt;
		}
	}
};

var scrText1 = document.createElement("h2");
scrText1.setAttribute("style", "color: white; position: fixed; top: 80px; left: 30px;");
scrText1.innerText = loadingScriptTxt;
document.getElementById("homepage").appendChild(scrText1);

mkGui = function() {

scrText1.innerText = "Superhex.io Scr1pt v1.4.1";

var btn = document.createElement("Button");
btn.setAttribute("style", "position: fixed; top: 140px; left: 30px; height:25px; width:140px;");
btn.setAttribute("class", "green");
btn.setAttribute("type", "button");
btn.setAttribute("id", "btn");
btn.innerText = "GitHub";
btn.setAttribute("onclick", "goGitHub();");
document.getElementById("homepage").appendChild(btn);

var btn2 = document.createElement("Button");
btn2.setAttribute("style", "position: fixed; top: 175px; left: 30px; height:25px; width:140px;");
btn2.setAttribute("class", "green");
btn2.setAttribute("type", "button");
btn2.setAttribute("id", "btn2");
btn2.innerText = "Change quality";
btn2.setAttribute("onclick", "changeQ();");
document.getElementById("homepage").appendChild(btn2);

var btn3 = document.createElement("Button");
btn3.setAttribute("style", "position: fixed; top: 210px; left: 30px; height:25px; width:140px;");
btn3.setAttribute("class", "green");
btn3.setAttribute("type", "button");
btn3.setAttribute("id", "btn3");
btn3.innerText = "Set Skin (ID)";
btn3.setAttribute("onclick", "changeS();");
document.getElementById("homepage").appendChild(btn3);

var btn5 = document.createElement("Button");
btn5.setAttribute("style", "position: fixed; top: 245px; left: 30px; height:25px; width:140px;");
btn5.setAttribute("class", "green");
btn5.setAttribute("type", "button");
btn5.setAttribute("id", "btn5");
btn5.innerText = "Set Play button text";
btn5.setAttribute("onclick", "changeT1();");
document.getElementById("homepage").appendChild(btn5);

var Check1 = document.createElement("INPUT");
Check1.setAttribute("type", "checkbox");
Check1.setAttribute("id", "checkAdBlock");
Check1.setAttribute("style", "position: fixed; top: 383px; left: 30px;");
Check1.setAttribute("onclick", "removeAds(true);");
document.getElementById("homepage").appendChild(Check1);

if(AdsTBM) Check1.checked = true;

var check1Text = document.createElement("h5");
check1Text.setAttribute("style", "color: white; position: fixed; top: 363px; left: 50px;");
check1Text.setAttribute("id", "check1Text");
check1Text.innerText = "Remove ads";
document.getElementById("homepage").appendChild(check1Text);

var btn6 = document.createElement("Button");
btn6.setAttribute("style", "position: fixed; top: 280px; left: 30px; height:25px; width:140px;");
btn6.setAttribute("class", "green");
btn6.setAttribute("type", "button");
btn6.setAttribute("id", "btn6");
btn6.innerText = "Unlock skins";
btn6.setAttribute("onclick", "unlockSK();");
document.getElementById("homepage").appendChild(btn6);

var btn8 = document.createElement("Button");
btn8.setAttribute("style", "position: fixed; top: 315px; left: 30px; height:25px; width:140px;");
btn8.setAttribute("class", "green");
btn8.setAttribute("type", "button");
btn8.setAttribute("id", "btn8");
btn8.innerText = "Create Party";
btn8.setAttribute("onclick", "mkParty();");
document.getElementById("homepage").appendChild(btn8);

var btn7 = document.createElement("Button");
btn7.setAttribute("style", "position: fixed; top: 350px; left: 30px; height:25px; width:140px;");
btn7.setAttribute("class", "green");
btn7.setAttribute("type", "button");
btn7.setAttribute("id", "btn7");
btn7.innerText = "Español (Spanish)";
btn7.setAttribute("onclick", "changeLang(true, false);");
document.getElementById("homepage").appendChild(btn7);

var scrText2 = document.createElement("h4");
scrText2.setAttribute("style", "color: white; position: fixed; top: 50px; right: 10px;");
scrText2.setAttribute("id", "scrText2");
scrText2.innerText = keyActionsTxt;
document.getElementById("homepage").appendChild(scrText2);
};
