const punctuationArr = [".", ",", "!", "?"];

const palindromes = function (word) {
    modified = replacePunctuation(word);
    reversed = modified.split("").reverse().join("");

    console.log(modified);

    return modified.toLowerCase() === reversed.toLowerCase()
};

function replacePunctuation(string) {
    for (punctuation of punctuationArr) {
        string = string.replaceAll(punctuation, " ");
    }
    
    let newString = string.split(" ").join("");

    return newString;
}

// Do not edit below this line
module.exports = palindromes;
