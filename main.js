// Create canvas variable
var canvas=new fabric.Canvas('myCanvas');

//Set initial positions for ball and hole images.
ball_x=0;
ball_y=0;
hole_x=800;
hole_y=400;

var hole_object="";
var ball_object="";

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(Img){
	// write code to Upload golf image on the canvas
	hole_object=Img;
	hole_object.scaleToWidth(50);
	hole_object.scaleToHeight(50);
	hole_object.set({
		top:hole_y,
		left:hole_x
	});
	canvas.add(hole_object)
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png",function(Img){
	// write code to Upload ball image on canvas
    ball_object=Img;       
    ball_object.scaleToWidth(50);
    ball_object.scaleToHeight(50);
    ball_object.set({
    top:ball_y,
    left:ball_x
});
canvas.add(ball_object)
});
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
	keyPressed = e.keyCode;
	console.log(keyPressed);

	/* Check the coordinates of the ball and hole images to finish the game.
	 And id coordinates matches them remove ball image, display "GAME OVER!!!"
	  and make canvas border 'red'. */

	  if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_object);
		document.getElementById("hd3").innerHTML="You have Hit the Goal!!!";
		document.getElementById("myCanvas").style.borderColor="red";
		} 
	
		if(keyPressed == '38')
		{
			console.log("up");
			up();
		}

		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}

		if(keyPressed == '37')
		{
			console.log("left");
			left();
		}

		if(keyPressed == '39')
		{
			console.log("right");
			right();
		}



	
	
	
	function up(){
		// Write a code to move ball upward.
		if(ball_y>=0){
			ball_y= ball_y-block_image_height;
	   console.log("X = "+ball_x+ " Y = "+ball_y);
   
			canvas.remove(ball_object);
			new_image();
		}
	}
		function down(){
			if (ball_y<=500){
				// Write a code to move ball downward.
				ball_y= ball_y+block_image_height;
				console.log("X = "+ball_x+ " Y = "+ball_y);
	   
				canvas.remove(ball_object);
				new_image();
			}
		}
	
		function left(){
			if(ball_x >=0){
				// Write a code to move ball left side.
				ball_x= ball_x-block_image_height;
			console.log("X = "+ball_x+ " Y = "+ball_y);
	
			canvas.remove(ball_object);
			new_image();
			}
		}
	
		function right(){
			if(ball_x <=900)
			{
				// Write a code to move ball right side.
				ball_x= ball_x+block_image_height;
				console.log("X = "+ball_x+ " Y = "+ball_y);
		
				canvas.remove(ball_object);
				new_image();
			}
		}
}