const badWords = process.env.BAD_WORDS.split(',');
const goodWords = process.env.GOOD_WORDS.split(',');

var commentHelper = {
    /**
     * returns true if text is a valid comment.
     * @param {string} text 
     */
    validate: function (text) {
        var isInvalid = badWords.map(word => text.toLowerCase().includes(word))
                                .reduce((isValid, isBadWord) => isValid || isBadWord, false);
        return !isInvalid;
    },

    /**
     * return a moderated text.
     * @param {string} text
     */
    moderate: function (text) {
        if (this.validate(text))
            return text;
        var moderatedText = badWords.reduce((modText, badWord) => {
            var regex = new RegExp(badWord, 'gi');
            var index = badWords.indexOf(badWord);
            var goodWord = goodWords[index];
            return modText.replace(regex, goodWord);
        }, text);
        return moderatedText;
    }
}

module.exports = commentHelper;