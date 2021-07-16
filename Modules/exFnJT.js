

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
      //
      debugger;

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
        "  onchange='window.exFunctions.fireSelectComboBox( \"" +
        id +
        '","' +
        params.record._id +
        "\")'>" +
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

   function exComboBox(fnt, params, db, ret) {
    //debugger;
    try {
      //
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
        "  onchange='window.exFunctions.fireSelectComboBox( \"" +
        id +
        '","' +
        params.record._id +
        "\")'>" +
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
/*
  function exButtonNavBar(fnt, params, db, ret) {
    //debugger;
    try {
      var myButtonNavBarTitle = params.title;
      var myButtonNavBarId = params.buttonId ? params.buttonId : exUtils.generateUniqueId("exButtonNavBar"); ;
      var myBkColor1 = "red";
      var myFntColor2 = "white";
      if (params.BackgroundColor) myBkColor = params.BackgroundColor;
      if (params.FontColor) myFntColor = params.FntColor;
      //        var myButtonNavBarId = generateUniqueId("buttonNavBarId");

      var button = document.getElementById(myButtonNavBarId);
      var myMenuTop = document.getElementsByClassName("hud-menu-right")[0];
      
      var myOnClick = `<scrip>
      function onClick( btnId ){
        var cmp = exUtils.findNxComponentByElementId(bntId);
        var fieldData = cmd ? exUtils.getNxFieldDatabyIdComponent(cmp) : null;
        var script = fieldData ? fieldData.field.fn  : '';
        var fn = exUtils.extractNxFonctionInScript('onclick', fn);

        exUtils.fireNxFunction( 'onclick', fn, fieldData.field._id);

      }
      </scrip>`;

    

      if (myMenuTop) {
        if (!button) {
          // Création du bouton
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
          `window.exFunctions.fireFunction( "${}", "${myButtonNavBarId}");`
        );

        // Création du div
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
        err.message + " à la ligne " + err.line + ", colonne " + err.column;

      return ret(msgErr);
    }
  }*/
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
  return {};
})();

console.log('exFnJT chargé');