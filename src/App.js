import React from "react"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Main from "./components/Main"

const App = ()=>{
    return(
        <React.Fragment>
            <Header/>
            <Nav/>
            <Main/>
        </React.Fragment>
    )
}

export default App