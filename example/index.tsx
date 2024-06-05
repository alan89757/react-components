import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../dist/recursion-level-list.cjs.development.css'
import { RecursionLevelList } from '../dist/index';
import list from "../mock-data/RecursionLevelList";



const App = () => {
  return (
    <div>
      <RecursionLevelList list={list} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
