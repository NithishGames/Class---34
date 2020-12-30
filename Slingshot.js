class Slingshot {
   constructor(bodyA,pointB){
       var options = {
           bodyA : bodyA,
           pointB : pointB
       }
       this.body = Constraint.create(options)
       World.add(world,this.body)
       this.pointB = pointB
   }
   display(){
       var pointA = this.body.bodyA.position
       var pointB = this.pointB
             push();
       strokeWeight(5);
       stroke("white");
       line(pointA.x,pointA.y,pointB.x,pointB.y)
   pop();
    }
}