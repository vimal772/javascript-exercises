const fibonacci = function(n) {
    n = Number(n);
    if(n<0){
        return "OOPS";
    }else{
        let num1 = 1;
        let num2 = 1;
        let num3;
        if(n===1 || n===2){
            return num1;
        }
        for(let i=3;i<=n;i++){
            num3 = num1 + num2;
            num1 = num2;
            num2 = num3;
        }
        return num3;
    }
};

// Do not edit below this line
module.exports = fibonacci;
