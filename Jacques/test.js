debugger;
var retour;
if (args.report && args.records)
    if (util.isValidFileName(args.fileName))
        retour = reports.openDesigner({
            nid : args.id,
            nids: args.records,
            reportName: args.report,
            saveToFileAndClose: function (error, link) {
                debugger;
                error && console.log("printAndSaveRecord failed", e),
                    database.importFileFromURL(args.id, link, args.fileName, (function (erreur) {
                        debugger;
                        erreur && console.warn(erreur),
                            ret(args.id + "/" + args.fileName)
                    }))
            }
        })

    else retour = `Nom de fichier "${args.fileName}" invalide`;
else retour = `arguments report ou record manquant`;
debugger;
return retour;




function r(t, i, o, a, r) {
    var s = Date.now(),
        l = n;
    n++,
    console.log("HTTP Request #" + l, t, i, o, a),
    e.loading(!0);
    var c = {
            body: a || void 0,
            method: t,
            url: i,
            headers: o
        },
        d = function(t, i, o) {
            e.loading(!1);
            var a = Date.now();
            t ? (console.log("HTTP Response #" + l, a - s + "ms", "ERR", i && i.statusCode, t, o), r({
                error: t
            })) : (console.log("HTTP Response #" + l, a - s + "ms", "OK", i && i.statusCode, o), r({
                result: o
            }))
        };
    e.httpProvider(c, d)


    httpProvider: (e, t) => {
        const i = (e.headers || {})["Content-Type"],
            o = /application\/json/i.test(i) || !i;
        $.ajax({
            type: e.method,
            url: e.url,
            processData: !1,
            data: o ? JSON.stringify(e.body) : e.body,
            headers: e.headers,
            xhrFields: {
                withCredentials: !(!e.headers || !e.headers.Authorization)
            },
            success: function(e, i, o) {
                t(void 0, i, e)
            },
            error: function(e, i, o) {
                t("Request has failed: " + i + " - " + o, i, void 0)
            }
        })
    },