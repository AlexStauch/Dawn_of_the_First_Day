let moon;

function preload(){
	moon = loadModel('moon.obj');
	wrap = loadImage('moon_00_0.png');
}

function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL);
	background(0);
	angleMode(DEGREES);
}

function draw(){	
	//Calling the moon function
	drawMoon((frameCount/29.5)%30);
}

function drawMoon(phase){
	//Light Control
	let dirX = sin(map(phase, 0, 30, -360, 360)); //phase is where the # info is passed to the drawMoon function
	let dirZ = cos(map(phase, 0, 30, -360, 360)); //you better remember this pinche guerro
	directionalLight(150, 34, 0, dirX, 0, dirZ);


	//Moon Model
	noStroke();
	scale(.1);
	rotateX(80); //getting the face rightside up
	rotateY(255);
	model(moon); //wrapped in 3D viewer but not in program (?)
	
}