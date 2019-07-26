// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    arr.sort();
    let max = arr.slice(1);
    let min = arr.slice(0,arr.length - 1);
    let reducer = (acc, curr) => { return acc + curr; };
    console.log(min.reduce(reducer, 0) + ' ' + max.reduce(reducer, 0));
}