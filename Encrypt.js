class Encrypt{

encrypt(){
var CryptoJS = require("crypto-js");
const fs = require('fs');
const fileName = 'D:/Cypress_Project/cypress/fixtures/example.json';
const file = require(fileName);
 
// Encrypt
var ciphertext = CryptoJS.AES.encrypt(file.password, 'secret').toString();
//console.log(ciphertext)
 
// Decrypt
//var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret');
//var originalText = bytes.toString(CryptoJS.enc.Utf8);
console.log(ciphertext); // 'my message'
}
}
export default Encrypt
//var myClass = new Encrypt();
//myClass.encrypt();