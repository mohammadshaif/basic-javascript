//variable


var a = 55;
var b = true;
var c = 'shaif'
var i = typeof c
// console.log(i)


var a = 100;
if (a<30) {
    console.log('fail')
}else if (a>=31 && a<=40) {
    console.log ('grade d')
}else if (a>=41 && a<=50) {
    console.log ('grade c')
}else if (a>=51 && a<=60) {
    console.log ('grade b')
}else if (a>=61 && a<=70) {
    console.log ('grade a-')
}else if (a>=71 && a<=80) {
    console.log ('grade a')
}else  {
    console.log ('grade a+')
}


//arra
var morgina = [20, 30, 40, 50, 60]
var possition = morgina.indexOf(30)
var index = morgina[1]
morgina.push(70, 80, 90)
morgina.pop()
morgina[0]=10
// console.log(morgina)

i = 0
while (i<10) {
    console.log(i)
    i++;
}

for (let i = 0; i < morgina.length; i++) {
    var element = morgina[i];
    console.log(element)
    
}

// object

var student = {id:555, phone:6545666, name:"rohim"}

student.id = 222
student.address = "dhaka"
console.log(student)

//function

function kuddus() {
    console.log("kuddus is good photographar")
}
kuddus()

function add(i, j) {
    i = i*2
    j = j*2
    console.log(i,j)
}
add(3,4)