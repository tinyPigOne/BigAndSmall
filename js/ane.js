var aneObj=function()
{
    //使用二次贝塞尔曲线产生弯曲效果，使用正弦函数产生摆动效果
    //需要开始点，控制点 以及来回摆动的结束点
    this.rootx=[];
    this.headx=[];
    this.heady=[];
    this.alpha=0;
    this.amp=[];
}
aneObj.prototype.num=50;
aneObj.prototype.init=function()
{
   for (var i = 0; i < this.num; i++) 
   {
         var h=can1.height;
	     this.rootx[i]=i*16+Math.random()*20;//[0.1)
	     this.headx[i]=this.rootx[i];
         this.heady[i]=h-250+Math.random()*50;
         this.amp[i]= Math.random()*50+20;
    }
//console.log("调用了出事话方法");
}
aneObj.prototype.draw=function()
{  
    this.alpha+=deltaTime*0.0009;
    var l=Math.sin(this.alpha);//l jiushi y
	ctx2.save();
	ctx2.globalAlpha=0.7;
	ctx2.lineWidth=20;
    ctx2.lineCap="round";
    ctx2.strokeStyle="#3b154e";
for (var i = 0; i < this.num; i++) {
	//beginPath,moveTo,lineTo,stroke,strokeStyle,LineWidth,lineCap,globalAlpha
    ctx2.beginPath();
    ctx2.moveTo(this.rootx[i],canHeight);
    this.headx[i]=this.rootx[i]+l*this.amp[i];
    ctx2.quadraticCurveTo(this.rootx[i],canHeight-150,this.headx[i],this.heady[i]);   
    ctx2.stroke();
}
    ctx2.restore();
}
