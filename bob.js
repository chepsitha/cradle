class Bob{

        constructor(x,y,r){
            var options ={
                restitution:0.03,
                density:1.0,
                friction:1.0, 
                isStatic:false
            }
            this.x = x;
            this.y = y;
            this.r = r;
            this.body = Bodies.circle(this.x,this.y,this.r,options);
            World.add(world,this.body);
        }
        display(){
            var posx = this.body.position.x;
            var posy = this.body.position.y;
    
        push();
        translate(posx,posy);
        rectMode(CENTER);
        fill("lightpink");
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
    pop();
        }
    
}