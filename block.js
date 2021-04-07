class Block{
   constructor(x,y,width,height){
       var options={
           restitution:0.4,
           friction:1.0,
       }
       this.body=Bodies.rect(x,y,width,height,options)
       this.width=width
       this.height=height
       World.add(world,this.body)
   }
   dislay(){
       var angle=this.body.angle
       var pos=this.bosy.position
       push()
       translate(pos.x,pos.y)
       rotate(angle)
       rectMode(CENTER)
       rect(0,0,this.width,this.height)
       pop()
   }

}