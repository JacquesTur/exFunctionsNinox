
function MonObjet(Obj) {
  var zok = "hello";
  ok: "eee";
  !function (obj) {
    var NO = "NonObj";
    obj.y = this.ok;
  }(obj),
    !function (Obj) {
      var O = "Obj";
      Obj.z = zok;
    }(obj);

  function test(Obj) {
    o.t = "t"
  };

};

debugger;
var obj = { a: "a", b: "b" };
var z = MonObjet(obj);

MonObjet().test(Obj);
MonObjet.prototype.spy = function (o) { o.s = zok };
MonObjet.spy(obj);
document.getElementById("demo").innerHTML = MonObjet.toString();