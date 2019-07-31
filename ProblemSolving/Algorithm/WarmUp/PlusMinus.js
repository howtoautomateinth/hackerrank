// Complete the plusMinus function below.
function plusMinus(arr) {
    arr.sort();
    const sizeOfArr = arr.length;
    let zero = 0;
    let positive = 0;
    let negative = 0;
    for (let a of arr) {
        if (a == 0) {
            zero++;
        } else if (a < 0) {
            negative++;
        } else if (a > 0) {
            positive++;
        }
    }
    console.log((positive / sizeOfArr).toFixed(6));
    console.log((negative / sizeOfArr).toFixed(6));
    console.log((zero / sizeOfArr).toFixed(6) );
}