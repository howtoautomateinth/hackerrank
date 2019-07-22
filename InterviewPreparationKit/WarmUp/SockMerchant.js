// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let numberOfPairs = [];
    const uniqueSock = [...new Set(ar)]
    for (let i in uniqueSock) {
        const totalSock = ar.filter((elem) =>
            uniqueSock[i] == elem
        ).length;
        numberOfPairs.push(parseInt(totalSock / 2))
    }
    return numberOfPairs.reduce((previousValue, Current, index) => {
        return Current + previousValue
    }, 0);
}
