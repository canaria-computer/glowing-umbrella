/**
 * 基数変換関数
 * @param {number} decNumber - 10進数の数
 * @param {string[]} numralArray - 数の表現に使われる文字配列
 * @returns {string} - 変換後文字列
 */
var baseConversion = function (decNumber, numralArray) {
    var numral = numralArray.length;
    decNumber = Math.abs(decNumber);
    if (numral == 0) {
        throw new Error("numral is zero.");
    }
    if (decNumber == 0) {
        return numralArray[0];
    }
    if (isNaN(decNumber) === true) {
        throw new Error("decNumber is Not a Number.");
    }
    if (isFinite(decNumber) === false) {
        throw new Error("A non-finite number.");
    }
    if (numral === 1) {
        return numralArray[0].repeat(decNumber);
    }
    if (decNumber < 0) {
        throw new Error("Cannot handle negative numbers.");
    }
    decNumber = ~~decNumber;
    var result = "";
    while (decNumber >= 1) {
        result = (numralArray[decNumber % numral] + result);
        decNumber = ~~(decNumber / numral);
    }
    return result;
};
console.log(baseConversion(13, ["0", "1"]));
console.log(baseConversion(0, ["0", "1"]));
console.log(baseConversion(0, ["1"]));
console.log("-".repeat(100));
try {
    console.log(baseConversion(-1, ["1"]));
}
catch (error) {
    console.log(error);
}
try {
    console.log(baseConversion(0.1, ["1"]));
}
catch (error) {
    console.log(error);
}
try {
    console.log(baseConversion(Infinity, ["0", "1"]));
}
catch (error) {
    console.log(error);
}
try {
    console.log(baseConversion((0 / 0), ["1"]));
}
catch (error) {
    console.log(error);
}
console.log("-".repeat(100));
console.log(parseInt(baseConversion(13, "0123456".split("")), 7));
console.log("fin.");
