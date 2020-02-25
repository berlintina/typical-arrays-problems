exports.min = function min(array) {

    if (!Array.isArray(array) || !array.length) return 0;

    array.sort(function(a, b) {
        return a - b;
    })
    return array[0];

}

exports.max = function max(array) {
    if (!Array.isArray(array) || !array.length) return 0;

    array.sort(function(a, b) {
        return a - b;
    })
    return array[array.length - 1];

}

exports.avg = function avg(array) {
    if (!Array.isArray(array) || !array.length) return 0;

    var summ = 0;
    array.forEach(function(value) {
        summ += value;
    });
    return summ / array.length;

}