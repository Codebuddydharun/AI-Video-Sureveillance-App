video="";
status="";

function preload(){
    video=createVideo("video.mp4");
    video.hide();    

}

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
}

function start(){
    objectdetector=ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML="Status= Detecting Object";
}

function modelloaded(){
    console.log("Model Loaded");
    status=true;
    video.speed(1);
    video.loop();
    video.volume(0);
}

function draw(){
    image(video,0,0,480,380);
}