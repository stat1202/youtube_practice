import React from "react"
import {useSelector, useDispatch} from "react-redux"

import NavIcon from "./NavIcon"
import {isMenuClick, whatNavClick, thumbClick} from "../redux/action"

const Nav = () =>{

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

    const whatNavClickEvent = (e)=>{
        const target_name = navClickEvent(e)
        dispatch(whatNavClick(target_name))
        dispatch(thumbClick("none"))
    }

    const navClickEvent = (e) =>{
        const target_name = e.target.className
        let target = e.target
        switch(target_name){
            case "nav_box":
                return target.children[1].innerHTML
            case "nav_icon":
                target = target.parentElement
                return target.children[1].innerHTML
            case "nav_txt":
                return target.innerHTML
            default :
                return "홈"
        }
    }

    // 네이밍 isOpen isClicked 등으로 짓기
    // 바뀔 가능성이 어떤게 높은가
    return(
        <React.Fragment>
            <nav id= {menuClick && "click_nav"} onClick={whatNavClickEvent}>
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