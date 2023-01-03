import React from "react"
import MainContents from "./MainContents"


const Home = () =>{

    //===== data =====
    const timer = ["14:21", "8:30", "16:45", "25:16", "52:10", "11:06", "8:31", "41:44", "20:29", "12:46", "13:41", "14:21"]
    const video_head = [`떡볶이 무한리필 vs 마라탕 무한리필! 단 한개만 골라야 한다면?ㅋㅋㅋ`, `솔랭인줄... 대회에서 나온 역대급 1인 캐리 모음!!`, `훈련소에서 살 찔 틈이 없는데 살이 찌게 되는 이유 #푸른거탑제로 EP.11-01 #131016`,
    `겨울철 간단한 김장`, `Playlist 벌써부터 크리스마스 기다리는 사람? Merry Christmas Carol`, `절대 안죽는 흡혈탱커ㅋㅋㅋ스킬 한방=풀피 회복 ㅋㅋㅋㅋ[정글 아트록스]`, `호날두의 짜증과 수아레스의 오열... 캡틴 손흥민이 증명한 '슈퍼스타'의 역할 / 스포츠머그`,
    `[#스트리드푸드파이터2] 아침엔 럼버잭, 점심엔 햄버거, 저녁엔 스테이크, 야식으로는 버팔로윙 백종원이 짜주는 가장 완벽한 뉴욕 먹투어 | #골라보는`, `마침내 세계 최강의 챔피언이 된 지우 이야기 / 한지우 일대기`,
    `[EN] 경차 사러 갔다가 롤스로이스 샀습니다 | 중고자 | 워크맨 ep.141`, `IMF 터져서 개털된 회장 할아버지에게 용돈으로 1조 5천억원씩 주는 $달러$ 부자 [재벌집 막내아들] 5화 리뷰`, `떡볶이 무한리필 vs 마라탕 무한리필! 단 한개만 골라야 한다면?ㅋㅋㅋ`]
    const channel_name = [`흔한남매`, `지빠님`,`디글 클래식 :Diggle Classic`, `침착맨`, `때껄룩`, `텔론`, `스포츠머그-SPORTSMUG`, `tvN D ENT`, `초코리타`, `워크맨-Workman`, `민호타우르스`, `흔한남매`]
    const post_time = [`6일 전`, `11일 전`, `2년 전`, `2시간 전`, `1년 전`, `8일 전`, `11시간 전`, `3개월 전`, `6일 전`, `8개월 전`, `6일 전`, `6일 전`]
    const view_num = [56, 32, 209, 9.3, 592, 13, 164, 69, 40, 185, 185, 213 ,56]
    const profile = []
    const thumb = []
    const view = []
    const h_clock  = "./img/main/clock_icon.png"
    const h_play  = "./img/main/playlist_icon.png"
    const h_set = "./img/main/set.png"
    const random_set = new Set()
    const n = timer.length
    const n_arr = []
    const mainList = []

    // ===== 배치 작업 =====
    const randomSort = () =>{
        view_num.forEach( (num) => {
            view.push(`조회수 ${num}만회`)
        })
        for( let i = 0 ; i < n; i ++){
            n_arr.push(i)
            thumb.push(`../contents/thumb/hq720 (${i}).webp`)
            profile.push(`../contents/profile/profile(${i}).jpg`)
        }
        // 랜덤 배치
        while( random_set.size < n){
            random_set.add(Math.floor(Math.random()*n))
        }
        random_set.forEach( (num) => {
            mainList.push({
                "thumb" : thumb[num],
                "timer" : timer[num],
                "profile": profile[num],
                "video_head" : video_head[num],
                "channel_name" : channel_name[num],
                "post_time" : post_time[num],
                "view" : view[num],
                "h_clock" : h_clock,
                "h_play" : h_play,
                "h_set" : h_set
            })
        })
    }
    randomSort()

    return(
        n_arr.map( (value) =>{
            return <MainContents data = {mainList[value]}/>
        })
    )
}

export default Home