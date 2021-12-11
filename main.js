x = 0
y = 0
Draw_Circle=""
Draw_Rect=""

var SpeechRecognition=window.webkitSpeechRecognition
var recognition=new SpeechRecognition()

function start(){
    document.getElementById("status").innerHTML="the system is listening. Pls speak to bring a meaning to my existence: "
    recognition.start()
}

recognition.onresult=function (event){
    console.log(event)
    var content=event.results[0][0].transcript
    document.getElementById('status').innerHTML="I think you are saying: " + content
    if(content == "circle." || content == "Circle."){
        x = Math.floor(Math.random()* 900)
        y=  Math.floor(Math.random()* 600)
        document.getElementById("status").innerHTML="I am Drawing a circle "
        Draw_Circle="set" 
    }
    if(content == "Rectangle." || content == "rectangle."){
        x = Math.floor(Math.random()* 900)
        y=  Math.floor(Math.random()* 600)
        document.getElementById("status").innerHTML="I am Drawing a rectangle "
        Draw_Rect="set"
    }
}

function setup(){
    canvas=createCanvas(900,600)
}

function draw(){
    if(Draw_Circle == "set"){
        radius=Math.floor(Math.random()* 100)
        circle(x,y,radius)
        document.getElementById("status").innerHTML="Your circle is drawn IDIOT! "
        Draw_Circle=""
    }
    if(Draw_Rect == "set"){
        rect(x,y,80,60)
        document.getElementById("status").innerHTML="Your rectangle is drawn IDIOT! "
        Draw_Rect=""
    }
}