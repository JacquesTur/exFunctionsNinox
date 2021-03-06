


window.exFnRT = (function () {

  
    function exButton(fnt, params, db, ret) {
      //debugger;
      try {
        var myBadge = params.Badge;
        var myBadgeValue = params.BadgeValue;
        var myTexteGrand = params.TexteGrand;
        var myTexteGrandColor = params.TexteGrandColor;
        var myTextePetit = params.TextePetit;
        var myTextePetitColor = params.TextePetitColor;
        var myIcon = params.Icon;
        var myIconColor = params.IconColor;
        var myComportementColor = params.ComportementColor;
        var myComportementColorHover = params.ComportementColorHover;
  
        var myId = exUtils.generateUniqueId("buttonId");
  
        var myBadgeVisible = myBadge
          ? `<span class="badge">${myBadgeValue}</span>`
          : ``;
  
        var buttonHTML = `
                  <style>
                      @import url("https://fonts.googleapis.com/css?family=Roboto:400,400i,700");
                      @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css");
                          body {
                              font-family: Roboto, sans-serif;
                          }
  
                          body .card {
                              position: absolute;
                              /*top: 50%;
                              left: 50%;
                              transform: translate(-50%, -50%);*/
                          }
                      
                          .cardRTR {
                              display: flex;
                              box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
                              /*max-width: 260px;*/
                              border-radius: 10px;
                              position: relative;
                              /*margin: 15px;*/
                              /*transition: 0.3s all ease-in-out;
                              border: 0px solid #eeeeee;*/
                              border: 1px solid #eeeeee;
                  
                              overflow:visible;
                              height: -webkit-fill-available;
                              background-color:${myComportementColor};
                          }
  
                          .cardRTR > div {
                              padding: 30px 15px;
                              /*transition: 0.3s all ease-in-out;*/
                              display: flex;
                              align-items: center;
                              background-color:  ${myComportementColor} ;
                          }
  
                          .cardRTR .iconRTR {
                              background-color: red;
                              background-color: rgb(255,112,67);
                              background-color: #ffffff;
                              background-color:${myComportementColor};
                              color: #ffffff;
                              color:rgb(92,92,92);
                              color:${myIconColor};
                              font-size: 35px;
                              border-top-left-radius: 10px;
                              border-bottom-left-radius: 10px;
                              box-shadow: 5px 0px 12px -4px rgba(0, 0, 0, 0.5);
                              box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5);
                              z-index: 1;
                          }
  
                          .cardRTR .text {
                              display:block;
                              width:100%;
                              background-color: #003B67;
                              background-color: #ffffff;
                              background-color:${myComportementColor};
                              color: #ffffff;
                              color:rgb(92,92,92);
                              color:${myTexteGrandColor};
                              border-top-right-radius: 10px;
                              border-bottom-right-radius: 10px;
                              border: 0px solid #eeeeee;
                          }
  
                          .cardRTR .badge {
                              position: absolute;
                              color: #003B67;
                              color: #ffffff;
                              background-color: #ffffff;
                              background-color: red;
                              box-shadow: inset 0px 0px 6px 6px #E0E0E0;
                              box-shadow: inset 0px 0px 0px 0px #E0E0E0;
                              font-weight: bold;
                              /*width: 65px;*/
                              height: 35px;
                              border-radius: 50%;
                              padding: 5px;
                              font-size: 20px;
                              box-sizing: border-box;
                              display: flex;
                              align-items: center;
                              justify-content: center;
                              border: 0px solid #000000;
                              top: -10px;
                              right: -10px;
                              z-index: 2;
                          }
  
                          .cardRTR:hover {
                              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
                              cursor: pointer;
                              background-color: rgb(255,112,67);
                              background-color:${myComportementColorHover};
                              color: #ffffff;
                              border: 0px solid #eeeeee;
                          }
  
                          .cardRTR:hover .text {
                              /*background-color: #29C1F4;
                              background-image: radial-gradient(#96e1fa, #2ac1f4);
                              color: #000000;*/
                              background-color: rgb(255,112,67);
                              background-color:${myComportementColorHover};
                              color: #ffffff;
                          }
  
                          .cardRTR:hover .iconRTR {
                              background-color: green;
                              background-color: rgb(255,112,67);
                              background-color:${myComportementColorHover};
                              color: #ffffff
                          }
                  </style>
  
                  <div class="cardRTR" id="${myId}" onclick='window.exFunctions.fireOnClickButton( "${myId}","${params.record._id}")' >
                       ${myBadgeVisible}
                      <div class="iconRTR">
                          <i style="webkit : enable;" class="${myIcon}"></i>
                      </div>
                      <div class="text">
                          <h4>${myTexteGrand}</h4>
                          <h6 style="color : ${myTextePetitColor} ">${myTextePetit}</h6>
                      </div>
                  </div>
  
                  <script> 
                  var x = document.getElementById("${myId}"); 
                  var p = x.parentNode; 
                  p.style.overflow = "visible"; p.style.padding = "0px"; p.style.margin = "0px";
                  <\/script>
  `;
  
        console.log(buttonHTML);
        ret(buttonHTML);
      } catch (err) {
        var msgErr =
          err.message + " ?? la ligne " + err.line + ", colonne " + err.column;
        return ret(msgErr);
      }
    }
  
    function exButtonNavBar(fnt, params, db, ret) {
      debugger;
      try {
        var myButtonNavBarTitle = params.title;
        var myButtonNavBarId = params.buttonId;
        var myBkColor = "red";
        var myFntColor = "white";
        if (params.BackgroundColor) myBkColor = params.BackgroundColor;
        if (params.FontColor) myFntColor = params.FntColor;
        //        var myButtonNavBarId = generateUniqueId("buttonNavBarId");
  
        var button = document.getElementById(myButtonNavBarId);
        var myMenuTop = document.getElementsByClassName("hud-menu-right")[0];
  
        if (myMenuTop) {
          if (!button) {
            // Cr??ation du bouton
            var button = document.createElement("button");
          }
  
          button.id = myButtonNavBarId;
          button.innerText = myButtonNavBarTitle;
          button.setAttribute(
            "class",
            "hud-menu-button menu-nav i-light-grey myButtonNavBar"
          );
          button.style.border = "none";
  
          var myButtonNavBarCSSStyle =
            ` 
                  <style> 
                      :root{
                          --color1 : 	` +
            myBkColor +
            `;
                          --color2 :  ` +
            myFntColor +
            `;
                          }
      
                          .myButtonNavBar { 
                              background-color : var(--color1)  !important;
                              color : var(--color2)  !important;
                              font-weight : 700  !important;
                              cursor : pointer  !important;
                              transition-duration : 0.4s   !important;
                          }
              
                          .myButtonNavBar:hover {
                              background-color : white  !important;
                              color : var(--color1) !important;
                              border : 2px solid var(--color1) !important;
                          } 
                  </style>
                  `;
  
          button.setAttribute(
            "onclick",
            `window.exFunctions.fireOnClickButtonNavBar( "${myButtonNavBarId}");`
          );
  
          // Cr??ation du div
          //////////////////////////////////////////////
          var divMyBouton = document.createElement("div");
          //divMyBouton.innerHTML = 'Hi there!';
  
          //add style css
          divMyBouton.insertAdjacentHTML("afterbegin", myButtonNavBarCSSStyle);
  
          //Ajout du bouton dans le div.
          divMyBouton.appendChild(button);
  
          // Ajout du nouveau div dans le menu
          //////////////////////////////////////////////
          myMenuTop.append(divMyBouton);
        } else cosole.log("exButtonNavBar : navigation bar not found !");
  
        ret(button != null && myMenuTop != null);
      } catch (err) {
        var msgErr =
          err.message + " ?? la ligne " + err.line + ", colonne " + err.column;
  
        return ret(msgErr);
      }
    }
  
    function exButtonNavBarTravaux(fnt, params, db, ret) {
      //debugger;
      try {
        var myButtonNavBarTitle = params.title;
        var myButtonNavBarId = params.buttonId;
        //        var myButtonNavBarId = generateUniqueId("buttonNavBarId");
  
        var button = document.getElementById(myButtonNavBarId);
        var myMenuTop = document.getElementsByClassName("hud-menu-right")[0];
  
        if (myMenuTop) {
          if (!button) {
            // Cr??ation du bouton
            var button = document.createElement("button");
          }
  
          button.id = myButtonNavBarId;
          button.innerText = myButtonNavBarTitle;
          button.setAttribute(
            "class",
            "hud-menu-button menu-nav i-light-grey myButtonNavBarTravaux"
          );
          button.style.border = "none";
  
          var myButtonNavBarCSSStyle = ` 
                  <style> 
                      :root{
                          --color1Travaux : 	green;
                          --color2Travaux :  white
                          }
      
                          .myButtonNavBarTravaux { 
                              background-color : var(--color1Travaux)  !important;
                              color : var(--color2Travaux)  !important;
                              font-weight : 700  !important;
                              cursor : pointer  !important;
                              transition-duration : 0.4s   !important;
                          }
              
                          .myButtonNavBarTravaux:hover {
                              background-color : white  !important;
                              color : var(--color1Travaux) !important;
                              border : 2px solid var(--color1Travaux) !important;
                          } 
                  </style>
                  `;
  
          button.setAttribute(
            "onclick",
            `window.exFunctions.fireOnClickButtonNavBarTravaux( "${myButtonNavBarId}");`
          );
  
          // Cr??ation du div
          //////////////////////////////////////////////
          var divMyBouton = document.createElement("div");
          //divMyBouton.innerHTML = 'Hi there!';
  
          //add style css
          divMyBouton.insertAdjacentHTML("afterbegin", myButtonNavBarCSSStyle);
  
          //Ajout du bouton dans le div.
          divMyBouton.appendChild(button);
  
          // Ajout du nouveau div dans le menu
          //////////////////////////////////////////////
          myMenuTop.append(divMyBouton);
        } else cosole.log("exButtonNavBar : navigation bar not found !");
  
        ret(button != null && myMenuTop != null);
      } catch (err) {
        var msgErr =
          err.message + " ?? la ligne " + err.line + ", colonne " + err.column;
  
        return ret(msgErr);
      }
    }
  
    function exButtonNavBarActions(fnt, params, db, ret) {
      //debugger;
      try {
        var myButtonNavBarTitle = params.title;
        var myButtonNavBarId = params.buttonId;
        //        var myButtonNavBarId = generateUniqueId("buttonNavBarId");
  
        var button = document.getElementById(myButtonNavBarId);
        var myMenuTop = document.getElementsByClassName("hud-menu-right")[0];
  
        if (myMenuTop) {
          if (!button) {
            // Cr??ation du bouton
            var button = document.createElement("button");
          }
  
          button.id = myButtonNavBarId;
          button.innerText = myButtonNavBarTitle;
          button.setAttribute(
            "class",
            "hud-menu-button menu-nav i-light-grey myButtonNavBarActions"
          );
          button.style.border = "none";
  
          var myButtonNavBarCSSStyle = ` 
                  <style> 
                      :root{
                      --color1Actions : 	#00ff40;
                      --color2Actions :  gray
                      }
  
                      .myButtonNavBarActions { 
                          background-color : var(--color1Actions)  !important;
                          color : var(--color2Actions)  !important;
                          font-weight : 700  !important;
                          cursor : pointer  !important;
                          transition-duration : 0.4s   !important;
                      }
          
                      .myButtonNavBarActions:hover {
                          background-color : white  !important;
                          color : var(--color1Actions) !important;
                          border : 2px solid var(--color1Actions) !important;
                      } 
                  </style>
                  `;
  
          button.setAttribute(
            "onclick",
            `window.exFunctions.fireOnClickButtonNavBarActions( "${myButtonNavBarId}");`
          );
  
          // Cr??ation du div
          //////////////////////////////////////////////
          var divMyBouton = document.createElement("div");
          //divMyBouton.innerHTML = 'Hi there!';
  
          //add style css
          divMyBouton.insertAdjacentHTML("afterbegin", myButtonNavBarCSSStyle);
  
          //Ajout du bouton dans le div.
          divMyBouton.appendChild(button);
  
          // Ajout du nouveau div dans le menu
          //////////////////////////////////////////////
          myMenuTop.append(divMyBouton);
        } else cosole.log("exButtonNavBar : navigation bar not found !");
  
        ret(button != null && myMenuTop != null);
      } catch (err) {
        var msgErr =
          err.message + " ?? la ligne " + err.line + ", colonne " + err.column;
  
        return ret(msgErr);
      }
    }
  
    function exAddStyleToHead(style) {
      /* Create style element */
      var css = document.createElement("style");
      if (css.styleSheet) css.styleSheet.cssText = style;
      else css.appendChild(document.createTextNode(style));
  
      /* Append style to the head element */
      document.getElementsByTagName("head")[0].appendChild(css);
    }
  
    function exSelectionAutocomplete(fnt, params, db, ret) {
      try {
        //Create input with autocomplete features
        var mySAPlaceholder = params.placeholder;
        var myInputID = params.buttonId;
        var myDATA = params.data;
  
        var myInput = document.getElementById(myInputID);
        var myMenuTop = document.getElementsByClassName("hud-menu-center")[0];
  
        var myFilterOpacity = document.getElementById("opaque");
  
        if (myMenuTop) {
          if (!myInput) {
            // Cr??ation du input de recherche
            myInput = document.createElement("input");
            myInput.id = myInputID;
            myInput.setAttribute("autofocus", "");
            myInput.setAttribute("type", "text");
            myInput.setAttribute("name", "q");
            myInput.setAttribute("placeholder", mySAPlaceholder);
            myInput.setAttribute(
              "style",
              "width:100%; max-width: 700px; outline: 0; font-size: 1.8em; background-color: rgb(255,112,67); color:white; border : 2px solid gray; padding-left:10px;"
            );
            myInput.setAttribute("class", "myButtonNavBarSearch");
          }
  
          if (!myFilterOpacity) {
            // Cr??ation du div pour appliquer le filtre d'opacit?? lors de la recherche dans le input
            myFilterOpacity = document.createElement("div");
            myFilterOpacity.id = "opaque";
            var myHudBody = document.getElementsByClassName("hud-body")[0];
            myHudBody.insertBefore(myFilterOpacity, myHudBody.firstChild);
          }
  
          //mySA.id = mySAId;
          //mySA.innerText = mySAPlaceholder;
          //mySA.setAttribute("class", "hud-menu-button menu-nav i-light-grey pure-form myButtonNavBarSearch");
          //mySA.style.border = "none";
  
          var myButtonNavBarCSSStyle = ` 
                  <style> 
                      .myButtonNavBarSearch { 
                          background-color : white !important;
                          color : gray !important;
                          border : 2px solid #ff7043 !important;
                          font-weight : 700;
                          cursor : pointer;
                          transition-duration : 0.4s;
                      }
  
                      .myButtonNavBarSearch:hover {
                          background-color : white !important;
                          color : gray !important;
                          border : 2px solid #ff7043 !important;
                      } 
  
                      .autocomplete-suggestions {
                          text-align: left; 
                          cursor: default; 
                          border: 1px solid #ccc; 
                          border-top: 0; 
                          background: #fff; 
                          box-shadow: -1px 1px 3px rgba(0,0,0,.1);
                      
                          /* core styles should not be changed */
                          position: absolute; 
                          display: none; 
                          z-index: 9999; 
                          max-height: 254px; 
                          overflow: hidden; 
                          overflow-y: auto; 
                          box-sizing: border-box;
                      }
  
                      .autocomplete-suggestion { 
                          position: relative; 
                          padding: 0 .6em; 
                          line-height: 53px; 
                          white-space: nowrap; 
                          overflow: hidden; 
                          text-overflow: ellipsis; 
                          font-size: 2.8em; 
                          color: #333; 
                      }
  
                      .autocomplete-suggestion b { 
                          font-weight: normal; 
                          /*color: #1f8dd6;*/
                          color: #ff7043; 
  
                      }
  
                      .autocomplete-suggestion.selected { 
                          background: #f0f0f0; 
                      }
  
                      #opaque {
                          position: fixed;
                          width: 100%;
                          height: 100%;
                          z-index: 98;
                          display: none;
                          background-color: black;
                          opacity: 0.85;
                      }
                  </style>
                  `;
  
          exAddStyleToHead(myButtonNavBarCSSStyle);
  
          // Ajout du input dans le menu hud-menu-center
          //////////////////////////////////////////////
          myMenuTop.insertAdjacentHTML("afterend", myInput.outerHTML);
  
          /* Assignation de l'autocompletation ?? l'input ------------- */
          var myInputWithAutocomplete = new autoComplete({
            selector: "#" + myInputID,
            minChars: 1,
            source: function (term, suggest) {
              //debugger;
              term = term.toLowerCase();
              var choices = myDATA;
              var suggestions = [];
              for (i = 0; i < choices.length; i++)
                if (~choices[i].toLowerCase().indexOf(term))
                  suggestions.push(choices[i]);
              suggest(suggestions);
            },
            offsetTop: 0,
            onSelect: function (e, term, item) {
              //console.log('Item "'+item.getAttribute('data-langname')+' ('+item.getAttribute('data-lang')+')" selected by '+(e.type == 'keydown' ? 'pressing enter' : 'mouse click')+'.');
              //document.getElementById('advanced-demo').value = item.getAttribute('data-langname')+' ('+item.getAttribute('data-lang')+')';
              //alert("je suis dans la fonction onSelect 2");
              var myIdCustomer = item.innerText
                .split("|")
                .pop()
                .split(/\s+/)
                .join("");
  
              //alert("Valeur de mon item myIdCustomer: ->"+myIdCustomer+"<-");
              window.exFunctions.fireOnSelectAutocompleteNavBar(
                myInputID,
                myIdCustomer
              );
  
              //Mise ?? z??ro arp??s la s??lection
              document.getElementById(myInputID).value = "";
            },
          });
        } else cosole.log("exSelectionAutocomplete : navigation bar not found !");
  
        ret(mySA != null && myMenuTop != null);
      } catch (err) {
        var msgErr =
          err.message + " ?? la ligne " + err.line + ", colonne " + err.column;
  
        return ret(msgErr);
      }
    }
  
   
  
    exFunctions.addExFunction("exButton", exButton);
    exFunctions.addExFunction("exButtonNavBar", exButtonNavBar);
    exFunctions.addExFunction("exButtonNavBarTravaux", exButtonNavBarTravaux);
    exFunctions.addExFunction("exButtonNavBarActions", exButtonNavBarActions);
    exFunctions.addExFunction("exSelectionAutocomplete", exSelectionAutocomplete);
  


  

  
    
  })();

/*
    JavaScript autoComplete v1.0.4
    Copyright (c) 2014 Simon Steinberger / Pixabay
    GitHub: https://github.com/Pixabay/JavaScript-autoComplete
    License: http://www.opensource.org/licenses/mit-license.php
*/
var autoComplete = (function () {
    // "use strict";
    function autoComplete(options) {
      if (!document.querySelector) return;
  
      // helpers
      function hasClass(el, className) {
        return el.classList
          ? el.classList.contains(className)
          : new RegExp("\\b" + className + "\\b").test(el.className);
      }
  
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent("on" + type, handler);
        else el.addEventListener(type, handler);
      }
      function removeEvent(el, type, handler) {
        // if (el.removeEventListener) not working in IE11
        if (el.detachEvent) el.detachEvent("on" + type, handler);
        else el.removeEventListener(type, handler);
      }
      function live(elClass, event, cb, context) {
        addEvent(context || document, event, function (e) {
          var found,
            el = e.target || e.srcElement;
          while (el && !(found = hasClass(el, elClass))) el = el.parentElement;
          if (found) cb.call(el, e);
        });
      }
  
      var o = {
        selector: 0,
        source: 0,
        minChars: 3,
        delay: 150,
        offsetLeft: 0,
        offsetTop: 1,
        cache: 1,
        menuClass: "",
        renderItem: function (item, search) {
          // escape special characters
          search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
          var re = new RegExp("(" + search.split(" ").join("|") + ")", "gi");
          return (
            '<div class="autocomplete-suggestion" data-val="' +
            item +
            '">' +
            item.replace(re, "<b>$1</b>") +
            "</div>"
          );
        },
        onSelect: function (e, term, item) {},
      };
      for (var k in options) {
        if (options.hasOwnProperty(k)) o[k] = options[k];
      }
  
      // init
      var elems =
        typeof o.selector == "object"
          ? [o.selector]
          : document.querySelectorAll(o.selector);
      for (var i = 0; i < elems.length; i++) {
        var that = elems[i];
  
        // create suggestions container "sc"
        that.sc = document.createElement("div");
        that.sc.className = "autocomplete-suggestions " + o.menuClass;
  
        that.autocompleteAttr = that.getAttribute("autocomplete");
        that.setAttribute("autocomplete", "off");
        that.cache = {};
        that.last_val = "";
  
        that.updateSC = function (resize, next) {
          //debugger;
          var rect = that.getBoundingClientRect();
          that.sc.style.left =
            Math.round(
              rect.left +
                (window.pageXOffset || document.documentElement.scrollLeft) +
                o.offsetLeft
            ) + "px";
          that.sc.style.top =
            Math.round(
              rect.bottom +
                (window.pageYOffset || document.documentElement.scrollTop) +
                o.offsetTop
            ) + "px";
          that.sc.style.width = Math.round(rect.right - rect.left) + "px"; // outerWidth
  
          /* START------ ADD BY CISOFT FOR NINOX */
          //that.sc.style.zIndex = "99";
          //that.sc.style.backgroundColor ='white';
          //that.sc.style.fontSize = "x-large";
          /* ------END */
  
          if (!resize) {
            that.sc.style.display = "block";
            if (!that.sc.maxHeight) {
              that.sc.maxHeight = parseInt(
                (window.getComputedStyle
                  ? getComputedStyle(that.sc, null)
                  : that.sc.currentStyle
                ).maxHeight
              );
            }
            if (!that.sc.suggestionHeight)
              that.sc.suggestionHeight = that.sc.querySelector(
                ".autocomplete-suggestion"
              ).offsetHeight;
            if (that.sc.suggestionHeight)
              if (!next) that.sc.scrollTop = 0;
              else {
                var scrTop = that.sc.scrollTop,
                  selTop =
                    next.getBoundingClientRect().top -
                    that.sc.getBoundingClientRect().top;
                if (selTop + that.sc.suggestionHeight - that.sc.maxHeight > 0)
                  that.sc.scrollTop =
                    selTop +
                    that.sc.suggestionHeight +
                    scrTop -
                    that.sc.maxHeight;
                else if (selTop < 0) that.sc.scrollTop = selTop + scrTop;
              }
          }
        };
        addEvent(window, "resize", that.updateSC);
  
        document.body.appendChild(that.sc);
  
        live(
          "autocomplete-suggestion",
          "mouseleave",
          function (e) {
            var sel = that.sc.querySelector(".autocomplete-suggestion.selected");
            if (sel)
              setTimeout(function () {
                sel.className = sel.className.replace("selected", "");
              }, 20);
          },
          that.sc
        );
  
        live(
          "autocomplete-suggestion",
          "mouseover",
          function (e) {
            var sel = that.sc.querySelector(".autocomplete-suggestion.selected");
            if (sel) sel.className = sel.className.replace("selected", "");
            this.className += " selected";
          },
          that.sc
        );
  
        live(
          "autocomplete-suggestion",
          "mousedown",
          function (e) {
            if (hasClass(this, "autocomplete-suggestion")) {
              // else outside click
              var v = this.getAttribute("data-val");
              that.value = v;
              o.onSelect(e, v, this);
              that.sc.style.display = "none";
            }
          },
          that.sc
        );
  
        that.blurHandler = function () {
          try {
            var over_sb = document.querySelector(
              ".autocomplete-suggestions:hover"
            );
          } catch (e) {
            var over_sb = 0;
          }
          if (!over_sb) {
            that.last_val = that.value;
            that.sc.style.display = "none";
            setTimeout(function () {
              that.sc.style.display = "none";
            }, 350); // hide suggestions on fast input
          } else if (that !== document.activeElement)
            setTimeout(function () {
              that.focus();
            }, 20);
  
          /* Start ----- ADD BY CISOFT ------*/
          //On enleve le filtre d'opacit??
          document.getElementById("opaque").style.display = "none";
          /* ------ END*/
        };
        addEvent(that, "blur", that.blurHandler);
  
        var suggest = function (data) {
          var val = that.value;
          that.cache[val] = data;
          if (data.length && val.length >= o.minChars) {
            var s = "";
            for (var i = 0; i < data.length; i++) s += o.renderItem(data[i], val);
            that.sc.innerHTML = s;
            that.updateSC(0);
          } else that.sc.style.display = "none";
        };
  
        that.keydownHandler = function (e) {
          /* Start ----- ADD BY CISOFT ------*/
          //On affiche le filtre d'opacit??
          document.getElementById("opaque").style.display = "block";
          /* ------ END*/
  
          var key = window.event ? e.keyCode : e.which;
          // down (40) arrow down, up (38) arrow up
          if ((key == 40 || key == 38) && that.sc.innerHTML) {
            var next,
              sel = that.sc.querySelector(".autocomplete-suggestion.selected");
            if (!sel) {
              next =
                key == 40
                  ? that.sc.querySelector(".autocomplete-suggestion")
                  : that.sc.childNodes[that.sc.childNodes.length - 1]; // first : last
              next.className += " selected";
              that.value = next.getAttribute("data-val");
            } else {
              next = key == 40 ? sel.nextSibling : sel.previousSibling;
              if (next) {
                sel.className = sel.className.replace("selected", "");
                next.className += " selected";
                that.value = next.getAttribute("data-val");
              } else {
                sel.className = sel.className.replace("selected", "");
                that.value = that.last_val;
                next = 0;
              }
            }
            that.updateSC(0, next);
            return false;
          }
          // esc (27)
          else if (key == 27) {
            that.value = that.last_val;
            that.sc.style.display = "none";
          }
          // enter (13), tab (9)
          else if (key == 13 || key == 9) {
            var sel = that.sc.querySelector(".autocomplete-suggestion.selected");
            if (sel && that.sc.style.display != "none") {
              o.onSelect(e, sel.getAttribute("data-val"), sel);
              setTimeout(function () {
                that.sc.style.display = "none";
              }, 20);
            }
          }
        };
        addEvent(that, "keydown", that.keydownHandler);
  
        that.keyupHandler = function (e) {
          var key = window.event ? e.keyCode : e.which;
          if (!key || ((key < 35 || key > 40) && key != 13 && key != 27)) {
            var val = that.value;
            if (val.length >= o.minChars) {
              if (val != that.last_val) {
                that.last_val = val;
                clearTimeout(that.timer);
                if (o.cache) {
                  if (val in that.cache) {
                    suggest(that.cache[val]);
                    return;
                  }
                  // no requests if previous suggestions were empty
                  for (var i = 1; i < val.length - o.minChars; i++) {
                    var part = val.slice(0, val.length - i);
                    if (part in that.cache && !that.cache[part].length) {
                      suggest([]);
                      return;
                    }
                  }
                }
                that.timer = setTimeout(function () {
                  o.source(val, suggest);
                }, o.delay);
              }
            } else {
              that.last_val = val;
              that.sc.style.display = "none";
            }
          }
        };
        addEvent(that, "keyup", that.keyupHandler);
  
        that.focusHandler = function (e) {
          that.last_val = "\n";
          that.keyupHandler(e);
        };
        if (!o.minChars) addEvent(that, "focus", that.focusHandler);
      }
  
      // public destroy method
      this.destroy = function () {
        for (var i = 0; i < elems.length; i++) {
          var that = elems[i];
          removeEvent(window, "resize", that.updateSC);
          removeEvent(that, "blur", that.blurHandler);
          removeEvent(that, "focus", that.focusHandler);
          removeEvent(that, "keydown", that.keydownHandler);
          removeEvent(that, "keyup", that.keyupHandler);
          if (that.autocompleteAttr)
            that.setAttribute("autocomplete", that.autocompleteAttr);
          else that.removeAttribute("autocomplete");
          document.body.removeChild(that.sc);
          that = null;
        }
      };
    }
    return autoComplete;
  })();
  
  (function () {
    if (typeof define === "function" && define.amd)
      define("autoComplete", function () {
        return autoComplete;
      });
    else if (typeof module !== "undefined" && module.exports)
      module.exports = autoComplete;
    else window.autoComplete = autoComplete;
  })();
  
  console.log('exFnRT charg??');