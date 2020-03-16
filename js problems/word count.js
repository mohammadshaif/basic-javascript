var speech = "Tony is a very good boy and he loves to play football"
var count = 0
for (let i = 0; i < speech.length; i++) {
    var element = speech[i];
    if (element == " " && speech[i-1] != " ") {
        count++
    }
    
}
count++
console.log(count)

var sentence = "I am hardworking. I am serious. I am sure I will do it";
var count = 0;
for(var i = 0; i < sentence.length; i++){
    var letter = sentence[i];
    if(letter == "a"){
        count++;
    }
}
console.log(count)