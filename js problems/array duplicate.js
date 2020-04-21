var stroll = [32, 60, 50,85 ,90,32 ,45, 85];
var newroll =[];
for (let i = 0; i < stroll.length; i++) {
    var element = stroll[i];
    var index = newroll.indexOf(element)
    if (index == -1) {
        newroll.push(element)
    }
    
}
console.log(newroll)

//es6
var stroll = [32, 60, 50,85 ,90,32 ,45, 85];
// var dub = new Set(stroll)
// var backToArray = [...dub]
// console.log(backToArray);
var newArray = Array.from(new Set(stroll))
console.log(newArray);

