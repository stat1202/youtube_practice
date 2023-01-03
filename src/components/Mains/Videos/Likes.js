import React from "react"


const Likes = ()=>{
    
    const [isLikeClick, setLikeClick] = React.useState(false)
    const [isDislikeClick, setDislikeClick] = React.useState(false)
    const [likes, setLikes] = React.useState(0)

    //===== event =====
    const likeClickEvent = ()=>{
        setLikeClick(!isLikeClick)

        if(!isLikeClick) {
            const tmp = likes +1
            setLikes(tmp)
        }
        else{
            const tmp = likes -1
            setLikes(tmp)
        }
        if(isDislikeClick) setDislikeClick(!isDislikeClick)
    }

    const dislikeClickEvent = ()=>{
        setDislikeClick(!isDislikeClick)
        if(isLikeClick) {
            setLikeClick(!isLikeClick)
            const tmp = likes -1
            setLikes(tmp)
        }
    }

    return(
        <React.Fragment>
            <div id="like_div" class="video_btn" onClick = {likeClickEvent}>
                <img src= {isLikeClick ? "./img/video/like_check_icon.png" :"./img/video/like_icon.png"} alt="" class="video_icon"/>
                <span class="aside_txt">{likes}</span>
            </div>
            <div id="dislike_div" class="video_btn" onClick = {dislikeClickEvent}>
                <img src= {isDislikeClick ? "./img/video/dislike_check_icon.png" : "./img/video/dislike_icon.png" } alt="" class="video_icon"/>
            </div>
        </React.Fragment>
        
    )
}

export default Likes