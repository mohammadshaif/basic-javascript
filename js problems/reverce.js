var statement = "Rohim is a very good boy and he loves music";

var reverseStat = "";
for (let i = 0; i < statement.length; i++) {
    var element = statement[i];
    reverseStat =element + reverseStat 
    
}
// console.log(reverseStat)



////function diye kora

function rs(str) {
    var reverseStat = "";
    for (let i = 0; i < statement.length; i++) {
        var element = statement[i];
        reverseStat =element + reverseStat 
        
    }
    return reverseStat

}
var statement = "Rohim is a very good boy and he loves music";
var Alian = rs(statement)
// console.log(Alian)

var sentence = "I am hardworking. I am serious. I am sure I will do it";
var reverse = sentence.split('').reverse().join("")
console.log(reverse)