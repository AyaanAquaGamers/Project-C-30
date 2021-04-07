class Ground{
    constructor(){
        var options={
           isStatic:true
        }
        this.ground=Bodies.rect(450,390,900,20,options)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    dislay(){
        stokeWeight(2)
        fill("black")
        rectMode(CENTER)
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height)
    }
 
 }