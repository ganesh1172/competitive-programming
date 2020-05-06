function birthdayCakeCandles(ar) {
    var arCount = 0;
    var height = Math.max(...ar);// using spread operator to get maximum value from array
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] == height) {
            arCount = arCount + 1;
        }
    }
    console.log(arCount);
    return arCount;
}