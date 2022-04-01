let count: number = 0;

for (let i = 0; count < 40; i++) {
    let sum: number = 0;
    sum += fibonacci(i);
    count++;
    console.log("Tổng của ", count, " số fibonacci là: ", sum);
}

function fibonacci(num: number): number {
    if (num == 0) {
        return num;
    } else if (num == 1) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
