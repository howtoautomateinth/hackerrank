// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    var numOfJumps = 0;
    var cloudLength = c.length;

    for (var i = 0; i < cloudLength - 1; i++) {
        if ((i + 2) < cloudLength && c[(i + 2)] == 0) {    //Double
            numOfJumps++;
            i++;
        } else {          //Single
            numOfJumps++;
        }
    }
    return numOfJumps;
}