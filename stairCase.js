// Complete the staircase function below.
function staircase(n) {
    var string = "";
    for (var i = 0; i < n; i++) {
        for (var j = n - i; j > 1; j--) {
            string += " ";
        }
        for (var l = n; l >= n - i; l--) {
            string += "#";
        }
        if (i < n - 1)
            string += "\n";
    }
    console.log(string);
}