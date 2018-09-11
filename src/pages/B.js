

import React from 'react';
import { Icon } from 'antd';
import C from './C';
export default class B extends React.Component {
  constructor(props){
    super(props);
    console.log("0--->constructor--->构造函数");
  }
  getDefaultProps = () => {
    console.log("1-->getDefaultProps-->设置默认的props，在ES6语法中，使用class定义了一个类，那么react 生命周期是没有此钩子函数。使用constructor定义默认props");
  }
  getInitialState = () => {
    console.log("2-->getInitialState-->设置state，在es6 class 语法中，没有此钩子函数(意思是如果使用 class定义的 类，那么react 生命周期是没有此钩子函数)。使用constructor定义默认state")
  }
  componentWillMount = () => {
    console.log("3--->componentWillMount-->组件初始化调用，以后组件更新不会调用，整个生命周期只有一次。");
  }
  render = () => {
    console.log("4-->render-->react最重要的步骤，创建虚拟DOM（document.createDocumentFragment()），进行diff算法,渲染DOM,跟新DOM树。此时就不能在更新state");
    return (
      <div>
        <C caption="First" value={5} />
        <C caption="Second" value={10} />
        <C caption="Third" value={20} />
        <h1> B page</h1>
        <Icon type="link" />
      </div>
    )
  }
  componentDidMount = () => {
    console.log("5-->componentDidMount-->组件渲染完成，生命周期只调用一次");
  }
  componentWillReceviceProps = (nextProps) => {
    console.log(nextProps + "-->6-->componentWillReceviceProps--->组件初始化时不调用,组件接收新的props时调用");
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    console.log(nextProps + "---" + nextState + "--->7-->shouldComponentUpdate-->react 性能优化，更新前的props和state和更新后的props和state做比较，如果相同返回fasle，则不再重新渲染DOM,反之返回true需要渲染DOM。这是实现react优化的重要的钩子函数。");
    return true;
  }
  componentWillUpdate = (nextProps, nextState) => {
    console.log(nextProps + "---" + nextState + "--->8-->componentWillUpdate--->组件初始化时不调用，只有组件更新时才调用，此时可以修改state");
  }
  componentDidUpdate = () => {
    console.log("9--->componentDidUpdate--->组件初始化不调用，只有组件更新完成后调用，此时可以获取dom节点。");
  }
  componentWillUnmount = () => {
    console.log("10--->componentWillUnMount--->组件将要卸载时调用，一些事件和定时器可以在此清除。");
  }
}