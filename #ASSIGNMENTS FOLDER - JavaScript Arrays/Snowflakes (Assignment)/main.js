//Snowflake Generator

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1900
cnv.height = 900

//Adding or removing snowflakes event listeners
document.addEventListener('keydown', addOrDelete)

//Global Variable
let xVals = []
let yVals = []
let rVals = []

let circleSpeed = []

//Set number of Snowballs
for (let n = 0; n < 100; n++) {
    xVals.push(Math.randomDec(0, cnv.width));
    yVals.push(Math.randomDec(0, cnv.height));
    rVals.push(Math.randomDec(5, 10));
    circleSpeed.push(Math.randomDec(2, 5))
}

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    //Return snow back to top at a random speed, location 
    for (let n = 0; n < yVals.length; n++) {
        yVals[n] += circleSpeed[n]
        if (yVals[n] + rVals[n] >= cnv.height) {
            yVals[n] = 0 - rVals[n];
            xVals[n] = Math.randomDec(0, cnv.width)
            circleSpeed[n] = Math.randomDec(2, 5)
        }
    }

    //Draw out Snowflakes
    for (let n = 0; n < yVals.length; n++) {
        ctx.fillCircle(xVals[n], yVals[n], rVals[n])
    }


    // Request another Animation Frame
    requestAnimationFrame(draw);
}



//Function Add or Delete
function addOrDelete() {

    //Delete Snowflake
    if (event.code == 'KeyD') {
        xVals.pop()
        yVals.pop()
        rVals.pop()
    }

    //Add Snowflake
    else if (event.code == 'KeyA') {
        xVals.push(Math.randomDec(0, cnv.width));
        yVals.push(Math.randomDec(cnv.height, cnv.height));
        rVals.push(Math.randomDec(5, 10));
        circleSpeed.push(Math.randomDec(2, 5))
    }
    console.log(event.code)
}

//Drawing a Snowflake
ctx.fillCircle = function (x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = "white"
    ctx.fill();

}