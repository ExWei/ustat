var os = require("os");

exports.freemem = function (unit) {
    if (typeof unit === 'undefined') unit = 'bytes';
    var freemem = convertUnit(os.freemem(), unit);
    return freemem;
};

exports.totalmem = function (unit) {
    if (typeof unit === 'undefined') unit = 'bytes';
    var totalmem = convertUnit(os.totalmem(), unit);
    return totalmem;
};

exports.usedmem = function (unit) {
    if (typeof unit === 'undefined') unit = 'bytes';
    var usedmem = convertUnit(os.totalmem() - os.freemem(), unit);
    return usedmem;
};

function convertUnit (value, unit) {
    var result;
    switch (unit) {
        case "byte":
            result = value;
            break;
        case "kb":
            result = value / 1024;
            break;
        case "mb":
            result = value / Math.pow(1024, 2);
            break;
        case "gb":
            result = value / Math.pow(1024, 3);
            break;
        case "tb":
            result = value / Math.pow(1024, 4);
            break;
        case "pb":
            result = value / Math.pow(1024, 5);
            break;
        case "eb":
            result = value / Math.pow(1024, 6);
            break;
        case "zb":
            result = value / Math.pow(1024, 7);
            break;
        case "yb":
            result = value / Math.pow(1024, 8);
            break;
        default:
            result = value;
    }
    return result;
}