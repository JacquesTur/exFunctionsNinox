window.exFnJt = (function () {
    
    exFunctions.addExFunction()
    exFunctions.addExFunction('exAlert', exAlert);
    exFunctions.addExFunction('exGetVersion', exGetVersion);
    exFunctions.addExFunction('exPlus', exPlus);
    exFunctions.addExFunction('exReverse', exReverse);
    exFunctions.addExFunction('exFilesList', exFilesList);
    exFunctions.addExFunction('exJavaScript', exJavaScript);
    exFunctions.addExFunction('exComboBox', exComboBox);
    exFunctions.addExFunction('exShareFile', exShareFile);
    exFunctions.addExFunction('exRenameFile', exRenameFile);
    exFunctions.addExFunction('exRemoveFile', exRemoveFile);
    exFunctions.addExFunction('exDownloadFile', exDownloadFile);
    exFunctions.addExFunction('exPrompt', exPrompt);
    return {
    exAlert: function (fnt, params, db, ret) {
            alert(params.titre + '<br><br>' + params.message);
            ret();
        },

    exGetVersion: function (fnt, params, db, ret) {
            debugger;
            ret(revision + exUtils.test());
        },

    exPlus: function (fnt, params, db, ret) {
            ret(params.A + params.B);
        },

    exReverse: function (fnt, params, db, ret) {
            var i = params.nids.slice();
            i.reverse();
            ret(i);
        },

    exFilesList: function (fnt, params, db, ret) {
            if (params) {
                var i = [];
                db.loadFiles(params, (function (t, r) {
                    if (t) console.warn(t);

                    if (r)
                        for (var o = 0; o < r.length; o++)
                            i.push(r[o].name);
                    ret(i);
                }));

            } else ret();
        },

    exJavaScript: function (fnt, params, db, ret) {
            var prm = params.args;

            try {
                var fn = Function('args', params.code);
                var Result = fn(params.args);

                ret(Result);
            } catch (err) {
                var msgErr = err.message + ' à la ligne ' + err.line + ', colonne ' + err.column;

                return ret(msgErr);
            }

        },

    exComboBox: function (fnt, params, db, ret) {
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
                    } else {
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
            } catch (err) {
                var msgErr = err.message + ' à la ligne ' + err.line + ', colonne ' + err.column;

                return ret(msgErr);
            }


        },


    exShareFile: function (fnt, params, db, ret) {

            debugger;

            database.shareFile(getId(params.record), params.fileName, (function (erreur, link) {

                if (erreur) return ret(erreur);

                ret(link.url);

            }));
        },

    exRenameFile: function (fnt, params, db, ret) {

            database.renameFile(getId(params.record), params.oldFileName, params.newFileName, (function (erreur) {
                if ($.loading(!1), erreur)
                    return $.alert(locale.couldntRenameFile), ret(false);

                ret(true);
            }));

        },

    exRemoveFile: function (fnt, params, db, ret) {

            database.removeFile(getId(params.record), params.fileName, (function (erreur) {
                if ($.loading(!1), erreur)
                    return $.alert(locale.couldntRenameFile), ret(false);

                ret(true);
            }));

        },

    exDownloadFile: function (fnt, params, db, ret) {


            var downloadLink = database.downloadURL(getId(params.record), params.fileName);
            var link = document.createElement('a');
            link.href = downloadLink;
            link.download = params.destFileName;
            link.click();
            link.remove();
            console.log("ExDownLoadFile(" + getId(params.record) + ", " + params.fileName + ")");

            ret(downloadLink);


        },

    exPrompt: function (fnt, params, db, ret) {


            var result = {};
            result.value = prompt(params.caption, params.defaultValue);
            result.ok = (!!result.value);

            ret(result);
        },
    }
})