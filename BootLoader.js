
 

   // exFnt = require(rootAddress+'exFonctions.js');

    //Fonction de chargement du code depuis une adresse https
    function LoadScript(Address, Script) {
        debugger;
        console.log(adrScript + ' chargé');
        document.getElementById('myInit').innerText = 'ver : ' + exRevision;

    };

    function aaa(){
        alert('AA');
    }
/*
        var adrScript = Address + '/' + Script
        var oReq = new XMLHttpRequest();

        //Evénement appelé après le chargement
        oReq.addEventListener('load', function fLoad() {

            try {
                console.log('Chargement de ' + adrScript)

                //Création d'une fonction à partir du scrip 
                var fn = Function('rootAddress', this.responseText);

                //Exécution de la fonction (éxécution du script chargé) 
                fn(Address);

                //Mise à jour de l'affichage pour indiquer que le chargement est fini et le numéro de version du code
                console.log(adrScript + ' chargé');
                document.getElementById('myInit').innerText = exRevision;
                debugger;

                //Vérifie si une autre fenêtre popup n'était pas déjà préchargée lors de l'appel à Ninox 
                if (ui.sideEditor.nid && ui.sideEditor.nid != '" + string(this.ID) + "' )  {
                    //Si c'est le cas, alors fermeture de la fenêtre d'initialisation pour laisser apparaitre la fenêtre en dessous
					debugger;
                    ui.closeRecord();
					}
                else
                    //Dans le cas contraire, refaire la même vérification 2 secondes plus tard pour laisser le temps à Ninox de se charger.
                    setTimeout(function () {
                        if (ui.sideEditor.nid && ui.sideEditor.nid != '" + string(this.ID) + "' ) {
							debugger;
							ui.closeRecord();
						}
                    }, 3000);
            } catch (err) {
                // Affichage dans la console des évantuelles erreurs de code survenue lors de l'éxécution de la fonciton fn
                var msgErr = err.message + ' à la ligne ' + err.line + ', colonne ' + err.column;
                console.log(' erreur au chargement de ' + Script + ' : ' + err);
            }
        });

        //Appel du chargement 
        oReq.open('GET', adrScript); oReq.send(); false;
    }*/
