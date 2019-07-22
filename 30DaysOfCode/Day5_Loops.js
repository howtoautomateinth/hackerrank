function printMath(setupN) {
    for (let i = 1; i <= 10; i++){
        console.log(`${setupN} x ${i} = ${setupN * i}`);
    }
}

function main() {
    const n = parseInt(readLine(), 10);
    printMath(n);
}