//Random Intergers value for nicknameIndex
Math.randomdec = function (low,high){
    return Math.random() * (high - low) + low 
}

Math.randomInt = function (low, high){
    return Math.floor(Math.randomdec(low, high))  
}