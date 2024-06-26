import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../dist/shop-factory-react.cjs.development.css'
import { RecursionLevelList, Welcome } from '../dist/index';
import { list, statsList } from "../mock-data/RecursionLevelList";


// 自定义最小层级点击事件回调函数
const callback = ()=> {
  console.log("自定义处理点击事件---");
}

// 无操作，纯展示
const onlyView = true;

const App = () => {
  return (
    <div>
      <Welcome username={'Alan'} />
      {/* <RecursionLevelList list={list} statsList={statsList} callback={callback} onlyView={onlyView} /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
