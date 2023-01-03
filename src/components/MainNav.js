// import React from "react"
// import {useSelector, useDispatch} from "react-redux"

// import Main from "./Main"
// import Nav from "./Nav"


// const MainNav = (props) =>{

//     //===== dispatch =====
//     const dispatch = useDispatch()

//     //===== state =====
//     const [nav_txt, setTxt] = React.useState("")
//     //통일해서 이름짓기
//     //===== props =====
//     const navClick = props.navClick
//     const setNav = props.setNav

//     //===== event =====
    

//     // React.useEffect( ()=>{
//     //     document.getElementsByTagName("nav")[0].addEventListener("click", (e)=>{
//     //         setTxt(navClickEvent(e))
//     //     })
//     // },[])

//     return(
//         <React.Fragment>
//             <Nav navClick = {navClick} setNav = {setNav}/>
//             <Main nav_txt = {nav_txt}/>
//         </React.Fragment>
//     )
// }


// export default MainNav