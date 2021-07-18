this.exRevision = "rev 0.00.00.22h";

console.log("exVersion chargé");
{
  var option = this.options[this.options.selectedIndex];
  var err = window.exUtils.fireNxFunction(
    "onSelect",
    "undefined",
    option.innerText,
    option.id
  );
  if (err) console.log(err);
}
