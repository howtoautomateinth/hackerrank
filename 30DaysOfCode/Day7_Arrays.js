function printReverseOrder(arr) {
    let strSameLine = '';
    arr.reverse().forEach((x) => {
        strSameLine += x + " ";
    })
    console.log(strSameLine);
}
