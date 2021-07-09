class Dustbin {
    constructor (x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);      
        World.add(world,this.body);  
        this.image = loadImage("dustbingreen.png")
        this.width = width
        this.height = height
    }
    display(){
        rectMode(CENTER)
        fill("white")
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        imageMode(CENTER);
        image(this.image,670,600,205,200)
    }
}