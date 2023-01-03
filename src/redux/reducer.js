import {createStore} from "redux"

// 초기 store
const init = {
    "menuClick" : false,
    "navName" : "홈",
    "videoInfo" : "none",
    "reply" : "",
    "shareClick" : false
}

// Reducer 생성
const reducer = (state = init, action) =>{
    switch (action.type){
        case "ISMENU_CLICK":
            return{
                ...state,
                "menuClick" : !state.menuClick
            }
        case "WHATNAV_CLICK":
            return{
                ...state,
                "navName" : action.navName
            }
        case "THUMB_SRC":
            return{
                ...state,
                "videoInfo" : action.videoInfo
            }
        case "CHANGE_REPLY":
            return{
                ...state,
                "reply" : action.reply
            }
        case "ISSHARE_CLICK":
            return{
                ...state,
                "shareClick" : !state.shareClick
            }
        default:
            return state
    }
}

// Store 생성
const store = createStore(reducer)

export default store