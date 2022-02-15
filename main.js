img = "";
img1= "";
img2= "";
img3= "";
img4="";
img5="";

function preload()
{
    img = loadImage("dog_cat.jpg");
    img1 = loadImage("image-1.jpg");
    img2 = loadImage("image-2.jpg");
    img3 = loadImage("image-3.jpg");
    img4 = loadImage("image-4.jpg");
    img5 = loadImage("image-5.jpg");
}
function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img1,0,0,640,420);
    
    fill("#FF0000");
    text("Door",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);
    
}