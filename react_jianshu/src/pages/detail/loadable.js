import React from 'react';
import Loadable from 'react-loadable';
// 实现分组件异步加载功能
const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading() {
        return <div> 正在加载^^ </div>
    }
});

export default () => <LoadableComponent />;
