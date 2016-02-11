/Search program
/*jshint multistr:true */

var text = "Anca are mere si Anca face prajitura."
var myName = "Anca"
var hits = []

for (var i=0; i<text.length; i++){
    if (text[i]==="A"){
        for (var j=i; j<(myName.length+i);j++){
            hits.push(text[j]);
        };
    };
};

if(hits.length===0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}
