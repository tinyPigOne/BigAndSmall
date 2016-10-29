//判断大鱼和果实的距离
function momFruitCollision()
{
if (!data.gameOver) 
{

        for (var i = 0; i < fruit.num; i++) 
   {
                        if (fruit.alive[i]) 
                        {
                     
                                //判断距离
                                var l=calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
                        if (l<900) {
                                //fruit 就被吃掉了
                                fruit.dead(i); 
                                data.fruitNum++;
                                mom.momBodyCount++;
                                if (mom.momBodyCount>7) {
                                        mom.momBodyCount=7;
                                }
                                if (fruit.fruitType[i]=="blue") 
                                {
                                        data.double=2;
                                }else
                                {
                                        data.double=1;
                                }
                                       wave.born(fruit.x[i],fruit.y[i]);
                                } 
        } 
   }
}

}
//大鱼和小鱼的碰撞
function momBabyCollision()
{

if (data.fruitNum&&!data.gameOver) 
{
	var l=calLength2(mom.x,mom.y,baby.x,baby.y)
	if (l<900) {
        	//baby 复原
        	  baby.babyBodyCount=0;	
            //mom 复原
            mom.momBodyCount=0;
            //更新分数数值 data归零
            data.addScore();
            //圆圈born
            halo.born(baby.x,baby.y);
        } 
} 
}
