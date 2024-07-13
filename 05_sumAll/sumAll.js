const sumAll = function(intOne, intTwo) {
    if (intOne < 0 || intTwo < 0 || typeof(intOne) !== "number" || typeof(intTwo) !== "number") {
        return "ERROR";
    }

    let sum = 0;

    if (intOne > intTwo) {
        for (let i = intOne; i >= intTwo; i--) {
            sum += i;
        }
    }

    for (let i = intOne; i <= intTwo; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
