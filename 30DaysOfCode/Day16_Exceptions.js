function main() {
    var S = readLine();
    S = parseInt(S);
    try {
        new Array(S);
        console.log(S);
    } catch (err) {
        console.log('Bad String');
    }
}