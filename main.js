x = 0;
y = 0;
dc = "";
dr = "";

var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition;

function start(){
    document.getElementById("status").innerHTML = "el sistema esta escuchando, por favor habla";
    recognition.start();
}

recognition.onresult = function(event){

    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "La voz se reconocio como: " + content;
    if(content == "círculo"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Se empezo a dibujar un circulo ";
        dc = "set";
    }
    if(content == "rectángulo"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Se empezo a dibujar un circulo ";
        dr = "set";
    }
}

function setup(){
    canvas = createCanvas(900,600);
}

function draw(){
    if(dc == "set"){
        radius = Math.floor(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Se dibujo un circulo ";
        dc = "";
    }
    if(dr == "set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "Se dibujo un rectangulo ";
        dr = "";
    }
}


