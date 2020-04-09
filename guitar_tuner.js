function tune(arr) {
    const normal = [329.63, 246.94, 196.00, 146.83, 110.00, 82.41];
    let tunes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            tunes[i] = " _ ";
        } else if (arr[i] === normal[i]) {
            tunes[i] = "OK";
        } else if (normal[i] > arr[i] && normal[i] - arr[i] < normal[i]*0.03) {
            tunes[i] = ">•";
        } else if (arr[i] > normal[i] && arr[i] - normal[i] < normal[i]*0.03) {
            tunes[i] = "•<";
        } else if (normal[i] > arr[i]) {
            tunes[i] = ">>•";
        } else {
            tunes[i] = "•<<";
        }
    }
    return tunes;
}
