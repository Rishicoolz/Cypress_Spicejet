const fs = require('fs');
const fileName = 'D:/Cypress_Project/cypress/fixtures/example.json';
const file = require(fileName);

    
    //file.email = " "
    file.password = " "


    fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
        if (err) return console.log(err);
        
      });



