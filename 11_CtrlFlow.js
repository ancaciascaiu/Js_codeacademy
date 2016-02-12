//control flow

var isEven = function(number) {
 
    if (number%2===0){
      return true;
    }
    else if (isNaN(number)===true){
        return "your input is not a number!";
    }
    else{
      return false;
    }
};