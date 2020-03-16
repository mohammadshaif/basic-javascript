
var marks = [30, 36, 90, 45, 95, 60]
var max = marks[0]
for (let i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element >max) {
        max = element;
    }
}
console.log("the highest mark is ", max);



// function diye kora
function nam(nul) {
    var max = marks[0]
        for (let i = 0; i < marks.length; i++) {
            var element = marks[i];
            if (element> max) {
                max = element
            }
        }return max
}

var marks = [30, 36, 90, 45, 95, 60]
var result = nam(marks)
console.log(result)