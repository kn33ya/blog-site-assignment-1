let students = [
  {name: "brendan", major: "chemistry"},
  {name: "kayla", major: "nutrition"},
  {name: "travis", major: "compsci"}
]
console.log(students.length)
console.log(students[1])

function addThreeToNum(num) { //this is where you name the functions and the variables 
  return num + 3 //this is where you put the functions of the variables
}
console.log(addThreeToNum(1))

for (let i = 0; i < 4; i++) {
  console.log(i)
}

let courses = ["data vis", "type","architecture","professional", "drawing"]

for (let i =0; i < 4; i ++){
 console.log(courses[i]) 
}
//let quickFix = document.getElementById("live-updates")
//quickFix.style.backgroundColor = "blue"

document.getElementById("about").innerHTML += "im in this ho"
// the += adds to the existing text instead of replacing it.

