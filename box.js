class Box
{
constructor(x,y,w,h){

this.body = Bodies.rectangle(x,y,w,h)
  this.width = w;
   this.height = h;

World.add(world,this.body)
}
display(){
   var pos = this.body.position;
   rectMode(CENTER);
   fill("lightpink")
   rect(pos.x,pos.y,this.width,this.height)



}


}