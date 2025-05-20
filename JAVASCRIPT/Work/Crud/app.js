
// JSON :- Java script Object Notation
// Light Weight Object
// json object key always in string format 
// JSON ko string me comvert krne ke liye  -  JSON.stringify
// JSON.parse normal obj me convert krta hai 


// let obj = {
//     name : "Meet",
//     subject : "JS"
// }

// localStorage.setItem("student", JSON.stringify(obj));

// console.log(JSON.parse(localStorage.getItem("student")));



let name = document.getElementById("name");
let subject = document.getElementById("subject");
let age = document.getElementById("age");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let obj = {
        id: Date.now(),  //For Generate id
        name: name.value,
        subject: subject.value,
        age: age.value
    }
    let oldRecord = JSON.parse(localStorage.getItem("Students")) || []
    localStorage.setItem("Students", JSON.stringify([...oldRecord, obj]));

    name.value = ""
    subject.value = ""
    age.value = ""
})