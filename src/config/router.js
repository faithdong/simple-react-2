/*
 * @Author: zhongxd 
 * @Date: 2018-09-06 10:51:57 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-06 10:53:39
 */


 import React , { createElement } from 'react';
 import { Spin } from 'antd';
 import pathToRegexp from 'path-to-regexp';
 import Loadable from 'react-loadable';
 import { getMenuData } from './menu';


 let routerDataCache;