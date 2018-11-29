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

export const TopicWrapper = styled.div`
padding:20px 010px 0;
margin-left:-18px;
overflow:hidden;
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