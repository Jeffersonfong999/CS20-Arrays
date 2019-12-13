//Nickname generator

//Event listener


document.getElementById('randomNickname').addEventListener('click', rndmNickname)
document.getElementById('allNicknames').addEventListener('click', allNames)




//Global variables
let nicknameIndex = 0;

//Getting Nicknames from text file
fetch("nickNames.txt").then((rawData) => rawData.text()).then((data)=> myNicknames = data.split(","))


//Event Functions

function rndmNickname() {
    let firstname = document.getElementById('firstName').value;
    let lastname = document.getElementById('lastName').value;

    nicknameIndex = Math.randomInt(0, myNicknames.length);
    
    //Display Nicknames onto Webpage
    document.getElementById('outputNames').innerHTML = firstname + " " + myNicknames[nicknameIndex] + " " + lastname + '<br>';
}

//Display all nicknames
function allNames() {
    let firstname = document.getElementById('firstName').value;
    let lastname = document.getElementById('lastName').value;
    document.getElementById("outputNames").innerHTML = " ";

    //Display all Nicknames onto Webpage
    for (let n = 0; n < 6; n++) {
        document.getElementById('outputNames').innerHTML += firstname + " " + myNicknames[n] + " " + lastname + "<br>";
    }

}
