function calculate_median(arr) {
    var medianArray = buildMedian(arr);
    var median = printMedian(medianArray);

    return median;
}

function buildMedian(arr) {
    var medianArray = [];
    var j = 0;

    for (var i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            medianArray[j] = arr[i];
            j++;
        }
    }

    return medianArray;
}

function printMedian(medianArray) {
    var length = medianArray.length;
    var median = 0;

    if (length % 2 != 0) {
        median = medianArray[parseInt(length / 2)];
    }
    if (length % 2 === 0) {
        median = (medianArray[length / 2] + medianArray[length / 2 - 1]) / 2;
    }

    return median;
}

module.exports = calculate_median;
