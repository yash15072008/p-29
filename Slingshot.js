class Slingshot {

    constructor(bodyA,pointB) {

        var con = {
     
        bodyA : bodyA , 
        pointB : pointB ,
        stifness : 0.001 ,
        length : 20

        }
        this.pointB = pointB ;
        this.img1 = loadImage("sprites/sling1.png");
        this.img2 = loadImage("sprites/sling2.png");
        this.img3 = loadImage("sprites/sling3.png");
        this.sling = Constraint.create(con);
        World.add(myWorld,this.sling);

    }

    attach(body) {

        this.sling.bodyA = body;
    }

    fly(){

        this.sling.bodyA = null;
    }

    display() {

        image(this.img1, 205, 102);
        image(this.img2, 177, 102);

        if (this.sling.bodyA){

        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke("#3C2011");
        if (pointA.x < 250) {
        strokeWeight(8);
        line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
        line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
        image(this.img3,pointA.x-30,pointA.y-10,15,30);
        }
        else{
            
        strokeWeight(4);
        line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
        line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
        image(this.img3,pointA.x+25,pointA.y-10,15,30);
        }
        pop();
        }
    
    }
}