import React from "react"
import Header from "./components/Header"
import MainNav from "./components/MainNav"

const App = ()=>{
    const [navClick, setNav] = React.useState(true)

    return(
        <React.Fragment>
            <Header navClick = {navClick} setNav = {setNav}/>
            <MainNav navClick = {navClick} setNav = {setNav}/>
        </React.Fragment>
    )
}

export default App