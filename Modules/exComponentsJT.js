window.exComponentsJT = (function () {
    return {
         exButtonHeader( params ){
            try {
                var myButtonHeaderTitle = params.title;
                var myButtonHeaderId = params.buttonId
                  ? params.buttonId
                  : exUtils.generateUniqueId("exButtonHeader");
                var myIcon = params.icon ? "ic ic-" + params.icon : "";
          
                var button = document.getElementById(myButtonHeaderId);
                var myMenuTop = ui.$adminContainer;
                var color = params.color ? params.color : "blue";
          
                
          
                if (myMenuTop) {
                  if (button) button.remove();
          
                  // Création du bouton
                  var button = document.createElement("div");
          
                  button.id = myButtonHeaderId;
                  button.setAttribute(
                    "class",
                    "nx-button-text "+color
                   // "hud-menu-button menu-nav i-light-grey myButtonHeader "
                  );
              
                  //params.backgroundColor ? button.style.backgroundColor = params.backgroundColor : void 0;
                  //params.fontColor ? button.style.color = params.fontColor : void 0;
            
                  click = () => {
                    if (params.onclick) {
                      var err = window.exUtils.fireEvalGlobal(params.onclick);
                      if (err) console.log(err);            
                    }
                  }
                  button.addEventListener("click", click );
          
                  // Création du div
                  //////////////////////////////////////////////
                  var divMyBouton = document.createElement("div");
          
          
                  if (myIcon) {
                    var icon = document.createElement("span");
          
                    icon.setAttribute("class", "choice-symbol " + myIcon);
          
                    button.appendChild(icon);
                  }
          
                  if (myButtonHeaderTitle) {
                    var caption = document.createElement("span");
                    caption.innerText = myButtonHeaderTitle;
                    button.appendChild(caption);
                  }
          
                  //Ajout du bouton dans le div.
                  divMyBouton.appendChild(button);
          
                  // Ajout du nouveau div dans le menu
                  //////////////////////////////////////////////
             
                  list = myMenuTop.get(0);
                  list.insertBefore(divMyBouton, list.childNodes[0]);
           
                } else cosole.log("exButtonHeader : navigation bar not found !");
          
                return (button != null && myMenuTop != null);
              } catch (err) {
                var msgErr =
                  err.message + " à la ligne " + err.line + ", colonne " + err.column;
          
                return msgErr;
              }
        }
    };
})();