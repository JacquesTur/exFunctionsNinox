window.exFnJt = (function () {
  function exAlert(fnt, params, db, ret) {
    alert(params.titre + "<br><br>" + params.message);
    ret();
  }

  function exDebugger(fnt, params, db, ret) {
    debugger;
    ret("Debugger mode");
  }

  function exGetVersion(fnt, params, db, ret) {
    ret(exRevision);
  }

  function exPlus(fnt, params, db, ret) {
    ret(params.A + params.B);
  }

  function exReverse(fnt, params, db, ret) {
    var i = params.nids.slice();
    i.reverse();
    ret(i);
  }

  function exFilesList(fnt, params, db, ret) {
    if (params) {
      var i = [];
      db.loadFiles(params, function (t, r) {
        if (t) console.warn(t);

        if (r) for (var o = 0; o < r.length; o++) i.push(r[o].name);
        ret(i);
      });
    } else ret();
  }

  function exJavaScript(fnt, params, db, ret) {
    var prm = params.args;

    try {
      var fn = Function("args", params.code);
      var Result = fn(params.args);

      ret(Result);
    } catch (err) {
      var msgErr =
        err.message + " à la ligne " + err.line + ", colonne " + err.column;

      return ret(msgErr);
    }
  }

  function exComboBox(fnt, params, db, ret) {
    //debugger;
    try {
      var lst = params.list;
      var strLines = "";
      var i;
      var id = exUtils.generateUniqueId("comboBox");

      var value, label;

      for (i in lst) {
        if (typeof lst[i] == "string") {
          value = lst[i];
          label = lst[i];
        } else {
          value = lst[i].value;
          label = lst[i].label;
        }
        strLines += '<option id="' + value + '"';

        if (value == params.selected) {
          strLines += " selected";
        }
        strLines += ">" + label + "</option>";
      }

    
      var codeHTML =
        "<select class='stringeditor' style='height: 100%; width:100%; overflow:visible; padding:0px; background:none; padding-left:5px' id=" +
        id +
        "  onchange='{" +
        "  var option = this.options[this.options.selectedIndex];" +
        'var err = window.exUtils.fireNxFunction("onSelect", this.id, option.innerText, option.id ); ' +
        " if (err) console.log(err);" +
        "}'" +

        ">" +
        strLines +
        " </select>" +
        "<script>" +
        'var x = document.getElementById("' +
        id +
        '"); ' +
        "var p = x.parentNode; " +
        'p.style.overflow = "visible"; p.style.padding = "0px"; p.style.margin = "0px"; p.id = "coucou";' +
        "</script>";

      console.log(codeHTML);
      ret(codeHTML);
    } catch (err) {
      var msgErr =
        err.message + " à la ligne " + err.line + ", colonne " + err.column;

      return ret(msgErr);
    }
  }

  function exShareFile(fnt, params, db, ret) {
    //debugger;

    database.shareFile(
      exUtils.getId(params.record),
      params.fileName,
      function (erreur, link) {
        if (erreur) return ret(erreur);

        ret(link.url);
      }
    );
  }

  function exRenameFile(fnt, params, db, ret) {
    database.renameFile(
      exUtils.getId(params.record),
      params.oldFileName,
      params.newFileName,
      function (erreur) {
        if (($.loading(!1), erreur))
          return $.alert(locale.couldntRenameFile), ret(false);

        ret(true);
      }
    );
  }

  function exRemoveFile(fnt, params, db, ret) {
    database.removeFile(
      exUtils.getId(params.record),
      params.fileName,
      function (erreur) {
        if (($.loading(!1), erreur))
          return $.alert(locale.couldntRenameFile), ret(false);

        ret(true);
      }
    );
  }

  function exDownloadFile(fnt, params, db, ret) {
    var downloadLink = database.downloadURL(
      exUtils.getId(params.record),
      params.fileName
    );
    var link = document.createElement("a");
    link.href = downloadLink;
    link.download = params.destFileName;
    link.click();
    link.remove();
    console.log(
      "ExDownLoadFile(" +
        exUtils.getId(params.record) +
        ", " +
        params.fileName +
        ")"
    );

    ret(downloadLink);
  }

  function exPrompt(fnt, params, db, ret) {
    var result = {};
    result.value = prompt(params.caption, params.defaultValue);
    result.ok = !!result.value;

    ret(result);
  }

  function exGetComments(fnt, params, db, ret) {
    debugger;
    database.loadComments(exUtils.getId(params.record), function (t, i) {
      var r = [];

      for (c in i) {
        var o = {
          comment: i[c][2],
          id: i[c][1],
          date: new Date(i[c][0]),
        };
        r.push(o);
      }
      debugger;
      ret(r);
    });
  }

  function exSetMultiValues(fnt, params, db, ret) {
    var field;
    var type;
    debugger;
    // récupération de la table (type) et du champ (field)
    if (params.record) {
      type = database.schema.typeOf(params.record._id);
      field = type.findElement(params.field);
      if (field) {
        database.update(
          params.record._id,
          field.id,
          util.multiEncode(params.id),
          null
        );

        ret(params.record[field.id]);
      } else
        ret(
          "Le champ " +
            params.multiFiled +
            " esr introuvable dans la table " +
            type.caption
        );
    } else
      ret(
        "Aucun enregistrement définit dans params.record. Essayez {record:this}"
      );
  }

  function exButtonHeader(fnt, params, db, ret) {
    /*
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

      ret(button != null && myMenuTop != null);
    } catch (err) {
      var msgErr =
        err.message + " à la ligne " + err.line + ", colonne " + err.column;

      return ret(msgErr);
    }
  */
    return ret(exComponentsJT.exButtonHeader( params ));
   }
  //debugger;
  exFunctions.addExFunction();
  exFunctions.addExFunction("exAlert", exAlert);
  exFunctions.addExFunction("exDebugger", exDebugger);
  exFunctions.addExFunction("exGetVersion", exGetVersion);
  exFunctions.addExFunction("exPlus", exPlus);
  exFunctions.addExFunction("exReverse", exReverse);
  exFunctions.addExFunction("exFilesList", exFilesList);
  exFunctions.addExFunction("exJavaScript", exJavaScript);
  exFunctions.addExFunction("exComboBox", exComboBox);
  exFunctions.addExFunction("exShareFile", exShareFile);
  exFunctions.addExFunction("exRenameFile", exRenameFile);
  exFunctions.addExFunction("exRemoveFile", exRemoveFile);
  exFunctions.addExFunction("exDownloadFile", exDownloadFile);
  exFunctions.addExFunction("exPrompt", exPrompt);
  exFunctions.addExFunction("exGetComments", exGetComments);
  exFunctions.addExFunction("exSetMultiValues", exSetMultiValues);
  exFunctions.addExFunction("exButtonHeader", exButtonHeader);
  return {};
})();

console.log("exFnJT chargé");
