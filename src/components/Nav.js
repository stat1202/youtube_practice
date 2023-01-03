import React from "react"
import {useSelector, useDispatch} from "react-redux"

import NavIcon from "./NavIcon"
import {isMenuClick} from "../redux/action"

const Nav = (props) =>{
    
    //===== data =====
    const navList = [
        {
            "src" : "./img/nav/home.png",
            "txt" : "홈"
        },
        {
            "src" : "./img/nav/shorts.png",
            "txt" : "Shorts"
        },
        {
            "src" : "./img/nav/playlist.png",
            "txt" : "구독"
        },
        {
            "src" : "./img/nav/gallery.png",
            "txt" : "보관함"
        },
    ]
    const n = navList.length
    const n_arr = []
    for(let i=0; i< n ;i ++){
        n_arr.push(i)
    }

    // ===== dispatch ======
    const dispatch = useDispatch()

    // ===== useSelector =====
    const menuClick = useSelector( state => state.menuClick)

    // ===== event =====
    const isMenuClickEvent = () =>{
        dispatch(isMenuClick())
    }

    // 네이밍 isOpen isClicked 등으로 짓기
    // 바뀔 가능성이 어떤게 높은가
    return(
        <React.Fragment>
            <nav id= {menuClick && "click_nav"}>
                {
                    n_arr.map( (value) =>{
                        return (
                            <NavIcon data = {navList[value]} type={menuClick ?"hidden" : "show"}/>
                        )
                    })
                }
            </nav>
            {
                menuClick && <div id="overlay" onClick={isMenuClickEvent}></div>                    
            }
        </React.Fragment>           
    )
}

export default Nav