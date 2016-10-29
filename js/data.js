var dataObj=function()
{
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
	this.gameOver=false;
	this.alpha=0;

}
dataObj.prototype.draw=function()
{
	var w = can1.width;
	var h = can1.height;

	ctx1.fillStyle="white";
	ctx1.save();
	ctx1.font="20px Verdana";
	ctx1.fillText("fruit num :"+this.fruitNum,w*0.5,h*0.5+220);
	ctx1.fillText("score multiple :"+this.double,w*0.5,h*0.5+200);
	ctx1.restore();
	ctx1.fillText("score  :"+this.score,w*0.5,h*0.5+260);
	if (data.gameOver) {
	this.alpha+=deltaTime*0.0005;
	if (this.alpha>=1) {
		this.alpha=1;
	}
	/*ctx1.shadowBlur=10;
	ctx1.shadowColor="white";*/
	ctx1.fillStyle="rgba(255,255,255,"+this.alpha+")";
	ctx1.fillText("Game Over",w*0.5,h*0.5);
	ctx1.fillText("Refresh The Page To Restart",w*0.5,h*0.5+50);
	}
}
dataObj.prototype.addScore=function()
{
	this.score+=this.fruitNum*100*this.double;
	this.fruitNum=0;
	this.double=1;
}