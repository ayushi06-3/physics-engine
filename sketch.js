const Engine=Matter.Engine; 
const World=Matter.World; 
const Bodies=Matter.Bodies;
 var myengine,myworld; 
 var ground;
 var ball;


 function setup() {
    createCanvas(400,400);
     var options={isStatic:true};
      //create an engine 
      myengine=Engine.create();
       //assign the world
        myworld=myengine.world; 
        //create a rectangular body
         ground=Bodies.rectangle(200,390,200,20,options); 
         //add the body to my world
          World.add(myworld,ground); 
         console.log(ground);
         var ball_options={restitution:1.0}
         ball=Bodies.circle(200,100,20,ball_options); 
         World.add(myworld,ball);
        }
         function draw() {
            background(0); 
            //update the engine
             Engine.update(myengine);
             rectMode(CENTER);
              fill('yellow');
               rect(ground.position.x,ground.position.y,400,20); 
               fill("red");
              ellipseMode(RADIUS);
              ellipse(ball.position.x,ball.position.y,20);


              
              }

