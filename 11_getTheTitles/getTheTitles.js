const getTheTitles = function(books) {
    let titles = [];

    for (book of books) {
        if (Object.keys(book)[0] === "title") {
            titles.push(Object.values(book)[0]);
        }
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
