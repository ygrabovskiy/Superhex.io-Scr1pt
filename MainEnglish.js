// ==UserScript==
// @name         Superhex.io Scr1pt
// @namespace    SuperhexIoScr1pt
// @version      0.1.2
// @description  Script for Superhex.io
// @author       Truebamateo
// @match        http://superhex.io/*
// @grant        none
// ==/UserScript==


var Text1TBM = window.localStorage.getItem("Text1TBM");
//var Text2TBM = window.localStorage.getItem("Text2TBM");

if(Text1TBM)
   {
    document.getElementById("button-play-text").innerText = Text1TBM;
       console.log("Text1 OK");
   }

/* if(Text2TBM)
   {
    document.getElementById("button-play-again-text").innerText = Text2TBM;
       console.log("Text2 OK");
   } */

document.onkeydown = function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===187){
        superhex.aipComplete();
    }
};

commandsTBM = function(cmd){
    cmd = window.prompt("Superhex.io Scr1pt by Truebamateo - Insert command: (For view the command list type Help)");
    if (cmd == "Help" || cmd == "help" || cmd == "HELP")
    {
        alert(" Commands:\Help: Open the command list.\nQuality: Sets the game quality.\nParty: Makes a party to play with your friends.\nChangelog: Open the changelog.\nSkin: Selects the skin what you want to use.\nKeys: Opens the special keys list.\nText1: Changes the text of the button Play.");
    } else if(cmd == "Quality" || cmd == "quality" || cmd == "QUALITY")
    {
        var QualityPrompt = window.prompt("Quality of the game: (Max 2.8)");
        QualityPrompt = Number(QualityPrompt);
        superhex.setQuality(QualityPrompt);
    } else if(cmd == "Party" || cmd == "party" || cmd == "PARTY")
    {
      superhex.createParty();
    } else if(cmd == "Changelog" || cmd == "changelog" || cmd == "CHANGELOG")
    {
        alert(" Changes of the version 0.1.2:\n* Some improvements");
    } else if(cmd == "Skin" || cmd == "skin" || cmd == "SKIN")
    {
        var SkinPrompt = window.prompt("ID of the Skin: (If a website opens, close it)");
        SkinPrompt = Number(SkinPrompt);
        superhex.selectSkin(SkinPrompt);
    } else if(cmd == "Keys" || cmd == "keys" || cmd=="KEYS")
    {
        alert(" Keys with functions:\n+ (*) : Starts the game without ads.");
    } else if(cmd == "Text1" || cmd == "text1" || cmd == "TEXT1")
    {
        var Text1Prompt = window.prompt("Text of the button Play:");
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
