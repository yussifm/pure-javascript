function longestWordLength(str) {
    var wordsplit = str.split(" ");
    var longword = 0;
    var word;
    for (var i = 0; i < wordsplit.length; i++) {
        if (wordsplit[i].length > longword) {
            longword = wordsplit[i].length;
            word = wordsplit[i];

        }

    }
    return longword + " is the length of the longest word, which is " + word;
}


var str = "The quick brown fox jumped over the lazy dog";

var length = longestWordLength(str);
console.log(length);