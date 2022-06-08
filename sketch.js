var bgimg;


function preload(){
 bgimg = loadImage("city.jpg")	
}

function setup() {
	createCanvas(500, 520);
	
		

}

function draw() {
	background (bgimg);
    drawSprites();
}

