import React from "react"
import {useDispatch} from "react-redux"

import HeaderIcon from "./HeaderIcon"
import {isMenuClick} from "../redux/action"

const Header = (props) =>{

    //===== header data =====
    const headerList = [
        {
            "src" : "../img/header/back.png",
            "className" : "header_icon",
            "id" : "back_icon"
        },
        {
            "src" : "../img/header/menu.png",
            "className" : "header_icon",
            "id" : "menu_icon"
        },
        {
            "src" : "../img/header/logo.png",
            "className" : "header_icon",
            "id" : "logo"
        },
        {
            "src" : "../img/header/search.png",
            "className" : "header_icon",
            "id" : "search_icon"
        },
        {
            "src" : "../img/header/mic.png",
            "className" : "header_icon",
            "id" : "mic_icon"
        },
        {
            "src" : "../img/header/search.png",
            "className" : "header_icon hidden_icon",
            "id" : "hidden_search_icon"
        },
        {
            "src" : "../img/header/mic.png",
            "className" : "header_icon hidden_icon",
            "id" : "hidden_mic_icon"
        },
        {
            "src" : "../img/header/set.png",
            "className" : "header_icon",
            "id" : "set_icon"
        },
        {
            "src" : "../img/header/user.png",
            "className" : "header_icon",
            "id" : "login_icon"
        },
    ]

    // ===== dispatch =====
    const dispatch = useDispatch()

    // ===== event =====
    const isMenuClickEvent = () =>{
        dispatch(isMenuClick())
    }

    const menuEvent = (e) =>{
        const target_id = e.target.id
        switch (target_id){
            case "menu_icon":
                isMenuClickEvent()
                break
            case "logo":
                window.location.reload()
                break
        }
    }
    
    return(
        <React.Fragment>
            <header>
                <HeaderIcon data = {headerList[0]} />
                <div id="header_left" onClick = {menuEvent}>
                    <HeaderIcon data = {headerList[1]} />
                    <HeaderIcon data = {headerList[2]}/>
                </div>
                <div id ="header_middle">
                    <div id="search_box">
                        <input type="text" id="search_bar" placeholder = "검색"/>
                        <HeaderIcon data = {headerList[3]}/>
                    </div>
                    <HeaderIcon data = {headerList[4]}/>
                </div>
                <div id = "header_right">
                    <HeaderIcon data = {headerList[5]}/>
                    <HeaderIcon data = {headerList[6]}/>
                    <HeaderIcon data = {headerList[7]}/>
                    <div id="login_btn">
                        <HeaderIcon data = {headerList[8]}/>
                        <p id="login">로그인</p>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header