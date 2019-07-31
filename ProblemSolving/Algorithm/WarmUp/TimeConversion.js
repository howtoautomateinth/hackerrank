/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    let AMPM = s.slice(-2);
    let timeArr = s.slice(0, -2).split(":");

    if (AMPM === "AM" && timeArr[0] === "12") {
        timeArr[0] = "00";
    } else if (AMPM === "PM") {
        // if mod 12 will get the same time but if it able to mod 12 it will return 0 
        timeArr[0] = (timeArr[0] % 12) + 12
    }

    return timeArr.join(":");
}