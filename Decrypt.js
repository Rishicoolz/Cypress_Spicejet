
    var CryptoJS = require("crypto-js");
    const fs = require('fs');
    const fileName = 'D:/Cypress_Project/cypress/fixtures/example.json';
    const file = require(fileName);
     
    // Encrypt
    //var ciphertext = CryptoJS.AES.encrypt(file.password, 'secret').toString();
    //console.log(ciphertext)
     
    // Decrypt
    var bytes  = CryptoJS.AES.decrypt(file.newpassword, 'secret');
    file.password = bytes.toString(CryptoJS.enc.Utf8);
    //console.log(originalText); // 'my message'

    fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
        if (err) return console.log(err);
        //console.log('writing to ' + fileName);
      });
