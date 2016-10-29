var can1;
var can2;
var canWidth;
var canHeight;
var ctx1;
var ctx2;
var lastTime;
var deltaTime;
var bgPic= new Image();
var ane;
var fruit;
var mom;
var mx;
var my;
var baby;
var babyTail=[];
var babyEye=[];
var babyBody=[];

var momTail=[];
var momEye=[];
var momBodyOra=[];
var momBodyBlue=[];

var data;
var wave;
var halo;

var dust;
var dustPic=[];

document.body.onload=game();
function game(){
	init();
	lastTime=Date.now();
	deltaTime=0; 
	gameLoop();
}
function init(){
	//获得canvas 的context
can1=document.getElementById("canvas1");//fishes dust ui circle
ctx1=can1.getContext('2d');
can2=document.getElementById("canvas2");//backgrousn
ctx2=can2.getContext('2d');
can1.addEventListener('mousemove',onMouseMove,false);
bgPic.src="./src/background.jpg";
canHeight=can1.height;
canWidth=can1.width;
ane =new aneObj();
ane.init();
fruit= new fruitObj();
fruit.init();
mom=new momObj();
mom.init();
baby=new babyObj();
baby.init();
data = new dataObj();
wave = new waveObj();
wave.init();
halo = new haloObj();
halo.init();
mx=canWidth*0.5;
my=canHeight*0.5;
for (var i = 0; i < 8; i++) {
    babyTail[i]= new Image();
    babyTail[i].src="./src/babyTail"+i+".png";
}
for (var i = 0; i < 2; i++) {
    babyEye[i]=new Image();
    babyEye[i].src="./src/babyEye"+i+".png";
}
for (var i = 0; i < 20; i++) {
    babyBody[i]=new Image();
    babyBody[i].src="./src/babyFade"+i+".png";
}
for (var i = 0; i < 8; i++) {
   momTail[i]=new Image();
   momTail[i].src="./src/bigTail"+i+".png";
}
for (var i = 0; i < 2; i++) {
   momEye[i]=new Image();
   momEye[i].src="./src/bigEye"+i+".png";
}
for (var i = 0; i <8; i++) {
    momBodyOra[i]=new Image();
    momBodyOra[i].src="./src/bigSwim"+i+".png";
    momBodyBlue[i]=new Image();
    momBodyBlue[i].src="./src/bigSwimBlue"+i+".png";
}
ctx1.font="30px Verdana";
ctx1.textAlign="center";
dust=new dustObj();
dust.init();
for (var i = 0; i < 7; i++) {
    dustPic[i]=new Image();
    dustPic[i].src="./src/dust"+i+".png";
}
}
function gameLoop()
{
	window.requestAnimationFrame(gameLoop);
	var now = Date.now();
     deltaTime=now - lastTime;
     lastTime=now;
     if (deltaTime>40) {
        deltaTime=40;
     }
	drawbackground();
    ane.draw();
    fruitMonitor();
    fruit.draw();
    
    ctx1.clearRect(0,0,canWidth,canHeight);
    mom.draw();
    momFruitCollision();  
    baby.draw();
    data.draw();
    wave.draw();
    momBabyCollision();
    halo.draw();
    dust.draw();
	//setInterval,setTimeout() frame per second 在不同的浏览器上需要进行配饰
   // console.log("loop"); 改变运动速度
     
   //console.log(deltaTime);
   
}
function onMouseMove(e)
{
  /*  var canvasPosition = { 
    x: can1.offset().left,
    y: can1.offset().top 
    }*/
    if (Modernizr.touch) { //global variable detecting touch support 
        if (e.touches && e.touches.length > 0) { 
            mx = e.touches[0].pageX ; 
            my = e.touches[0].pageY ; 
        } 
    } 
    else{
        if ((e.offSetX||e.layerX)&&!data.gameOver) {
        mx = e.offSetX==undefined?e.layerX:e.offSetX;
        my = e.offSetY==undefined?e.layerY:e.offSetY;
} 
    }

}