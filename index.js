"use strict";
let canvas;
let context;
let x = 0;
let isClicked = false;

window.onload = init;

function init() {
 
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    drawHouse();
    drawLogo();
    drawBarChart();
    drawClock();
    drawSVGIcon();
    // draw();
    // drawCircle();
    // animate();
    
    
    // canvas.addEventListener('click', () => {
    //     isClicked = true; 
    //     context.clearRect(0, 0, canvas.width, canvas.height);
    //     context.fillStyle = 'blue';
    //     context.fillRect(150, 150, 50, 50); 
    // });
}

function draw() {
    let randomColor = Math.random() > 0.5 ? '#ff8080' : '#0099b0';
    context.fillStyle = randomColor;
    context.fillRect(100, 50, 200, 175);
}

function drawCircle() {
    context.beginPath();
    context.arc(150, 150, 50, 0, Math.PI * 2);
    context.fillStyle = 'red';
    context.fill();
    context.stroke();
}

function animate() {
    if (!isClicked) {
        // context.clearRect(0, 0, canvas.width, canvas.height);
        drawGradientBackground();
        context.fillStyle = 'green';
        context.fillRect(x, 150, 50, 50); 
        
        x += 2;
        if (x < canvas.width) {
            requestAnimationFrame(animate);
        }
    }
}
function drawGradientBackground() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    let gradient = context.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(1, 'yellow');

    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
}
// Draw shapes, path and text
// Ex1
function drawHouse() {
    
    context.fillStyle = 'tan';
    context.fillRect(200, 150, 150, 150);

    context.beginPath();
    context.moveTo(200, 150);
    context.lineTo(275, 100);
    context.lineTo(350, 150);
    context.closePath();
    context.fillStyle = 'brown';
    context.fill();
    context.stroke();

    context.fillStyle = 'sienna';
    context.fillRect(260, 230, 30, 70);

    
    context.fillStyle = 'lightblue';
    context.fillRect(215, 170, 30, 30);
    context.fillRect(305, 170, 30, 30);
}
//Ex2:
function drawLogo() {
   
    context.beginPath();
    context.arc(100, 100, 50, 0, Math.PI * 2);
    context.fillStyle = 'black';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(70, 100);
    context.lineTo(130, 100);
    context.lineTo(100, 70);
    context.closePath();
    context.fillStyle = 'white';
    context.fill();

    context.font = '20px Arial';
    context.fillStyle = 'white';
    context.fillText('HD', 82, 124);
}
//Ex3
function drawBarChart() {
    const barHeights = [100, 150, 80];
    const barWidth = 40;
    const spacing = 20;

    for (let i = 0; i < barHeights.length; i++) {
        context.fillStyle = 'teal';
        context.fillRect(50 + i * (barWidth + spacing), canvas.height - barHeights[i] - 20, barWidth, barHeights[i]);

        
        context.fillStyle = 'black';
        context.font = '16px Arial';
        context.fillText(`Bar ${i + 1}`, 55 + i * (barWidth + spacing), canvas.height - 5);
    }
}
//Ex4
function drawClock() {
  
    const centerX = 500; 
    const centerY = 200; 

  
    context.beginPath();
    context.arc(centerX, centerY, 100, 0, Math.PI * 2);
    context.fillStyle = 'white';
    context.fill();
    context.stroke();

    
    for (let i = 0; i < 12; i++) {
        let angle = (Math.PI / 6) * i;
        let x1 = centerX + Math.cos(angle) * 90;
        let y1 = centerY + Math.sin(angle) * 90;
        let x2 = centerX + Math.cos(angle) * 100;
        let y2 = centerY + Math.sin(angle) * 100;
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    }

    context.strokeStyle = 'black';
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(centerX, centerY);
    context.lineTo(centerX, centerY - 80); 
    context.stroke();
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(centerX, centerY);
    context.lineTo(centerX + 50, centerY - 50); 
    context.stroke();
}
//Ex5
function drawSVGIcon() {
    context.beginPath();
    context.moveTo(150, 150);
    context.lineTo(170, 170);
    context.lineTo(130, 170);
    context.closePath();
    context.fillStyle = 'orange';
    context.fill();
    context.stroke();
}



