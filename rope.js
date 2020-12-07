class Rope{
    
        constructor(bodyA,bodyB,offsetA,offsetB){
           
            this.offsetA = offsetA;
            this.offsetB = offsetB;
           

            var options ={
                bodyA : bodyA,
                bodyB : bodyB,
                stiffness : 0.04,
                length : 10,
                pointB : {x:this.offsetA,y:this.offsetB}
            }
            this.rope = Constraint.create(options);
            World.add(world,this.rope);
        }
        display(){
            
                var pointA=this.rope.bodyA.position;
                var pointB=this.rope.bodyB.position;
        
             
        
                var Anchor1X=pointA.x
                var Anchor1Y=pointA.y
        
                var Anchor2X=pointB.x+this.offsetX
                var Anchor2Y=pointB.y+this.offsetY
                strokeWeight(2);
                line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
            }
        
 
}