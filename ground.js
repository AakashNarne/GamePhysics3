class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.box = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.box);
  }
  show()
  {
    var pos=this.box.position
    Matter.Body.rotate(this.box, angle)
    push()
    translate(pos.x, pos.y)
    rotate(angle)
    rect(0, 0, this.w, this.h)
    pop()

    angle+=0.1
    
  }

 
   
}
