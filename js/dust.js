var dustObj = function()
{
	this.x=[];
	this.y=[];
	this.amp=[];
	this.No=[];

	this.alpha;
}
dustObj.prototype.num=30;
dustObj.prototype.init=function()
{
	for (var i = 0; i < this.num; i++)
   {
		this.x[i]=Math.random()*canWidth;
		this.y[i]=Math.random()*canHeight;
		this.amp[i]= Math.random()*25+20;
		this.No[i]=Math.floor(Math.random()*7);

	}
	this.alpha=0;
}
dustObj.prototype.draw=function()
{
	for (var i = 0; i < this.num; i++)
   {    
	   	this.alpha+=deltaTime*0.00003;
	    var l=Math.sin(this.alpha);//l jiushi y
		var no = this.No[i];
		ctx1.drawImage(dustPic[no],this.x[i]+this.amp[i]*l,this.y[i]);

	}
}