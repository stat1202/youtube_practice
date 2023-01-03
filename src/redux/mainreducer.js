import {createStore} from "redux"

// 초기 store
const init = {
    "menuClick" : false,
    "navName" : "홈"
}

// Reducer 생성
const mainreducer = (state = init, action) =>{
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
        default:
            return state
    }
}

// Store 생성

export default mainreducer