class Stand{
    constructor(x,y,width,height){
        var options={
            isStaic:true
        }
        this.body=Bodies.rect(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    dislay(){
        var angle=this.body.angle
        var pos=this.bosy.position
        stokeWeight(2)
        fill("black")
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
 
 }