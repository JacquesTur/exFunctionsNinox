this.exRevision = "rev 0.00.00.23b";

console.log("exVersion chargé");

var configButton = {
    buttonId: 'JT',
    title: 'Tableau de bord',
    color: 'grey',
    icon: 'home',
    onclick: `popupRecord(first(select 'Tableau de bords'));`
};
exButtonHeader(configButton);