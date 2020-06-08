class Loginpage{
    LoginElement(){
        return '#ctl00_HyperLinkLogin'
    }
    MemberLogin(){
    return '#smoothmenu1 > ul > li.li-login.float-right.tabres > ul > li:nth-child(2) > ul > li:nth-child(1) > a'
    }
    Emailbox(){
    return '#ControlGroupLoginView_MemberLoginView2LoginView_TextBoxUserID'
    }
    Passwordbox(){
    return '#ControlGroupLoginView_MemberLoginView2LoginView_PasswordFieldPassword'
    }
    Loginbutton(){
    return '#ControlGroupLoginView_MemberLoginView2LoginView_ButtonLogIn'
    }
    Logoutbutton(){
    return 'a#Login:visible'
    }
}

export default Loginpage