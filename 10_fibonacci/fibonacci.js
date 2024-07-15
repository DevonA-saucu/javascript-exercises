const fibonacci = function(index) {
    index = +index;

    if (index === 0 ) {
        return 0;
    }

    if (index < 0) {
        return "OOPS";
    }

    let firstPrev = 1;
    let secondPrev = 0;

    for (let i = 2; i <= index; i++) {
        let currentIndex = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = currentIndex;
    }

    return firstPrev;
}

// Do not edit below this line
module.exports = fibonacci;
