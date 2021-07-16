
window.exUtils = (function () {
  console.log("exutils.constructor");
  return {
    test: function () {
      return "ok";
    },

    getId: function (record) {
      if (typeof record === "string") return record;
      else if (typeof record === "object") return record._id;
      else return null;
    },

    fireEval: function (fn, recordId) {
      try {
        var type = database.typeOf(recordId);
        var compile = queries.parseHuman(
          database.schema,
          type,
          unescape(fn),
          {}
        );
        //            compile.flags ^= 16;
        //            compile.flags |= 16;
        if (compile.hasErrors())
          return "Erreur d'expression : " + compile.errorMessage();
        var result = database.loadNode(recordId, function (e, i) {
          return e
            ? "Failed to load record: " + e
            : i
            ? void compile.evaluate(database, i, function (error, t) {
                if (error) return "Failed to evaluate expression: " + error;
                return t;
              })
            : "Record not found: " + recordId;
        });
      } catch (err) {
        var msgErr =
          err.message + " à la ligne " + err.line + ", colonne " + err.column;

        return msgErr;
      }
      return result;
    },

    fireEvalGlobal: function (fn) {
      var result = "";
      try {
        var compile = queries.parseHuman(
          database.schema,
          null,
          unescape(fn),
          {}
        );

        if (compile.hasErrors())
          return "Erreur d'expression : " + compile.errorMessage();
        compile.evaluate(database, null, function (error, t) {
          if (error) return "Failed to evaluate expression: " + error;
          result = t;
          return t;
        });
      } catch (err) {
        var msgErr =
          err.message + " à la ligne " + err.line + ", colonne " + err.column;

        return msgErr;
      }
      return result;
    },

    fireExp: function (exp, recordId) {
      try {
        if (exp.hasErrors())
          return "Erreur d'expression : " + exp.errorMessage();
        var result = database.loadNode(recordId, function (e, i) {
          return e
            ? "Failed to load record: " + e
            : i
            ? void exp.evaluate(database, i, function (error, t) {
                if (error) return "Failed to evaluate expression: " + error;
                return t;
              })
            : "Record not found: " + recordId;
        });
      } catch (err) {
        var msgErr =
          err.message + " à la ligne " + err.line + ", colonne " + err.column;

        return msgErr;
      }
      return result;
    },

    generateUniqueId: function (prefix) {
      var id = prefix.toString();
      var num = 0;
      while (document.getElementById(id)) {
        num++;
        id = prefix.toString() + num.toString();
      }
      return id;
    },

    findNxComponentByElementId(id) {
      var component = document.getElementById(id);
      return component
        ? (fieldComponent = component.closest(".component"))
        : null;
    },

    getNxFieldDatabyIdComponent(component) {
      return component ? (fieldComponent = component.data("component")) : null;
    },

    extractNxFonctionInScript(fnName, script) {
      var s = script.toString().match(/(function callback.*(do (?=\().*))/g);
      str = str.toString().match(/.[^\(|^\)]*/g);
      debugger;
      var p = 1;
      var r = "";
      for (i in s) {
        r += s[i];
        if (s[i][0] == "(") p++;
        if (s[i][0] == ")") p--;
        if (p <= 0) break;
      }
      return r;
    },

    fireNxFunction: function (fnName, fnScript, recordId) {
      var fn = script + ";\n" + fnName + "(";
      debugger;
      for (let i = 3; i < arguments.length; i++) {
        fn += arguments[i].toString();
        if (i < arguments.length - 1) fn += ", ";
      }
      fn += ");";
      return fireEval( fn, recordId );
    },
  };
})();

console.log('exUtils chargé');