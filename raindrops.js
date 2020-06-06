class Raindrops{
    constructor(x,y,width,height,options){
        this.width=width
        this.height=height
    }

    display(){
        if(World.frameCount%30===0){
            strokeColor("red");
            raindrop = new Raindrops(Math.random(10,390),0,20,20);
            raindrop.velocityY=Math.random(1,6);
            if(raindrop.y>400){
                raindrop.destroy();
            }
        }

        if(World.frameCount%40===0){
            strokeColor("blue");
           raindrop = new Raindrops(Math.random(10,390),0,20,20);
            raindrop.velocityY=Math.random(1,6);
            if(raindrop.y>400){
                raindrop.destroy();
            }
        }
    
        if(World.frameCount%50===0){
            strokeColor("green");
            raindrop = new Raindrops(Math.random(10,390),0,20,20);
            raindrop.velocityY=Math.random(1,6);
            if(raindrop.y>400){
                raindrop.destroy();
            }
        }
    }

    
    

    

}