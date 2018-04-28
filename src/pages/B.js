

import React from 'react';
import {Icon} from 'antd';
import C from './C';
export default class B extends React.Component{
    render(){
        return(
            <div>
                <C  caption="First" value={5}/>
                <C  caption="Second" value={10}/>
                <C  caption="Third" value={20}/>
                <h1> B page</h1>
                <Icon type="link" />
            </div>
        )
    }
}