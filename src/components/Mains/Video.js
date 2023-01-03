import React from "react"
import {useSelector, useDispatch} from "react-redux"

import SharePopup from "./Videos/SharePopup"
import Reply from "./Videos/Reply"
import Share from "./Videos/Share"
import Likes from "./Videos/Likes"
import { isShareClick } from "../../redux/action"


const Video = () =>{

    // ===== dispatch =====
    const dispatch = useDispatch()

    // ===== useSelector =====
    const videoInfo = useSelector( state => state.videoInfo)
    const [thumbSrc, profileSrc, videoHead, channelName] = [...videoInfo.split(",")]

    // ===== state =====
    const [thumbHover, setThumbHover] = React.useState(false)

    // ===== event =====
    const screenClickEvent = ()=>{
        document.getElementById("video").requestFullscreen()
    }

    const shareClickEvent = ()=>{
        dispatch(isShareClick())
    }

    return(
        <React.Fragment>
                <article>
                    {thumbHover && <img src= "./img/video/fullscreen_icon.png" alt="" id="fullscreen" onClick={screenClickEvent} onMouseOver={()=>setThumbHover(true)} onMouseOut={()=>setThumbHover(false)}/>}
                    <img src={thumbSrc} alt="" id="video" onMouseOver={()=>setThumbHover(true)} onMouseOut={()=>setThumbHover(false)}/>
                </article>
                <h1>{videoHead}</h1>
                <aside>
                    <div id="aside_left">
                        <div id="channel_info">
                            <img src={profileSrc} id="video_profile"/>
                            <div id="video_details">
                                <h2 id="channel_name">{channelName}</h2>
                                <div id="subscribe_num">2만 명</div>
                            </div>
                        </div>    
                        <button class="aside_txt video_btn" id="sign_in">가입</button>
                        <button class="aside_txt video_btn" id="subscribe">구독</button>
                    </div>
                    
                    <div id="aside_menu">
                        <Likes/>
                        <div id="share_div" class="video_btn" onClick ={shareClickEvent}>
                            <img src= "./img/video/share_icon.png" alt="" class="video_icon"/>
                            <span class="aside_txt">공유</span>
                        </div>
                    </div>
                </aside>
                <Reply/>
                <Share/>
                
        </React.Fragment>
        
    )
}

export default Video