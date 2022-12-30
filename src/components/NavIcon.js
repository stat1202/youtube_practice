import React from "react"

const NavIcon = (props) =>{
    const data = props.data
    const {src, txt} = {...data}
    const type = props.type

    return(
        <div href="" class={type =="show" ? "nav_box" : "click_nav_box"}>
            <img src = {src} class = {type =="show" ? "nav_icon" : "click_nav_icon"}/>
            <span class="nav_txt">{txt}</span>
        </div>
    )
}

export default NavIcon