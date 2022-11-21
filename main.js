status="";
objects=[];

 function preload(){
    img=loadImage('pot.jpg');
 }

 function setup(){
    canvas=createCanvas(640,420);
    canvas.center;
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:detecting objects";
 }

 function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img,gotResult);
 }

 function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
    }