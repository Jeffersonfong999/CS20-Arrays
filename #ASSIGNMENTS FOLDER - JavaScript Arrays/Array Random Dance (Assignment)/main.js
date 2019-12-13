// ARRAY VISUALIZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray = [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300];
let myArrayIndex = 0

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    let barWidth = cnv.width / myArray.length;

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";
    for (let i = 0; i < myArray.length; i++) {
        ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
        ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
    }


    // Request another Animation Frame
    requestAnimationFrame(draw);
}

document.addEventListener('keydown', keydownHandler);

function keydownHandler(event) {
    console.log(event.code);

    //If Spacebar is clicked
    if (event.code == 'Space') {
        for (let n = 0; n < myArray.length; n++) {
            myArray[n] += Math.randomdec(-5, 5)
        }
    }
    //If key R is clicked
        if (event.code == 'KeyR') {
            myArray = [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300]; 
        }

    }
   