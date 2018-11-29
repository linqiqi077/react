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
width: 240px;
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