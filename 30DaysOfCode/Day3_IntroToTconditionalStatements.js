function main() {
    const N = parseInt(readLine(), 10);
    checkwired(N);
}

function checkwired(n) {
    if (n % 2 == 1) {
        console.log('Weird');
    } else {
        if (n >= 2 && n <= 5) {
            console.log('Not Weird');
        } else if (n >= 6 && n <= 20) {
            console.log('Weird');
        } else if (n > 20) {
            console.log('Not Weird')
        }
    }
}