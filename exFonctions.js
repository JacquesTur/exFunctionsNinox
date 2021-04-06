alert('début')

this.exFunctions = (function () {
    //debugger;
    //Code d'initialisation des fonctions étendues
    var Ctx = new queries.JSRuntimeContext;

    // Récupération de la function alert de Ninox
    var A = queries.getFunctor('alert', [{ sign: function () { return 'string' } }]);
    var Alert = Ctx.F[A.functorId];

    //Détournement de la fonction eval
    var evalFunctor = queries.getFunctor('eval', [{ sign: function () { return 'string' } }, { sign: function () { return 'nid' } }]);

    //Début des fonctions étendues
    function exAlert(fnt, params, db, ret) {
        alert(params.titre + '<br><br>' + params.message);
        ret();
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
            db.loadFiles(params, (function (t, r) {
                if (t) console.warn(t);

                if (r)
                    for (var o = 0; o < r.length; o++)
                        i.push(r[o].name);
                ret(i);
            }));

        }
        else ret();
    }
    function exJavaScript(fnt, params, db, ret) {
        var prm = params.args;

        try {
            //            var fn = 'function f(args){' + (params.code) + '};f(prm);';
            var fn = Function('args', params.code);
            //          var Result = eval(fn);
            var Result = fn(params.args);

            ret(Result);
        }
        catch (err) {
            var msgErr = err.message + ' à la ligne ' + err.line + ', colonne ' + err.column;

            return ret(msgErr);
        }

    }
    function fireEval(fn, recordId) {


        try {
            var type = database.typeOf(recordId);
            var compile = queries.parseHuman(database.schema, type, unescape(fn), {});
//            compile.flags ^= 16;
//            compile.flags |= 16;
            if (compile.hasErrors()) return 'Erreur d\'expression : ' + compile.errorMessage();
            var result = database.loadNode(recordId, (function (e, i) {
                return e ? 'Failed to load record: ' + e : i ? void compile.evaluate(database, i, (function (error, t) {
                    if (error)
                        return 'Failed to evaluate expression: ' + error;
                    return t;
                })) : 'Record not found: ' + recordId;
            }));
        }
        catch (err) {
            var msgErr = err.message + ' à la ligne ' + err.line + ', colonne ' + err.column;

            return msgErr;
        }
        return result;
    }
    function fireExp(exp, recordId) {


        try {
            if (exp.hasErrors()) return 'Erreur d\'expression : ' + exp.errorMessage();
            var result = database.loadNode(recordId, (function (e, i) {
                return e ? 'Failed to load record: ' + e : i ? void exp.evaluate(database, i, (function (error, t) {
                    if (error)
                        return 'Failed to evaluate expression: ' + error;
                    return t;
                })) : 'Record not found: ' + recordId;
            }));
        }
        catch (err) {
            var msgErr = err.message + ' à la ligne ' + err.line + ', colonne ' + err.column;

            return msgErr;
        }
        return result;
    }
    function generateUniqueId(prefix) {
        var id = prefix.toString();
        var num = 0;
        while (document.getElementById(id)) {
            num++;
            id = prefix.toString() + num.toString();
        }
        return id;
    } 

    function exButton(fnt, params, db, ret) {
        //debugger;
        try {
            //


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


            var myId = generateUniqueId("buttonId");



            var myBadgeVisible = myBadge? `<span class="badge">${myBadgeValue}</span>` : ``;



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
 






/* 
            var codeHTML = '<select class=\'stringeditor\' style=\'height: 100%; width:100%; overflow:visible; padding:0px; background:none; padding-left:5px\' id=' + id +
                '  onchange=\'window.exFunctions.fireSelectComboBox( "' + id + '","' + params.record._id + '")\'>' +
                strLines +
                ' </select>' +
                '<script>' +
                'var x = document.getElementById("' + id + '"); ' +
                'var p = x.parentNode; ' +

                'p.style.overflow = "visible"; p.style.padding = "0px"; p.style.margin = "0px"; p.id = "coucou";' +

                '<\/script>'; */

            console.log(buttonHTML);
            ret(buttonHTML);
        }
        catch (err) {
            var msgErr = err.message + ' à la ligne ' + err.line + ', colonne ' + err.column;

            return ret(msgErr);
        }


    }

    function exComboBox(fnt, params, db, ret) {
        //debugger;
        try {
            //
            var lst = params.list;
            var strLines = '';
            var i;
            var id = generateUniqueId("comboBox");

            var value, label;

            for (i in lst) {
                if (typeof lst[i] == 'string') {
                    value = lst[i];
                    label = lst[i];
                }
                else {
                    value = lst[i].value;
                    label = lst[i].label;
                }
                strLines += '<option id="' + value + '"';

                if (value == params.selected) {
                    strLines += ' selected';
                }
                strLines += '>' + label + '</option>';
            }

            var codeHTML = '<select class=\'stringeditor\' style=\'height: 100%; width:100%; overflow:visible; padding:0px; background:none; padding-left:5px\' id=' + id +
                '  onchange=\'window.exFunctions.fireSelectComboBox( "' + id + '","' + params.record._id + '")\'>' +
                strLines +
                ' </select>' +
                '<script>' +
                'var x = document.getElementById("' + id + '"); ' +
                'var p = x.parentNode; ' +

                'p.style.overflow = "visible"; p.style.padding = "0px"; p.style.margin = "0px"; p.id = "coucou";' +

                '<\/script>';

            console.log(codeHTML);
            ret(codeHTML);
        }
        catch (err) {
            var msgErr = err.message + ' à la ligne ' + err.line + ', colonne ' + err.column;

            return ret(msgErr);
        }


    }
    function exShareFile(fnt, params, db, ret) {


        database.shareFile(params.record._id, params.fileName, (function (erreur, link) {

            if (erreur) return ret(erreur);

            ret(link.url);

        }));
    }
    function exRenameFile(fnt, params, db, ret) {

        database.renameFile(params.record._id, params.oldFileName, params.newFileName, (function (erreur) {
            if ($.loading(!1), erreur)
                return $.alert(locale.couldntRenameFile), ret(false);

            ret(true);
        }));

    }
    function exDownloadFile(fnt, params, db, ret) {

        var downloadLink = database.downloadURL(params.record._id, params.fileName);
        var link = document.createElement('a');
        link.href = downloadLink;
        link.download = params.destFileName;
        link.click();
        link.remove();
        ret(downloadLink);
    }
    function exPrompt(fnt, params, db, ret) {


        var result = {};
        result.value = prompt(params.caption, params.defaultValue);
        result.ok = (!!result.value);

        ret(result);
    }
    //Fin des fonctions étendues

    //Initialise les mise en place des functions étendues au travers de la function eval de Ninox
    if (evalFunctor && Ctx) {
        //sauvegarde de l'ancienne fonction eval, celle qui a les paramètres eval(string,nid)
        if (evalFunctor.argTypes[0] == 'string') {
            evalFunctor.oldFunction = Ctx.F[evalFunctor.functorId];
        }


        //initialisation des nouveaux type de paramètres : eval(any,any)
        evalFunctor.argTypes[0] = 'any';
        evalFunctor.argTypes[1] = 'any';
        evalFunctor.sign = 'eval(any,any)';


        //creation du nouveau tabvleau de function étendu 
        evalFunctor.exFunctions = {};

        //aout des functions dans le tableau
        evalFunctor.exFunctions['exAlert'] = exAlert;
        evalFunctor.exFunctions['exPlus'] = exPlus;
        evalFunctor.exFunctions['exReverse'] = exReverse;
        evalFunctor.exFunctions['exFilesList'] = exFilesList;
        evalFunctor.exFunctions['exJavaScript'] = exJavaScript;
        evalFunctor.exFunctions['exComboBox'] = exComboBox;
        evalFunctor.exFunctions['exShareFile'] = exShareFile;
        evalFunctor.exFunctions['exRenameFile'] = exRenameFile;
        evalFunctor.exFunctions['exDownloadFile'] = exDownloadFile;
        evalFunctor.exFunctions['exPrompt'] = exPrompt;
        evalFunctor.exFunctions['exButton'] = exButton;

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
        evalFunctor.fn = (function (fnt, params, db, ret) {
            //debugger;
            try {
                //Recherche si le premier paramètre de la fonction eval contien strictement le nom d'une fonction étendue 	
                if (evalFunctor.exFunctions[fnt]) {
                    //Si c'est le cas, la fonction correspondante est appelée 
                    evalFunctor.exFunctions[fnt](fnt, params, db, ret)
                }
                else {
                    //Dans le cas contraire, c'est la fonction de Ninox qui est appelée.
                    evalFunctor.oldFunction(fnt, params, db, ret);
                }
            }
            catch (err) {
                //En cas d'erreur, c'est le message d'erreur qui est retourné au travers de la fonction retour "ret". 
                ret(String(err.message));
            }

        });
        Ctx.F[evalFunctor.functorId] = evalFunctor.fn;


        $.alert('Fonctions étendues prêtes à être utilisées');
    }

    function trouverFonctionEvent(expSource, nom) {
        if (expSource.caption == "function()" && expSource.id == nom) {
            return expSource.toHumanString();
        }
        else {
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

        fireSelectComboBox: function (comboBoxId, recordId) {

            var cb = document.getElementById(comboBoxId);
            if (cb) {
                var option = cb.options[cb.options.selectedIndex];

                var o = $(cb),
                    n = o.closest(".component").data("component");


                var expOnclick = queries.parseHuman(database.schema, n.field.type, unescape(n.field.onClick), {});

                var fnOnSelect = trouverFonctionEvent(expOnclick, 'onSelect');
        
                if (!fnOnSelect) {
                    if (n && n.field && n.field.exp && n.field.exp) {
                        fnOnSelect = trouverFonctionEvent(n.field.exp, 'onSelect');
                    }
                }
                if (fnOnSelect) {
                    fnOnSelect += '; \n onSelect("' + escape(option.innerText) + '","' + escape(option.id) + '");';
                    var err = fireEval(fnOnSelect, recordId);
                    if (err) alert(n.field.caption + '.onSelect : ' + err + '\n' + fnOnSelect);

                }



            }
        },

        fireOnClickButton: function (buttonId, recordId) {

            var myButton = document.getElementById(buttonId);
            if (myButton) {


                var o = $(myButton),
                    n = o.closest(".component").data("component");


                var expOnclick = queries.parseHuman(database.schema, n.field.type, unescape(n.field.onClick), {});

                var fnOnClick = trouverFonctionEvent(expOnclick, 'onClick');
        
                if (!fnOnClick) {
                    if (n && n.field && n.field.exp && n.field.exp) {
                        fnOnClick = trouverFonctionEvent(n.field.exp, 'onClick');
                    }
                }
                if (fnOnClick) {
                    fnOnClick += '; \n onClick();';
                    var err = fireEval(fnOnClick, recordId);
                    if (err) alert(n.field.caption + '.onClick : ' + err + '\n' + fnOnClick);

                }



            }
        }
    }

})();

// IMPORTANT : force la mise à jour de Ninox pour prendre en compte les fonctions étendues
//database.setSchema(database.originalSchema);
database.setSchema.compile();
