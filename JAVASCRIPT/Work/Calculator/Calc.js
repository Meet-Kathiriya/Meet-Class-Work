
let inp = document.getElementById("inp")
let inp1 = document.getElementById("inp1")
let h2 = document.querySelector("h2")

function addi (){
    h2.innerHTML = Number(inp.value) + Number (inp1.value)  
    inp.value = " "
    inp1.value = " "
}

function sub (){
    h2.innerHTML = Number(inp.value) - Number (inp1.value)  
    inp.value = " "
    inp1.value = " "
}

function mul (){
    h2.innerHTML = Number(inp.value) * Number (inp1.value)  
    inp.value = " "
    inp1.value = " "
}

function div (){
    h2.innerHTML = Number(inp.value) / Number (inp1.value)  
    inp.value = " "
    inp1.value = " "
}