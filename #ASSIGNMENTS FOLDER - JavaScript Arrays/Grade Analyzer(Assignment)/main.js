// STUDENT GRADE ANALYZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Global Variables
let studentGrades = [];
generateData(); // Initialize studentGrades
let max = 100; // studentGrades values should be b/t 0 and max

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    let barWidth = cnv.width / studentGrades.length;

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";
    for (let i = 0; i < studentGrades.length; i++) {
        // Calculate scaled bar height based on cnv.height and canvasMax
        let barHeight = studentGrades[i] * (cnv.height / max);

        ctx.fillRect(i * barWidth, cnv.height - barHeight, barWidth, barHeight);
        ctx.strokeRect(i * barWidth, cnv.height - barHeight, barWidth, barHeight);
    }

    // Request another Animation Frame
    requestAnimationFrame(draw);
}

// Events
document.getElementById("new-data").addEventListener("click", generateData);

function generateData() {
    // Get number of students user wants and set studentGrades to random y with grades for each student
    let numStudents = Number(document.getElementById("num-students").value);
    studentGrades = createRandomGrades(numStudents);
    calcStats();
}

function createRandomGrades(n) {
    // Create and return an array with 'n' random whole number grades b/t 0 and 100, inclusive
    let tArray = [];
    for (let i = 0; i < n; i++) {
        tArray.push(Math.randomInt(0, 101));
    }

    return tArray;
}

function calcStats() {
    // Calculate and display statistics on student grades stored in studentGrades.
    document.getElementById("perfect-grade").innerHTML = includes(100, studentGrades);
    document.getElementById("lowest-grade").innerHTML = minItem(studentGrades);
     document.getElementById("highest-grade").innerHTML = maxItem(studentGrades);
    document.getElementById("ave-grade").innerHTML = arrayAverage(studentGrades);
}

//Find Whether or not someone got 100 
function includes(num, arrayName) {
    for (let n = 0; n < arrayName.length; n++) {
        if (arrayName[n] == num) {
            return "True"
        }
    }

    for (let n = 0; n < arrayName.length; n++) {
        if (arrayName[n] != num) {
            return "False"
        }
    }
}

//Find the Lowest Grade
function minItem(arrayName){
    let minGrade = 100 
    for(let n = 0; n < arrayName.length; n++){
        if (arrayName[n] <= minGrade){
            minGrade = arrayName[n]
        }
    }
    return minGrade
}

//Find the Highest Grade 
function maxItem(arrayName){
    let maxGrade = 0
    for(let n = 0; n< arrayName.length; n++){
        if (arrayName[n] >= maxGrade){
            maxGrade = arrayName[n]
        }
    }
    return maxGrade
}

//Find the Average Grade
function arrayAverage(arrayName){
    let total = 0 
    for(let n = 0; n< arrayName.length; n++){
        total+= arrayName[n]
    }
    let averageGrade = total / arrayName.length 
    averageGrade = Math.roundTo(averageGrade,0) 
    
    return averageGrade
}
