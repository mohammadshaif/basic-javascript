var marks = [65,36,99,645,49,67]
var sum = 0;
for (let i = 0; i < marks.length; i++) {
    var element = marks[i];
    sum = sum + element;
}

console.log(sum)

//same work done by function

function totalmarks(marks) {
    var sum = 0;
    for (let i = 0; i < marks.length; i++) {
            var element = marks[i];
            sum = sum + element

    }
    return sum
}
var marks = [65,36,99,645,49,67]
var result = totalmarks(marks)
console.log(result)

//es6
var sum = [1,5,10,15]
var total = sum.reduce((total, sum)=>total+sum,0)
console.log(total);