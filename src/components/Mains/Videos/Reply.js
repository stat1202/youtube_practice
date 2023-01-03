import React from "react"
import {useSelector, useDispatch} from "react-redux"
import { changeReply } from "../../../redux/action"


const Reply = () =>{

    // ===== dispatch =====
    const dispatch = useDispatch()

    //===== useSelector =====
    const reply = useSelector(state => state.reply)

    //===== event =====
    const changeReplyEvent = (e)=>{
        dispatch(changeReply(e.target.value))
    }

    return(
        <div id="reply_form">
            <input type="text" placeholder="댓글 추가..." id="reply_input" onChange={changeReplyEvent}/>
            <div>
                <button class="reply_btn">취소</button>
                <button class="reply_btn" id={reply=="" || "blue_btn"}>댓글</button>
            </div>
        </div>
            
    )
}
export default Reply