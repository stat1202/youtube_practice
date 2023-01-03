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

const thumbClick = (videoInfo) =>{
    return{
        "type" : "THUMB_SRC",
        "videoInfo" : videoInfo
    }
}

const changeReply = (reply) =>{
    return{
        "type" : "CHANGE_REPLY",
        "reply" : reply
    }
}

const isShareClick = ()=>{
    return{
        "type" : "ISSHARE_CLICK"
    }
}

export {isMenuClick, whatNavClick, thumbClick, changeReply, isShareClick}