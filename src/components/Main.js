import React from "react"
import {useSelector} from "react-redux"

import Shorts from "./Mains/Shorts"
import Subscription from "./Mains/Subscription"
import Gallery from "./Mains/Gallery"
import Home from "./Mains/Home"
import Video from "./Mains/Video"

const Main = () =>{
    
    //===== useSelector =====
    const navName = useSelector(state => state.navName)
    const videoInfo = useSelector(state => state.videoInfo)

    return(
        <main id={videoInfo !="none" && "video_main"}>
            {
                videoInfo == "none"
                ?
                <React.Fragment>
                    {navName == "홈"&& <Home/>}
                    {navName == "Shorts" && <Shorts/>}
                    {navName == "구독" && <Subscription/>}
                    {navName == "보관함" && <Gallery/>}
                </React.Fragment>
                :
                <Video/>
            }
        </main>
    )
}
export default Main