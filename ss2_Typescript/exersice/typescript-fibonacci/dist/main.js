let count = 0;
let sum = 0;
for (let i = 0; count < 10; i++) {
    sum += fibonacci(i);
    count++;
}
console.log("Số fibonacci thứ ", count, " có tổng số fibonacci là:", sum);
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