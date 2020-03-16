var num = 2.665489;
var result = Math.floor(num);
var result2 = Math.ceil(num);
var result3 = Math.round(num);
// console.log(result, result2, result3)

//loop ar vitor diye
//ludu khela
for (let i = 0; i < 20; i++) {
    var result4 = Math.random() *6;
    var round = Math.round(result4);

    console.log(round)
}


// loop ar vitor diye  0 ar man 1 dhore
for (let i = 0; i < 20; i++) {
    var result4 = Math.random() *6;
var round = Math.round(result4);
if (0 == round) {
   var add = round + 1
    console.log(add) ;
}else{
    console.log(round) ;
}
    
}