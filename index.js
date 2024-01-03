const randomGenerator = require('./randomGenerator');

console.log('Losowa liczba całkowita z przedziału 1-10:', randomGenerator.getRandomInt(1, 10));

console.log('Losowy ciąg znaków o długości 8:', randomGenerator.generateRandomString(8));

console.log('Tablica 5 losowych liczb całkowitych z przedziału 20-50:', randomGenerator.generateRandomIntArray(20, 50, 5));