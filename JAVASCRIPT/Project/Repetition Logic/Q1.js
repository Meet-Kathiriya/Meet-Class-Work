
// Q-1 Find Factor of n Number



let n = prompt ("Enter a Number :-")
let i = 1;
for (i = 1; i < n; i++) {
    if (n % i == 0) {
        console.log(i);
    }
}
    console.log(n);     