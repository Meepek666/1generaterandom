function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = getRandomInt(0, characters.length - 1);
        result += characters.charAt(randomIndex);
    }
    return result;
}


function generateRandomIntArray(min, max, length) {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(getRandomInt(min, max));
    }
    return result;
}

module.exports = {
    getRandomInt,
    generateRandomString,
    generateRandomIntArray,
};
