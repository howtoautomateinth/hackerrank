// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let aPoint = 0;
    let bPoint = 0;
    for (let index in a) {
        if (a[index] > b[index]) {
            aPoint++;
        } else if (a[index] < b[index]) {
            bPoint++;
        }
    }
    return [aPoint, bPoint];
}