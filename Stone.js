class Stone{
    constructor(x,y){
        var prop={
            restitution: 0.8,
            friction:0.3,
            density:5.0
        

          } 
        
          this.body=Bodies.rectangle(x,y,70,70,prop); // determining the shape of the body
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
        fill("black")
        rectMode(CENTER);
        rectangle(0,0,this.width,this.height);
        pop()


    }
}
