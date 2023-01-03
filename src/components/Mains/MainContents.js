import React from "react"
import {useSelector, useDispatch} from "react-redux"

import { thumbClick } from "../../redux/action"

const MainContents = (props) =>{

    // ===== data =====
    const data = props.data
    const {timer, thumb, profile, video_head, channel_name, post_time, view, h_clock, h_play,h_set} = {...data}                        
    const video_info = `${thumb}, ${profile}, ${video_head}, ${channel_name}`
    // ===== state =====
    const [hover, setHover] = React.useState(false)
    const [topHover, setTopHover] = React.useState(false)
    
    // ===== dispatch =====
    const dispatch = useDispatch()

    // ===== event =====
    const thumbClickEvent = (e)=>{
        const target = e.currentTarget.children[0]
        const target_src = target.value
        dispatch(thumbClick(target_src))
    }

    return(
        <div class="contents" onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)}>
            <div class = {topHover ? "click_contents_box" : "contents_box"}>
                <div class ="contents_top"onMouseOver={()=>setTopHover(true)} onMouseOut={()=>setTopHover(false)} onClick = {thumbClickEvent}>
                    <input type="text" value = {video_info} class="video_info"/>
                    <span class="timer">{timer}</span>
                    <img src={thumb} alt="" class = "thumb"/>
                </div>
                <div class = "detail">
                    <img src={profile} alt="" class = "channel_profile"/>
                    {hover? <img src={h_set} alt="" class="contents_set"/> :""}
                    
                    <div class = "contents_bottom">
                        <p class = "video_head">
                            {video_head}
                        </p>
                        <p class = "channel_name">
                            {channel_name}
                        </p>
                        <span class ="view"> {view}</span>
                        <span class = "post_time">{post_time}</span>
                    </div>
                </div>
                <div class={topHover ? "click_hidden_box" : "hidden_box"}>
                    <div class="contents_hidden">
                        <img src={h_clock} alt="" class="contents_hidden_icon"/>
                        <span>나중에 볼 동영상</span>
                    </div>
                    <div class="contents_hidden">
                        <img src={h_play} alt="" class="contents_hidden_icon"/>
                        <span>현재 재생목록에 추가</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContents