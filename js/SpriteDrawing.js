//below design pattern seems to work
//note: the 5 year old answer code does NOT... so this is a tricky workthrough
var img = new Image();
// declare a function to call once the image has loaded
img.onload = function(){
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  context.drawImage(img, 0,0);
}
// now set the image's src
img.src = "js/sprites/spr_balloon.png";

//CAN run debugger through Chrome, but not 'Chrome against localhost', need to 
//delecte the .vscode file generated so to run with the better out-of-the-box settings