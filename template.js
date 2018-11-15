var can = document.querySelector("canvas");
var c = can.getContext("2d");

can.width = window.innerWidth;
can.height = window.innerHeight;


// Varibles
const mouse = {
	x: innerWidth/2,
	y: innerHeight/2
};

var colors = [
	"#393e46",
	"#00adb5",
	"#fff4e0",
	"#f8b500",
	"#fc3c3c"
];


// Event Listeners
addEventListener("mousemove", function(e) {
	mouse.x = e.clientX;
	mouse.y = e.clientY;
});

addEventListener("resize", function() {
	can.width = window.innerWidth;
	can.height = window.innerHeight;
	init();
});


// Utilites
function randomIntNum(min, max) {
	return Math.floor(Math.random()*(max - min + 1) + min);
}

function randomColor(colors) {
	return colors[Math.floor(Math.random()*colors.length)];
}


// Object
function Object(x, y, r, color) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.color = color;

	this.update = function() {
		this.draw();
	}

	this.draw = function() {

	}
}


// Init
function init() {

}


// Animation
function animate() {
	window.requestAnimationFrame(animate);
	c.clearRect(0, 0, can.width, can.height);
	c.fillText("CANVAS TEMPLATE", mouse.x, mouse.y);
}

init();
animate();