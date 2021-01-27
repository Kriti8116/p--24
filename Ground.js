class Ground{
    constructor(x,y,width,height){
        var prop={
            isStatic : true  //JSON Structure
          } 
        
          this.body=Bodies.rectangle(x,y,width,height,prop); // determining the shape of the body
          this.width=width
          this.height=height
          World.add(world,this.body); // adding the body to the world
    }
    display(){
        rectMode(CENTER);
        fill("brown")
        rect (this.body.position.x,this.body.position.y,this.width,this.height);
    }
}
