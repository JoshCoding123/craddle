class circle{
    constructor(x,y,radius) {
      var options = {
          isStatic: false, 
          restitution:1.0,
         
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius= radius;
 
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      
      push()
      translate(pos.x,pos.y)
      rotate (this.body.angle)
      fill("pink");
      ellipse(0,0, this.radius,this.radius);
      pop()
    }
  };