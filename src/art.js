export const spiralOne = (canvas, tick) => {
    const mod = tick / 100000 + 4.5;
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#ccc";
    ctx.beginPath();
    for (let i = 0; i < 720; i++) {
        let angle = mod * i;
        let x = angle * Math.cos(angle) * 0.1;
        let y = angle * Math.sin(angle) * 0.1;
        ctx.lineTo(canvas.width / 2 + x, canvas.height / 2 + y);
    }
    ctx.stroke();
}

export const spiralTwo = (canvas, tick) => {
    const mod = tick / 100000 + 4.5;
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "#5d7ec3";
    for (let i = 0; i < 1000; i++) {
        let angle = mod * i * Math.cos(0.1);
        let x = angle * Math.sin(-angle) * Math.cos(angle) * -0.1;
        let y = angle * Math.tan(angle) * Math.sin(-angle) / 50;
        ctx.lineTo(canvas.width / 2 + x / 2, canvas.height / 2 + y);
    }
    ctx.stroke();
}

export const rotatingBall = (canvas, tick) => {
    const mod = tick / 100;
    const circleSize = 60;
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    const start = mod * Math.PI;
    const end = (mod + 0.5) * Math.PI;
    ctx.arc(canvas.width / 2, canvas.height / 2, circleSize, start, end);
    ctx.stroke();
}