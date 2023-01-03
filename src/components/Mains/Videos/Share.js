import React from "react"

import SharePopup from "./SharePopup"

const Share = ()=>{
    return(
        <SharePopup header = "공유">
            <span>
                네이버 
            </span>
            <span>
                카카오톡 
            </span>
            <span>
                트위터 
            </span>
            <span>
                인스타그램 
            </span>
        </SharePopup>
    )
}

export default Share