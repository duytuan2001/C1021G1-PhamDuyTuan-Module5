var sum = 0;
var count = 0;
for (var i = 1; count < 50; i++) {
    sum += fibonacci(i);
    count++;
}
function fibonacci(num) {
    if (num <= 1)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log("Tổng của ", count, " số fibonacy là: ", sum);
