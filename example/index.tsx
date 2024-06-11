import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../dist/recursion-level-list.cjs.development.css'
import { RecursionLevelList } from '../dist/index';
import { list, statsList } from "../mock-data/RecursionLevelList";


// 自定义最小层级点击事件回调函数
const callback = ()=> {

}

// 无操作，纯展示
const onlyView = false;

const App = () => {
  return (
    <div>
      <RecursionLevelList list={list} statsList={statsList} callback={callback} onlyView={onlyView} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
