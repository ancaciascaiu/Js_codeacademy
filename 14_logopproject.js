//made this one from scratch
var user = prompt("How are you today?").toUpperCase();
var night = true;
var morning = false;
switch(user) {
  case 'GOOD':
    if (night && morning){
        console.log("Great!");
    }
    else{
        console.log("Almost Great!");
    }
    break;
  case 'AWFUL':
    if (night || morning){
        console.log("Come oooon!!!");
    }
    else{
        console.log("Ohhhhh!");
    }
    break;
  case 'PRETTY WELL':
    console.log("can you decide?");
    break;
default:
    console.log("enter a mood!");
}