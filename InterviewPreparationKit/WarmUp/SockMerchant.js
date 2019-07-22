// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    var totalPairs = 0;
    ar.sort();
    for(let i=0; i<n;i++){
        if(ar[i] == ar[i+1]){
                i++;
                totalPairs++;
           }
    }
    return totalPairs;
}
