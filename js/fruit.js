var fruitObj =function(){


this.alive=[];//boolean
this.x=[];
this.y=[];
this.l=[];
this.spd=[];
this.fruitType=[];
this.orange= new Image();
this.blue= new Image();

this.aneNO=[];

}
fruitObj.prototype.num=30;
fruitObj.prototype.init=function()
{
	for (var i = 0; i < this.num; i++) {
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
	    this.fruitType[i]="";
		//this.l[i]=0; l 就是果实的尺寸，可以放在born函数中
		//this.born(i);
    this.aneNO[i]=0;
		this.spd[i]=Math.random()*0.01+0.005;//[0.005,0.015)
	}
	this.orange.src="./src/fruit.png";
	this.blue.src="./src/blue.png";

}
fruitObj.prototype.draw=function()
{
      for (var i = 0; i < this.num; i++) 
      {
              if (this.fruitType[i]=="blue")
              {
              	var pic=this.blue;
              } else {
              	var pic=this.orange;
              }

      	      if (this.alive[i]) {
      	      	if (this.l[i]<=15)
      	       {
                   var no = this.aneNO[i];
                   this.x[i]=ane.headx[no];
                   this.y[i]=ane.heady[no];
                   this.l[i]+=this.spd[i]*deltaTime;
                   ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
      	       }
               else
      	      {
      	      	   this.y[i]-=this.spd[i]*8*deltaTime;
                   ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
      	      }
      	     
              if (this.y[i]<10) 
      	      {
      	   	       this.alive[i]=false;
      	      }
      	      }
      	       
      }
      	     

}
fruitObj.prototype.born=function(i)
{
	  this.aneNO[i]=Math.floor(Math.random()*ane.num);
    this.l[i]=0;
    this.alive[i]=true;
    var flag=Math.random();
    if (flag<0.2) {
     this.fruitType[i]="blue";
    }else{
     this.fruitType[i]="orange";
    }
    
}
/*fruitObj.prototype.update=function()
{
	var num=0;
	for (var i = 0; i < this.num; i++) {
		if (this.alive[i]) num++;

	}
}*/
fruitObj.prototype.dead=function(i)
{
  fruit.alive[i]=false;
}

function fruitMonitor()
{
	var num=0;
	for (var i = 0; i < fruit.num; i++) 
	{
		if (fruit.alive[i]) 
			num++; 
	}
    if (num<15) {
    	sendFruit();//send fruit
    	return;
    }
}
function sendFruit()
{   
	for (var i = 0; i < fruit.num; i++) {
		if (!fruit.alive[i]) {
			   fruit.born(i);
			   return;
		}
	}
}
