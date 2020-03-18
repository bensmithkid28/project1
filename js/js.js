var user = 'Benjamin'
var greetingElement = document.getElementById("greeting");
var greetingMessage = "Hi, Welcome to the Car website!";

greetingElement.textContent = greetingMessage;



document.getElementById("button").onclick = function(){

    document.getElementById("confirm").innerHTML = "Received";
}
document.getElementById("button1").onclick = function(){

    document.getElementById("confirm1").innerHTML = "Received";
}
document.getElementById("button2").onclick = function(){

    document.getElementById("confirm2").innerHTML = "Received";
}

document.getElementById("button3").onclick = function(){

    document.getElementById("confirm3").innerHTML = "Received";
}