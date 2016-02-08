//Local and global variables

var my_number = 7; //this has global scope

var timesTwo = function(number) {
    my_num = number * 2;
    console.log("Inside the function my_number is: ");
    console.log(my_num);
}; 

timesTwo(7);

console.log("Outside the function my_number is: ")
console.log(my_number);