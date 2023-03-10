export const spiralOne = (canvas, mod) => {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    for (let i = 0; i < 720; i++) {
        let angle = mod * i;
        let x = angle * Math.cos(angle) * 0.1;
        let y = angle * Math.sin(angle) * 0.1;
        ctx.lineTo(canvas.width / 2 + x, canvas.height / 2 + y);
    }
    ctx.stroke();
}

export const spiralTwo = (canvas, mod) => {
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