function doGreen(){
    var canvas= document.getElementById("d1");
    canvas.style.backgroundColor = "green";
}

function doColor(){
    var canvas =document.getElementById("d1");
    var colorinput = document.getElementById("clr");
    canvas.style.backgroundColor = colorinput.value;
}