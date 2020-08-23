import '../css/main.css';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = '#ccc';
let i = 4.5;

setInterval(() => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	i += 0.00001;
	drawSpiral(i);
}, 10);

const drawSpiral = (mod) => {
	ctx.beginPath();
	for (let i = 0; i < 720; i++) {
		let angle = mod * i;
		let x = angle * Math.cos(angle) * 0.1;
		let y = angle * Math.sin(angle) * 0.1;
		ctx.lineTo(150 + x, 150 + y);
	}
	ctx.stroke();
};
