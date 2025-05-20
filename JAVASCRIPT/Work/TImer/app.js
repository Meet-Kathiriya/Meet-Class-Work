let count = document.getElementById("count");
let num = 0;
let timer;

// timer = setInterval(() => {
//     count.innerHTML = num;
//     num++
// },1000)

function start(){
    count.innerText = num;
    num++
    timer = setTimeout(()=>{
        start()
    },1000)
}

function stop() {
    clearInterval(timer);
}