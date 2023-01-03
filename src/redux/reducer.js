import {createStore} from "redux"

// 초기 store
const init = {
    "menuClick" : false

}

// Reducer 생성
const reducer = (state = init, action) =>{
    switch (action.type){
        case "ISMENU_CLICK":
            return{
                ...state,
                "menuClick" : !state.menuClick
            }
        default:
            return state
    }
}

// Store 생성
const store = createStore(reducer)

export default store