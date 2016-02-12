//while loops



var count = 0
var loop = function(count){
	while(count < 3){
		//Your code goes here!
		console.log("I'm looping!");
		count+=1
	}
};

loop(count);





//Remember to make your condition true outside the loop!
var loop=true
var soloLoop = function(loop){
  //Your code goes here!
  while (loop){
      console.log("Looped once!");
      loop=false
    };
};

soloLoop(1);
