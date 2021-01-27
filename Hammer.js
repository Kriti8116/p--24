class Hammer{
    constructor(x,y){
        var prop={
            restitution: 2,
            friction:1.0,
            density:0.5
        

          } 
        
          this.body=Bodies.rectangle(x,y,50,50,prop); // determining the shape of the body
          this.width=100
          this.height=30
          World.add(world,this.body); // adding the body to the world
    }
    display(){
        this.body.position.x=mouseX
        this.body.position.y=mouseY
        var angle= this.body.angle
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        fill("gray");
        rectMode(CENTER);
        rect (0,0,this.width,this.height);
        pop()


    }
}
