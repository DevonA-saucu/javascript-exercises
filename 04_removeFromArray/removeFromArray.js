const removeFromArray = function(array, ...removal) {
    let newArray = array;

    for (let j = 0; j < removal.length; j++) {

        for (let i = 0; i < newArray.length; i++) {
            if (array[i] === removal[j]) {
                newArray.splice(i, 1);
                i--;
            }
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;   
