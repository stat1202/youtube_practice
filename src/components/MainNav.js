import React from "react"
import Main from "./Main"
import Nav from "./Nav"

const MainNav = (props) =>{
    const [nav_txt, setTxt] = React.useState("")
    const navClick = props.navClick
    const setNav = props.setNav
    const navClickEvent = (e) =>{
        const target_name = e.target.className
        let target = e.target
        switch(target_name){
            case "nav_box":
                return target.children[1].innerHTML
                break
            case "nav_icon":
                target = target.parentElement
                return target.children[1].innerHTML
                break
            case "nav_txt":
                return target.innerHTML
                break
            default :
                return ""
                break
        }
    }
    React.useEffect( ()=>{
        document.getElementsByTagName("nav")[0].addEventListener("click", (e)=>{
            setTxt(navClickEvent(e))
        })
    },[])

    return(
        <React.Fragment>
            <Nav navClick = {navClick} setNav = {setNav}/>
            <Main nav_txt = {nav_txt}/>
        </React.Fragment>
    )
}


export default MainNav