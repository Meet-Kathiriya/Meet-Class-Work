let count = document.getElementById("count");

let num = 0, timer, ct = 0;
let arr = ["Blue", "Brown", "Green", "Red", "Black", "Grey", "Orange", "Pink", "Purple", "Yellow", "Magenta", "Teal", "Cyan"]

function start() {

    let bg = document.getElementById("count")
    bg.style.backgroundColor = arr[ct];
    ct++;

    if (ct >= arr.length) {
        ct = 0;
    }
    count.innerHTML = num;
    num++

    timer = setTimeout(() => {
        start()
    }, 1500)
}

function stop() {
    clearInterval(timer)
}