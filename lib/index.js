var os = require("os");
var exec = require('child_process').exec;

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

exports.totalspace = function (unit, path, callback) {
    if (typeof unit === 'undefined') unit = 'bytes';
    switch (os.type()) {
        case "Windows_NT":
            exec("fsutil volume diskfree " + path, function (error, stdout, stderr) {
                if (error === null && stderr === "") {
                    var output = stdout.match(/(\d+)/gim); // Match numbers
                    var totalspace = convertUnit(output[1], unit);
                    callback(totalspace);
                } else {
                    throw new Error(stderr);
                }
            });
            break;
        case "Linux":
            exec("df -k " + path, function (error, stdout, stderr) {
                if (error === null && stderr === "") {
                    var output = stdout.split(/(\s+)/gim); // Match numbers
                    var totalspace = convertUnit(Number(output[6]), unit);
                    callback(totalspace);
                } else {
                    throw new Error(stderr);
                }
            });
            break;
        default:
            callback("Not supported OS");
    }
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