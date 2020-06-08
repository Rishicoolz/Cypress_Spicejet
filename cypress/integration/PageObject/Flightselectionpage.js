class Flightselectionpage{

    Radiobutton_Fare(){
     return '#ControlGroupSelectView_AvailabilityInputSelectView_RadioButtonMkt1Fare1_0'
    }
    Continue_button(){
        return cy.get('#continue-to-contact-page')
    }
}

export default Flightselectionpage