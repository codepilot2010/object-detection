img="";
status1="";
function preload()
{
    img=loadImage('dog_cat.jpg');
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status : detecting objects"
}

function draw()
{
    image(img,0,0,640,420);
    fill('#f54269');
    text("dog",45,75);
    noFill();
    stroke("royalblue");
    rect(30,60,450,350);

    fill("#18f0b6");
    text("cat",320,120);
    noFill();
    stroke("#0fe0f7");
    rect(300,90,270,370);
}

function modelLoaded()
{
    console.log("model is loaded");
    status1=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
    }
}