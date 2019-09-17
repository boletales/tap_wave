const LIFETIME = 60;
const WAVESPEED = 1.5;
let taps = [];

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function tick(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    taps.forEach(tap=>{
        tap.age++;
        drawWave(tap);
    });
    taps=taps.filter(tap=>(tap.age<=LIFETIME));
    requestAnimationFrame(tick);
}

function drawWave(tap){
    ctx.beginPath();
    ctx.arc(tap.x,tap.y,tap.age*WAVESPEED,0,Math.PI*2);
    ctx.strokeStyle="hsl(" + tap.hue + ", 100%,"+(tap.age/LIFETIME*0.7+0.3)*100+"%)";
    ctx.stroke();
}

function genTap(x,y,hue){
    return {
        x:x,
        y:y,
        hue:hue,
        age:0
    };
}

requestAnimationFrame(tick);