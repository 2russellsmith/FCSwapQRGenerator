// ==UserScript==
// @name         Pokemon Go QR Generator
// @namespace    Me.Awesome
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.fcswap.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const tds = document.querySelectorAll("td");

    tds.forEach(td => {
        td.onclick = function() {
            document.execCommand("copy");

            this.className = 'copied';
            var td = this;
            setTimeout(function() {
                td.className = '';
            }, 1500)
        }

        var img = new Image();
        img.style.float = "left"
        img.src = 'https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=' + td.textContent
        td.appendChild(img)
        td.style.width = "400px"
        td.style.padding = "120px"
        td.addEventListener("copy", function(event) {
            event.preventDefault();
            if (event.clipboardData) {
                if(window.getSelection().toString() == "")
                {
                    event.clipboardData.setData("text/plain", td.textContent);
                }
                else
                {
                    event.clipboardData.setData("text/plain", window.getSelection());
                }
                console.log(event.clipboardData.getData("text"))

            }
        });
    })
})();