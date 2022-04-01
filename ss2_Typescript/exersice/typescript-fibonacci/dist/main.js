let count = 0;
for (let i = 1; count < 30; i++) {
    let sum = 0;
    sum += fibonacci(i);
    count++;
    console.log("Tổng của ", count, " số fibonacci là: ", sum);
}
function fibonacci(num) {
    if (num == 0) {
        return num;
    }
    else if (num == 1) {
        return num;
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
//# sourceMappingURL=main.js.map