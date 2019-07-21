// recursive
function factorial(n) {
    if (n > 1) {
        return n * factorial(n - 1);
    }
    // else, n is <= 1
    return 1;
}