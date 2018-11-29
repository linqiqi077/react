import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';


class Home extends Component {
    render() {
        return (
            <div>
                <HomeWrapper>
                    <HomeLeft>
                        <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4579/0e3caa20d3d30658dc4b393d1ea105baa7e78248.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                        <Topic />
                        <List />
                    </HomeLeft>
                    <HomeRight>
                        <Recommend />
                        <Writer />
                    </HomeRight>
                </HomeWrapper>
            </div>
        )
    }
}

export default Home;