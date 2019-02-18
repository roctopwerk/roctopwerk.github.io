document.getElementById("TorF").innerHTML = "Flip";
var TorF = document.getElementById("TorF").innerHTML
var I;
function coin(){
    var x = Math.random();
        if(x >= 0.5){
        document.getElementById("TorF").innerHTML = "Kop";
       } else if(x < 0.5){
        document.getElementById("TorF").innerHTML = "Munt";          
}
    }