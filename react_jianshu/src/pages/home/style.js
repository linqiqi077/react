import styled from 'styled-components';


export const HomeWrapper = styled.div`
    overflow:hidden;
    width: 960px;
    margin: 0 auto;
`

export const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top:30px;
    float:left;

    .banner-img {
        width:635px;
        height:270px;
    }
`

export const HomeRight = styled.div`
width: 280px;
float:right;
`

// 主题的样式
export const TopicWrapper = styled.div`
padding:20px 010px 0;
margin-left:-18px;
overflow:hidden;
border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
padding-right:10px;
margin-left:18px;
margin-bottom:18px;
height:32px;
line-height:32px;
float:left;
background:#f7f7f7;
font-size:14px;
color:#000;
border:1px solid #dcdcdc;
border-radius:4px;
.topic-pic {
    display:block;
    float:left;
    width:32px;
    height:32px;
    margin-right:10px;
   
}
`

// 列表样式
export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow:hidden;
    .pic {
        display:block;
        width:125px;
        height:100px;
        float:right;
    }
`

export const ListInfo = styled.div`
.title {
    font-size:18px;
    font-weight:700;
    color:#2f2f2f;
    line-height:1.5;
    margin-bottom: 4px;
}
.desc{
    matgin: 0 0 8px;
    font-size: 13px;
    line-height:24px;
    color:#999;
}
`

// 推荐样式

export const RecommendWrapper = styled.div`
margin: 30px 0;
width:280px;
`
// 这里接收到组件里面传过来的imgUrl值
export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    margin-bottom:8px;
    background:url(${(props)=>props.imgUrl});
    background-size:contain;
`

// 作者组件样式
export const WriterWrapper  = styled.div`
    width: 278px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    line-height: 300px;
    text-align: center;
`

// 加载更多组件
export const LoadMore = styled.div`
    width: 100%;
    height:40px;
    line-height:40px;
    background:#a5a5a5;
    border-radius: 20px;
    color:#fff;
    text-align:center;
    margin: 30px 0;
    cursor:pointer;
`

// 回到顶部
export const BackTop = styled.div`
    position: fixed;
    width:60px;
    height:50px;
    line-height: 50px;
    text-align: center;
    right:100px;
    bottom:100px;
    font-size:12px;
    cursor:pointer;
    border: 1px solid #ccc;
`