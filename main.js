img="";
status1="";
objects=[];
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
    if(status1!="")
    {
        for(i=0;i<objects.length;i++)
        {
            document.getElementById("status").innerHTML="status : object detected";
            fill('#f54269');
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("royalblue");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
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
        objects=results;
    }
}