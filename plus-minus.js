// Complete the plusMinus function below.
function plusMinus(arr) {
    var n = arr.length;
    var pos = 0;
    var neg = 0;
    var zeo = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            pos++;
        }
        else if (arr[i] < 0) {
            neg++;
        }
        else {
            zeo++;
        }
    }
    console.log(pos / n);
    console.log(neg / n);
    console.log(zeo / n);
    // return pos, neg, zeo; 
}