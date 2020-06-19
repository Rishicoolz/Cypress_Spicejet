const fs = require('fs');
const fileName = 'D:/Cypress_Project/cypress/fixtures/example.json';
const file = require(fileName);
const prompt = require('prompt');

var CryptoJS = require("crypto-js");

var schema = {
  properties: {
    email: {
      //pattern: /^[a-zA-Z\s\-]+$/,
      message: 'Type your Email and press Enter Button',
      required: true,
      hidden: true
    },
    password: {
        message:'Type your Password and press Enter Button',
        required: true,
          hidden: true
    }
  }
};

  prompt.start();

prompt.get(schema, function (err, result) {
    if (err) { return onErr(err); }
    //console.log('Command-line input received');
    console.log('  Email input received ' );
    console.log('  Password Input received ' );
    
    file.email = result.email
    file.newpassword = CryptoJS.AES.encrypt(result.password, 'secret').toString()

    //var ciphertext = CryptoJS.AES.encrypt(file.password, 'secret').toString();


    fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
        if (err) return console.log(err);
        //console.log('writing to ' + fileName);
      });
});

function onErr(err) {
    console.log(err);
    return 1;
}



