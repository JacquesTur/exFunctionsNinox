this.exRevision = "rev 0.00.00.22h";

console.log("exVersion chargé");

var configButton = {
    buttonId: 'JT',
    title: 'Tableau de bord',
    color: 'grey',
    icon: 'home',
    onclick: `popupRecord(first(select 'Tableau de bords'));`
};
exButtonHeader(configButton);