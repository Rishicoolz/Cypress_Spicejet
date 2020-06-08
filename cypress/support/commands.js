// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

import Homepage from '../integration/PageObject/Homepage'
const homepage= new Homepage() 

//###Method to pick a Date from Calendar###//
//Method Name = pickdate
Cypress.Commands.add("pickdate", (DOJ) => { 
    cy.get('td[data-month="5"]').each(($el,index,$list) => {
        const vistext=$el.text()
        if (vistext.includes(DOJ)) {
            $el.click()
        }
    })
    
})

//###Method to choose a value from static Dropdown###//
//Method Name = select_value_dropdown
Cypress.Commands.add("select_value_dropdown", (dom,value) => { 
    cy.get(dom).select(value)
})  

//###Method to click an Element/object in a web page###//
Cypress.Commands.add("clickobject", (dom) => { 
    cy.get(dom).click({force:true})
})

//###Method to hover over a web element###//
Cypress.Commands.add("hoveroverelement", (dom) => { 
    cy.get(dom).trigger('mouseover')
})

Cypress.Commands.add("modify_dom_attribute", (dom,attribute,newvalue) => { 
    return cy.get(dom).invoke('attr',attribute,newvalue)
})

Cypress.Commands.add("entervalue", (dom,value) => { 
    cy.get(dom).type(value,{log:false})
})

Cypress.Commands.add("click_radio_button", (dom) => { 
    cy.get(dom).check()
})




//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
