

function generate(){
    var num1 =Math.floor(Math.random()* 10);
    var num2 =Math.floor(Math.random()* 10);
    var num3 =Math.floor(Math.random()* 10);
    var num4 =Math.floor(Math.random()* 10);
    var num5 =Math.floor(Math.random()* 10);
    var num6 =Math.floor(Math.random()* 10);
    
    var color = "#"+num1+num2+num3+num4+num5+num6;
    document.getElementById("TorF").style = "background-color:" + color + ";";
    document.getElementById("button2").innerHTML = color;
}

function copy() {
  var copyText = document.getElementById("button2");
  copyText.select();
  document.execCommand("copy");
}