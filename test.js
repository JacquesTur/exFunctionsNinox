<!DOCTYPE html>
<html>
<body>

<p>Click the button to write some text in the new window and the source (parent) window.</p>

<a onclick="myFunction()">Try it</a>

<script>
function myFunction(){
  var myWindow = window.open('', 'myWindow', 'width=640,height=320');
  myWindow.document.write("<video controls autoplay withd='100%' height='100%' src='https://share.ninox.com/osqv91xh47lgblxtkwa4gqxml9cmbiidp0px' onselectstart='return false' oncontextmenu='return false' ondragstart='return false'></video>");
}
</script>
</body>
</html>

