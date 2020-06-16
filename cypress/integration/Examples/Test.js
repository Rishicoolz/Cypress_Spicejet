/// <reference types="Cypress" />
import HomePage from '../PageObject/Homepage'
import Flightselectionpage from '../PageObject/Flightselectionpage'
import Loginpage from '../PageObject/Loginpage.js'
import IntlTelInput from 'intl-tel-input'
//import Encrypt from '../PageObject/Encrypt.js'

describe('Flight Ticket Booking',function()

{
    //runs once before all tests in this Suite
    this.beforeEach(function(){
        //you have to resolve to access data by giving then
        cy.fixture("example").then(function(data){
        this.data = data}) 
        const util = require('util')          
    })
    this.afterEach(function(){
        cy.screenshot({capture:'runner'})
    })
    after(function(){
        cy.exec('npm run Aftertest')
    })

it('Verify User can Login and Logout',function(){

        const loginpage = new Loginpage()
    //const encr = new Encrypt()
        cy.visit(Cypress.env("url"));

    //console.log(encr.encrypt())
        cy.hoveroverelement(loginpage.LoginElement())
        cy.clickobject(loginpage.MemberLogin())
        
        cy.modify_dom_attribute(loginpage.Emailbox(),'class','wHuge4s2 country-mobile country-mobile-login required isEmailInput error')
        .wait(1000)
        .type(this.data.email,{log:false})

        
        
        cy.entervalue(loginpage.Passwordbox(),this.data.password)
        cy.modify_dom_attribute('form#SkySales','target','_Self')
        //cy.get('form#SkySales').invoke('attr','target','_Self')
        cy.clickobject(loginpage.Loginbutton())

        cy.clickobject(loginpage.Logoutbutton())
              
        })

it('Check Flights Availability and Fares in between Two Places',function(){

const homepage = new HomePage()
const choosefare = new Flightselectionpage()

cy.visit(Cypress.env("url"));
    
cy.clickobject(homepage.Sourcebox())
cy.wait(1000)
cy.entervalue(homepage.Sourcebox(),this.data.source_city).should('include.value','Chennai')
cy.clickobject(homepage.Destbox())


cy.pickdate(this.data.Date_of_Travel) //This is a common method defined to pick date
//adult
cy.clickobject(homepage.Adultelement())

cy.select_value_dropdown(homepage.Dom_Adultinsideelement(),this.data.No_of_Adults)
//adding assertion to check selected value
homepage.Adultinsideelement().should('have.value',this.data.No_of_Adults)
cy.clickobject(homepage.Adultelement())
//INR
cy.select_value_dropdown(homepage.Currencytype(),this.data.currencyvalue)
//cy.get('#ctl00_mainContent_DropDownListCurrency').select('INR')
cy.clickobject(homepage.Findflightsbutton())

//Flight Selection Page
cy.wait(5000)

cy.click_radio_button(choosefare.Radiobutton_Fare())
cy.get(choosefare.Radiobutton_Fare()).should('be.checked')
//choosefare.Continue_button().click({force:true})
    })


})