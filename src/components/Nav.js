import React from "react"
import NavIcon from "./NavIcon"

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

    //===== props =====
    const navClick = props.navClick
    const setNav = props.setNav
    // 네이밍 isOpen isClicked 등으로 짓기
    // 바뀔 가능성이 어떤게 높은가
    
    return(
        navClick
        ?
        <React.Fragment>
            <nav>
                {
                    n_arr.map( (value) =>{
                        return (
                            <NavIcon data = {navList[value]} type="show"/>
                        )
                    })
                }
            </nav>
        </React.Fragment>
        :
        <React.Fragment>
            <nav id="click_nav" >
                {
                    n_arr.map( (value) =>{
                        return (
                            <NavIcon data = {navList[value]} type="hidden"/>
                        )
                    })
                }
            </nav>
            <div id="overlay" onClick={()=>setNav(!navClick)}></div>                    
        </React.Fragment>
    )
}

export default Nav