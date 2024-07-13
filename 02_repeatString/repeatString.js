const repeatString = function(word, times) {
    let phrase = "";
    if (times < 0) {
        return "ERROR";
    }
    
    for (let i = 0; i < times; i++) {
        phrase += word;
    }

    return phrase;
};

// Do not edit below this line
module.exports = repeatString;
