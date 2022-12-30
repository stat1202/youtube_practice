import React from "react"


const HeaderIcon = (props) =>{
    const data  = props.data
    const {src, className, id} = {...data}
    
    return(
        <img src={src} class={className} id={id}/>
    )
}

export default HeaderIcon