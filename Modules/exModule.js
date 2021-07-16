

var GitHubAddress =  "https://raw.githubusercontent.com/JacquesTur/exFunctionsNinox/master/";

//Ce module est chargé à l'aide du même code que celui ci-dessous.
//Il est appelé comme une fonction avec comme paramètre rootAddress qui indique l'adresse
//de base du serveur pour trouver les autres modules.

window.exModules = (function () {
  console.log("exModule.constructor");
  return {
    loadModule: function (Address, Script, Asynchrone) {
    var rootAdr = Address ? Address : rootAddress
      var adrScript = rootAdr + "/" + Script;
      var fileModule = new XMLHttpRequest();
      fileModule.addEventListener("load", function fLoad() {
        try {
          console.log("Chargement : " + adrScript);
          var fn = Function("rootAddress", this.responseText);
          fn(Address);
          console.log("script chargé : " + adrScript);
        } catch (err) {
          var msgErr =
            err.message + " à la ligne " + err.line + ", colonne " + err.column;
          console.log(" erreur au chargement de " + Script + " : " + err);
        }
      });
      // Avec le paramètre false dans la fonction open, le send sera exécuté en synchrone,
      // s'est à dire qu'il n'en sortira qu'apèrs avoir reçu le message retour du serveur et
      // écecuté l'évanement 'load'.
      console.log("GET : " + adrScript);

      fileModule.open("GET", adrScript, Asynchrone ? Asynchrone : false);
      fileModule.send();
    },
  };
})();

// exemple d'utilitsation :
//exModules.loadModule(rootAddress, "Modules/exUtils.js");

console.log('exModule chargé');