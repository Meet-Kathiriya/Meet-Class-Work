// Local Storage --- Session Storage --- Cookies 
// User Browser 

// Local Storage :-

// localStorage.setItem("name","Meet")
// console.log(localStorage.getItem("name"));
// localStorage.removeItem("name")

// Session Storage :-

// sessionStorage.setItem("name","Sumit")
// sessionStorage.getItem



// code:-


let body = document.getElementById("bd");

function lightMode(){
    localStorage.setItem("mode","light")
    body.style.backgroundColor ="white"
    body.style.color = "black"
}

function darkMode (){
    localStorage.setItem("mode", "dark")
    body.style.backgroundColor = "black"
    body.style.color = "white"
}

document.addEventListener("DOMContentLoaded",()=>{
    let mode = localStorage.getItem("mode");

    if (mode == "dark"){
         body.style.backgroundColor = "black"
         body.style.color = "white"
        }else {
        body.style.backgroundColor = "white"
        body.style.color = "black"
        }
})




