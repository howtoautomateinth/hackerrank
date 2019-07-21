function sides(literals, ...expressions) {
    // ES6 allows destructuring of arrays into multiple variables
    const [a, p] = expressions;
    // Perform this operation only once and assign to variable
    const root = Math.sqrt((p * p) - (16 * a))
    const s1 = (p + root) / 4;
    const s2 = (p - root) / 4;
    // s2 will always be smaller because of the (-/+) above
    return ([s2, s1]);
}