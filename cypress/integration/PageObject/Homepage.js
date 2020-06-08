class Homepage{
    Sourcebox(){
        return '#ctl00_mainContent_ddl_originStation1_CTXT'
    }
    Destbox(){
        return '#glsctl00_mainContent_ddl_destinationStation1_CTNR > #citydropdown > tbody > :nth-child(2) > .mapbg > .search_options_menucontent > #dropdownGroup1 > .dropdownDiv > :nth-child(1) > :nth-child(7) > a'
    }
    Calendar(){
        return '.ui-datepicker-next > .ui-icon'
    }
    Adultelement(){
        return '#divpaxinfo'
    }
    Dom_Adultinsideelement(){
        const adult_dom = '#ctl00_mainContent_ddl_Adult'
        return adult_dom
    }
    Adultinsideelement(){
        const adult_dom = '#ctl00_mainContent_ddl_Adult'
        return cy.get(adult_dom)
       } 
    Currencytype(){
        const currency_dom='#ctl00_mainContent_DropDownListCurrency'
        return currency_dom
    }
    Findflightsbutton(){
        return '#ctl00_mainContent_btn_FindFlights'
    }
}

export default Homepage