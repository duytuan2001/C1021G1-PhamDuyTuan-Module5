let count: number = 0;
let sum: number = 0;

for (let i = 0; count < 10; i++) {
    sum += fibonacci(i);
    count++;

}
console.log( "Số fibonacci thứ ", count , " có tổng số fibonacci là:", sum );

function fibonacci(num: number): number {
    if (num == 0) {
        return num;
    } else if (num == 1) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

// let x = 0;
// async function r5() {
//     x += 1;
//     console.log(x);
//     return 5;
// }
// (async () => {
//     x += await r5();
//     console.log(x);
// })();
