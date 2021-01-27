class Rubberball{
    constructor(x,y){
        var prop={
            restitution: 0.3,
            friction:5,
            density:1
        

          } 
        
          this.body=Bodies.circle(x,y,70,70,prop); // determining the shape of the body
          this.width=70
          this.height=70
          World.add(world,this.body); // adding the body to the world
    }
    display(){
        var pose= this.body.position
        var angle= this.body.angle
        push();
        translate(pose.x,pose.y)
        rotate(angle)
        fill("blue")
       elipseMode(RADIUS);
        elipse(0,0,this.width,this.height,4);
        pop()


    }
}
