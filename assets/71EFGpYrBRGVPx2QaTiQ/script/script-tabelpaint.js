//defines audio for win page

var audio = new Audio('https://arnomeeuwsen.nl/Media/sounds/victory.wav');
//set all background to orange.
document.getElementById('a1').style.backgroundColor = "orange";
document.getElementById('a2').style.backgroundColor = "orange";
document.getElementById('a3').style.backgroundColor = "orange";
document.getElementById('b1').style.backgroundColor = "orange";
document.getElementById('b2').style.backgroundColor = "orange";
document.getElementById('b3').style.backgroundColor = "orange";
document.getElementById('c1').style.backgroundColor = "orange";
document.getElementById('c2').style.backgroundColor = "orange";
document.getElementById('c3').style.backgroundColor = "orange";

//create variable I

    var I = 0;
//regel 1.
function clickA1(){
    if(document.getElementById('a1').style.backgroundColor == "orange"){
        document.getElementById('a1').style.backgroundColor = "darkgoldenrod";
        I++
    }else if(I >= 10){
            document.getElementById('a1').style = " background-color:transparent; border: none; "
            document.getElementById('a2').style = " background-color:transparent; border: none; "
            document.getElementById('a3').style = " background-color:transparent; border: none; "
            document.getElementById('b1').style = " background-color:transparent; border: none; "
            document.getElementById('b2').style = " background-color:transparent; border: none; "
            document.getElementById('b3').style = " background-color:transparent; border: none; "
            document.getElementById('c1').style = " background-color:transparent; border: none; "
            document.getElementById('c2').style = " background-color:transparent; border: none; "
            document.getElementById('c3').style = " background-color:transparent; border: none; "
            document.getElementById('button').style = " display:block; "
            audio.play();
        I = 10;
    }else{
        document.getElementById('a1').style.backgroundColor = "orange";
    };
};

function clickA2(){
    if(document.getElementById('a2').style.backgroundColor == "orange"){
        document.getElementById('a2').style.backgroundColor = "black";
        I++
    }else if(I >= 10){
            document.getElementById('a1').style = " background-color:transparent; border: none; "
            document.getElementById('a2').style = " background-color:transparent; border: none; "
            document.getElementById('a3').style = " background-color:transparent; border: none; "
            document.getElementById('b1').style = " background-color:transparent; border: none; "
            document.getElementById('b2').style = " background-color:transparent; border: none; "
            document.getElementById('b3').style = " background-color:transparent; border: none; "
            document.getElementById('c1').style = " background-color:transparent; border: none; "
            document.getElementById('c2').style = " background-color:transparent; border: none; "
            document.getElementById('c3').style = " background-color:transparent; border: none; "
            document.getElementById('button').style = " display:block; "
            audio.play();
        I = 10;
    }else{
        document.getElementById('a2').style.backgroundColor = "orange";
    };
};

function clickA3(){
    if(document.getElementById('a3').style.backgroundColor == "orange"){
        document.getElementById('a3').style.backgroundColor = "white";
        I++
    }else if(I >= 10){
            document.getElementById('a1').style = " background-color:transparent; border: none; "
            document.getElementById('a2').style = " background-color:transparent; border: none; "
            document.getElementById('a3').style = " background-color:transparent; border: none; "
            document.getElementById('b1').style = " background-color:transparent; border: none; "
            document.getElementById('b2').style = " background-color:transparent; border: none; "
            document.getElementById('b3').style = " background-color:transparent; border: none; "
            document.getElementById('c1').style = " background-color:transparent; border: none; "
            document.getElementById('c2').style = " background-color:transparent; border: none; "
            document.getElementById('c3').style = " background-color:transparent; border: none; "
            document.getElementById('button').style = " display:block; "
            audio.play();
        I = 10;
    }else{
        document.getElementById('a3').style.backgroundColor = "orange";
    };
};


//regel 2.
function clickB1(){
    if(document.getElementById('b1').style.backgroundColor == "orange"){
        document.getElementById('b1').style.backgroundColor = "aqua";
        I++
    }else if(I >= 10){
            document.getElementById('a1').style = " background-color:transparent; border: none; "
            document.getElementById('a2').style = " background-color:transparent; border: none; "
            document.getElementById('a3').style = " background-color:transparent; border: none; "
            document.getElementById('b1').style = " background-color:transparent; border: none; "
            document.getElementById('b2').style = " background-color:transparent; border: none; "
            document.getElementById('b3').style = " background-color:transparent; border: none; "
            document.getElementById('c1').style = " background-color:transparent; border: none; "
            document.getElementById('c2').style = " background-color:transparent; border: none; "
            document.getElementById('c3').style = " background-color:transparent; border: none; "
            document.getElementById('button').style = " display:block; "
            audio.play();
        I = 10;
    }else{
        document.getElementById('b1').style.backgroundColor = "orange";
    };
};

function clickB2(){
    if(document.getElementById('b2').style.backgroundColor == "orange"){
        document.getElementById('b2').style.backgroundColor = "lime";
        I++
    }else if(I >= 10){
            document.getElementById('a1').style = " background-color:transparent; border: none; "
            document.getElementById('a2').style = " background-color:transparent; border: none; "
            document.getElementById('a3').style = " background-color:transparent; border: none; "
            document.getElementById('b1').style = " background-color:transparent; border: none; "
            document.getElementById('b2').style = " background-color:transparent; border: none; "
            document.getElementById('b3').style = " background-color:transparent; border: none; "
            document.getElementById('c1').style = " background-color:transparent; border: none; "
            document.getElementById('c2').style = " background-color:transparent; border: none; "
            document.getElementById('c3').style = " background-color:transparent; border: none; "
            document.getElementById('button').style = " display:block; "
            audio.play();
        I = 10;
    }else{
        document.getElementById('b2').style.backgroundColor = "orange";
    };
};

function clickB3(){
    if(document.getElementById('b3').style.backgroundColor == "orange"){
        document.getElementById('b3').style.backgroundColor = "red";
        I++
    }else if(I >= 10){
            document.getElementById('a1').style = " background-color:transparent; border: none; "
            document.getElementById('a2').style = " background-color:transparent; border: none; "
            document.getElementById('a3').style = " background-color:transparent; border: none; "
            document.getElementById('b1').style = " background-color:transparent; border: none; "
            document.getElementById('b2').style = " background-color:transparent; border: none; "
            document.getElementById('b3').style = " background-color:transparent; border: none; "
            document.getElementById('c1').style = " background-color:transparent; border: none; "
            document.getElementById('c2').style = " background-color:transparent; border: none; "
            document.getElementById('c3').style = " background-color:transparent; border: none; "
            document.getElementById('button').style = " display:block; "
            audio.play();
        I = 10;
    }else{
        document.getElementById('b3').style.backgroundColor = "orange";
    };
};


//regel 3.
function clickC1(){
    if(document.getElementById('c1').style.backgroundColor == "orange"){
        document.getElementById('c1').style.backgroundColor = "pink";
        I++
    }else if(I >= 10){
            document.getElementById('a1').style = " background-color:transparent; border: none; "
            document.getElementById('a2').style = " background-color:transparent; border: none; "
            document.getElementById('a3').style = " background-color:transparent; border: none; "
            document.getElementById('b1').style = " background-color:transparent; border: none; "
            document.getElementById('b2').style = " background-color:transparent; border: none; "
            document.getElementById('b3').style = " background-color:transparent; border: none; "
            document.getElementById('c1').style = " background-color:transparent; border: none; "
            document.getElementById('c2').style = " background-color:transparent; border: none; "
            document.getElementById('c3').style = " background-color:transparent; border: none; "
            document.getElementById('button').style = " display:block; "
            audio.play();
        I = 10;
    }else{
        document.getElementById('c1').style.backgroundColor = "orange";
    };darkslategrey
};

function clickC2(){
    if(document.getElementById('c2').style.backgroundColor == "orange"){
        document.getElementById('c2').style.backgroundColor = "yellow";
        I++
    }else if(I >= 10){
            document.getElementById('a1').style = " background-color:transparent; border: none; "
            document.getElementById('a2').style = " background-color:transparent; border: none; "
            document.getElementById('a3').style = " background-color:transparent; border: none; "
            document.getElementById('b1').style = " background-color:transparent; border: none; "
            document.getElementById('b2').style = " background-color:transparent; border: none; "
            document.getElementById('b3').style = " background-color:transparent; border: none; "
            document.getElementById('c1').style = " background-color:transparent; border: none; "
            document.getElementById('c2').style = " background-color:transparent; border: none; "
            document.getElementById('c3').style = " background-color:transparent; border: none; "
            document.getElementById('button').style = " display:block; "
            audio.play();
        I = 10;
    }else{
        document.getElementById('c2').style.backgroundColor = "orange";
    };
};

function clickC3(){
    if(document.getElementById('c3').style.backgroundColor == "orange"){
        document.getElementById('c3').style.backgroundColor = "brown";
        I++
    }else if(I >= 10){
            document.getElementById('a1').style = " background-color:transparent; border: none; "
            document.getElementById('a2').style = " background-color:transparent; border: none; "
            document.getElementById('a3').style = " background-color:transparent; border: none; "
            document.getElementById('b1').style = " background-color:transparent; border: none; "
            document.getElementById('b2').style = " background-color:transparent; border: none; "
            document.getElementById('b3').style = " background-color:transparent; border: none; "
            document.getElementById('c1').style = " background-color:transparent; border: none; "
            document.getElementById('c2').style = " background-color:transparent; border: none; "
            document.getElementById('c3').style = " background-color:transparent; border: none; "
            document.getElementById('button').style = " display:block; "
            audio.play();
    }else{
        document.getElementById('c3').style.backgroundColor = "orange";
    };
};
