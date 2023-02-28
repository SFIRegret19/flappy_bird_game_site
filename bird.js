// canvas settings
let cvs = document.querySelector("#flappybird");
let ctx = cvs.getContext("2d");
document.addEventListener('click', function() {
});

// creating img elements
let bg = document.createElement('img');
let bird = document.createElement('img');
let pipeUp = document.createElement('img');
let pipeDw = document.createElement('img');
let fg = document.createElement('img');
let grav = 0.3;
let change = 5;

//adding src to img els
bird.src = 'images/bird.png';
bg.src = 'images/bg.png';
pipeUp.src = 'images/pipeUp.png';
pipeDw.src = 'images/pipeBottom.png';
fg.src = 'images/fg.png';


// player settings
let xPos = 50;
let yPos = 250;

// pipes settings
const gap = 110;
const distance = 200;

let xPipePos = [cvs.clientWidth, cvs.clientWidth + distance];
let yPipePos = [0, -100];

// main func
const draw = () => {
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(fg, 0, cvs.clientHeight - fg.height);

    for (let i = 0; i<xPipePos.length; i++) {

        ctx.drawImage(pipeDw, xPipePos[i]--, yPipePos[i] + pipeUp.height + gap);
        ctx.drawImage(pipeUp, xPipePos[i], yPipePos[i]);
        
        if (xPipePos[xPipePos.length-1] <= distance) {
        
            yPipePos.push(Math.floor(Math.random() * pipeUp.height) - pipeUp.height + 15);
            xPipePos.push(xPipePos[xPipePos.length-1] + distance);
        }
    }
    
    yPos = yPos - change;
    change= change - grav;

    ctx.drawImage(bird, xPos, yPos);
    requestAnimationFrame(draw);
}


// call func
draw();