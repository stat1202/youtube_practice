import React from "react"
import {useSelector} from "react-redux"

import Shorts from "./Mains/Shorts"
import Subscription from "./Mains/Subscription"
import Gallery from "./Mains/Gallery"
import Home from "./Mains/Home"

const Main = () =>{
    
    //===== useSelector =====
    const navName = useSelector( state => state.navName)
    
    return(
        <main>
            <React.Fragment>
                {navName == "홈"&& <Home/>}
                {navName == "Shorts" && <Shorts/>}
                {navName == "구독" && <Subscription/>}
                {navName == "보관함" && <Gallery/>}
            </React.Fragment>
        </main>
    )
}
export default Main