var ball;
var database,position;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    var ballpos=database.ref("ball/position");
    ballpos.on("value",readposition,showerr);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y)
{
    database.ref("ball/position").set({

     x:position.x+x,
     y:position.y+y

    })
}
function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function readposition(data)
{
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
}
function showerr()
{
   console.log("error");
}