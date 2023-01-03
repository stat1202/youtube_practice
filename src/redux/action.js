const isMenuClick = () =>{
    return{
        "type" : "ISMENU_CLICK"
    }
}

const whatNavClick = (navName) =>{
    return{
        "type" : "WHATNAV_CLICK",
        "navName" : navName
    }
}

export {isMenuClick, whatNavClick}