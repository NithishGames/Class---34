class Box {
    constructor(x,y){
        var options = {
            restitution: 0.5,
            friction: 1.0,
            density: 0.04

        }
        this.body = Bodies.rectangle(x,y,70,70,options);
        this.width = 70;
        this.height = 70;

        World.add(world,this.body)
    }
    display(){
       var  pos = this.body.position
        push();
        translate(pos.x,pos.y)
        rectMode(CENTER);
        stroke("red");
        fill("white");
        rect(0,0,this.width,this.height)
        pop();
    }
}