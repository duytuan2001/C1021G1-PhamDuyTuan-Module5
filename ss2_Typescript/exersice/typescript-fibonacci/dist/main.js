let sum = 0;
let count = 0;
for (let i = 1; count < 30; i++) {
    sum += fibonacci(i);
    count++;
}
function fibonacci(num) {
    if (num <= 1) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log("Tổng của ", count, " số fibonacci là: ", sum);
//# sourceMappingURL=main.js.map