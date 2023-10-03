const sumAll = function(x,y) {
    let total = 0;
    let start;
    let end;
    if(!Number.isInteger(x) || !Number.isInteger(y)){
        return "ERROR";
    }else{
        if(x < 0 || y <0){
            return "ERROR";
        }
        if(x < y){
            start = x;
            end = y; 
        }else{
            start = y;
            end = x;
        }
        for(i=start;i<=end;i++){
            total += i;
        }
        return total;
    }
};

// Do not edit below this line
module.exports = sumAll;
