import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './components/Dropdown/Dropdown';
let listData = [
    'Feng Weiping',
    'Chen Minmin',
    'Dang Tianliang',
    'Shan Kaiyuan',
    'Jiang Wenbo',
    'Jing Xijun',
    'KongFanjia',
    'Li Chunlai',
    'Li Jing'
];
ReactDOM.render(<Dropdown list={listData} />, document.getElementById('container'));