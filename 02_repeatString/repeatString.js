const repeatString = function(msg,x) {
    if(x<0){
        return "ERROR";
    }
    let str = '';
    for(let i=0;i<x;i++){
        str += msg; 
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
