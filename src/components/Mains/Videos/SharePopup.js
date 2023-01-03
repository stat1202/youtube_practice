import React from "react"
import {useSelector, useDispatch} from "react-redux"

import { isShareClick } from "../../../redux/action"

const SharePopup = (props) =>{

    // ===== props =====
    const header = props.header

    // ===== dispatch =====
    const dispatch = useDispatch()

    //===== useSelector =====
    const shareClick = useSelector( state=> state.shareClick)

    // ===== event =====
    const shareClickEvent = ()=>{
        dispatch(isShareClick())
    }

    return(
        <div class={shareClick ? 'openModal modal' : 'modal'}>
            {
                shareClick 
                ? 
                (
                    <section>
                        <div id="head">
                            {header}
                            <button class="close" onClick={shareClickEvent}>
                            </button>
                        </div>
                        <div id="main_txt">{props.children}</div>
                        <footer>
                            <button class="close" onClick={shareClickEvent}>
                                close
                            </button>
                        </footer>
                    </section>
                )
                : null
                }
        </div>
    )
}

export default SharePopup