// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    const score = [0, 0];
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            score[0]++;
        }
        else if (a[i] < b[i]) {
            score[1]++;
        }
        else {
            score[1] = score[1];
        }
    }
    return score;
}