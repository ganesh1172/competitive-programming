// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
    var sum = 0;
    for (var i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;

    // return ar.reduce((sum,item) => item+sum); 
}