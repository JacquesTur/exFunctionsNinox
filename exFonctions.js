



window.exFunctions = (function () {

  //Code d'initialisation des fonctions étendues
  var Ctx = new queries.JSRuntimeContext();

  // Récupération de la function alert de Ninox
  var A = queries.getFunctor("alert", [
    {
      sign: function () {
        return "string";
      },
    },
  ]);
  var Alert = Ctx.F[A.functorId];

  //Détournement de la fonction eval
  var evalFunctor = queries.getFunctor("eval", [
    {
      sign: function () {
        return "string";
      },
    },
    {
      sign: function () {
        return "nid";
      },
    },
  ]);


  //Initialise les mise en place des functions étendues au travers de la function eval de Ninox
  if (evalFunctor && Ctx) {
    debugger;
    //sauvegarde de l'ancienne fonction eval, celle qui a les paramètres eval(string,nid)
    if (evalFunctor.argTypes[0] == "string") {
      evalFunctor.oldFunction = Ctx.F[evalFunctor.functorId];
    }

    //initialisation des nouveaux type de paramètres : eval(any,any)
    evalFunctor.argTypes[0] = "any";
    evalFunctor.argTypes[1] = "any";
    evalFunctor.sign = "eval(any,any)";

    //creation du nouveau tabvleau de function étendu
    evalFunctor.exFunctions = {};

    //aout des functions dans le tableau


    /*
        mise en palce de la nouvelle function eval dans le tableau des fonctions de Ninox. 
        C'est dans ce tableau que sont répertorié toutes les functions de Ninox.
        Un autre tableau repertorie les confguration des functions.
        Les paramètres sont les suivants.
        Dans le cas d'un appel à la fonction eval d'origine :
    
            fnt : Code Ninox à evaluer.
            params : Enregistrement courant (this) qui servira de context pour évaluer le code fnt.
    
        Dans le cas d'un appel aux fonctions étendues :
            fnt : chaine de caractère qui contine soit le nom de la fonction étendue.
            params : objet qui contien les paramuètres d'appele des functions étendu.
    
        dans les deux cas :
            db : objet database.
            ret : function à appeler à la fin de la function. Les functions sont appellée par empilement. 
                    Quand la première a finie, elle appelle la suivant.
        
        */
    evalFunctor.fn = function (fnt, params, db, ret) {
      //debugger;
      try {
        //Recherche si le premier paramètre de la fonction eval contien strictement le nom d'une fonction étendue
        if (evalFunctor.exFunctions[fnt]) {
          //Si c'est le cas, la fonction correspondante est appelée

          evalFunctor.exFunctions[fnt](fnt, params, db, ret);
        } else {
          //Dans le cas contraire, c'est la fonction de Ninox qui est appelée.
          evalFunctor.oldFunction(fnt, params, db, ret);
        }
      } catch (err) {
        //En cas d'erreur, c'est le message d'erreur qui est retourné au travers de la fonction retour "ret".
        ret(String(err.message));
      }
    };
    Ctx.F[evalFunctor.functorId] = evalFunctor.fn;



    function aa() {
      debugger;

      var options = {
        nid: '" + string(this.ID) + "',
        exp: "Texte:=now(); 1+2;",
      };

      var adrScript = Address + "/" + Script;
      var fileModule = new XMLHttpRequest();
      fileModule.addEventListener("load", function fLoad() {
        try {
          console.log("script chargé : " + this.responseText);
          return this.responseText;
        } catch (err) {
          console.log(" erreur au chargement de " + Script + " : " + err);
          return err;
        }
      });
      // Avec le paramètre false dans la fonction open, le send sera exécuté en synchrone,
      // s'est à dire qu'il n'en sortira qu'apèrs avoir reçu le message retour du serveur et
      // écecuté l'évanement 'load'.
      fileModule.open(
        "POST",
        database.server.baseURL + "/json/evaluate",
        false
      );
      fileModule.send();
    }

    // Acitvation des fonctions sendCommande et queryConnection
    if (!window.database.sendCommand) {
      window.database.sendCommand = function (connection, fn) {
        debugger;
        if ((connection.connectionName.connectionName = "JavaScrip")) {
          try {
            var cmd = new Function('callbakc', connection.connectionName.command);
            connection.a(null, cmd(fn));
          } catch (err) {
            var msgErr =
              err.message +
              " à la ligne " +
              err.line +
              ", colonne " +
              err.column;

            connection.command(msgErr, null);
          }
        }
      };
    }

    // $.alert('Fonctions étendues prêtes à être utilisées - ' + revision);
  }

  function trouverFonctionEvent(expSource, nom) {
    if (expSource.caption == "function()" && expSource.id == nom) {
      return expSource.toHumanString();
    } else {
      if (expSource.exps) {
        for (i in expSource.exps) {
          var exp = expSource.exps[i];
          if (exp.caption == "function()" && exp.id == nom) {
            //debugger;
            return exp.toHumanString();
          }
        }
      }
    }
  }

  return {
    addExFunction(functionName, fnt) {
      evalFunctor.exFunctions[functionName] = fnt;
    },
    fireSelectComboBox: function (comboBoxId, recordId) {
      var cb = document.getElementById(comboBoxId);
      if (cb) {
        var option = cb.options[cb.options.selectedIndex];

        var o = $(cb),
          n = o.closest(".component").data("component");

        var expOnclick = queries.parseHuman(
          database.schema,
          n.field.type,
          unescape(n.field.onClick),
          {}
        );

        var fnOnSelect = trouverFonctionEvent(expOnclick, "onSelect");

        if (!fnOnSelect) {
          if (n && n.field && n.field.exp && n.field.exp) {
            fnOnSelect = trouverFonctionEvent(n.field.exp, "onSelect");
          }
        }
        if (fnOnSelect) {
          fnOnSelect +=
            '; \n onSelect("' +
            escape(option.innerText) +
            '","' +
            escape(option.id) +
            '");';
          var err = exUtils.fireEval(fnOnSelect, recordId);
          if (err)
            console.log(n.field.caption + ".onSelect : " + err + "\n" + fnOnSelect);
        }
      }
    },

    fireOnClickButton: function (buttonId, recordId) {
      var myButton = document.getElementById(buttonId);
      if (myButton) {
        var o = $(myButton),
          n = o.closest(".component").data("component");

        var expOnclick = queries.parseHuman(
          database.schema,
          n.field.type,
          unescape(n.field.onClick),
          {}
        );

        var fnOnClick = trouverFonctionEvent(expOnclick, "onClick");

        if (!fnOnClick) {
          if (n && n.field && n.field.exp && n.field.exp) {
            fnOnClick = trouverFonctionEvent(n.field.exp, "onClick");
          }
        }
        if (fnOnClick) {
          fnOnClick += "; \n onClick();";
          var err = exUtils.fireEval(fnOnClick, recordId);
          if (err)
            console.log(n.field.caption + ".onClick : " + err + "\n" + fnOnClick);
        }
      }
    },

    fireOnClickButtonNavBar: function (buttonNavBarId) {
      bt = document.getElementById(buttonNavBarId);
      console.log(
        "exButtonNavBar.onclick:" +
        exUtils.fireEvalGlobal(
          'onClickButtonNavBarNinox("' +
          buttonNavBarId +
          '","' +
          bt.innerText +
          '")'
        )
      );
    },

    fireOnClickButtonNavBarTravaux: function (buttonNavBarId) {
      bt = document.getElementById(buttonNavBarId);
      console.log(
        "exButtonNavBar.onclick:" +
        exUtils.fireEvalGlobal(
          'onClickButtonNavBarNinoxTravaux("' +
          buttonNavBarId +
          '","' +
          bt.innerText +
          '")'
        )
      );
    },

    fireOnClickButtonNavBarActions: function (buttonNavBarId) {
      bt = document.getElementById(buttonNavBarId);
      console.log(
        "exButtonNavBar.onclick:" +
        exUtils.fireEvalGlobal(
          'onClickButtonNavBarNinoxActions("' +
          buttonNavBarId +
          '","' +
          bt.innerText +
          '")'
        )
      );
    },

    fireOnSelectAutocompleteNavBar: function (buttonNavBarId, myIdCustomer) {
      // alert("je selectionne un element : ->"+buttonNavBarId+"<-"+"et son ID : ->"+myIdCustomer+"<-");
      bt = document.getElementById(buttonNavBarId);
      console.log(
        "exButtonNavBar.onclick:" +
        exUtils.fireEvalGlobal(
          'onSelectCustomerNinoxNavBar("' +
          buttonNavBarId +
          '","' +
          myIdCustomer +
          '")'
        )
      );
      //console.log('exButtonNavBar.onclick:' + exUtils.fireEvalGlobal('onSelectCustomerNinoxNavBar("' + buttonNavBarId + '","' + myIdCustomer + '")'));
    },
  };
})();

console.log('exFonctions chargé');




