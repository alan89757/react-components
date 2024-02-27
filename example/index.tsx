import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../dist/recursion-level-list.cjs.development.css'
import { RecursionLevelList } from '../dist/index';
// import { RecursionLevelList } from "../dist/index";



const list = [
  {
    id: 'PROD100000089',
    name: '金刚区产品-别动11',
    next: [
      {
        name: '22222',
        nodeType: 'C',
        parentId: 'PROD100000089',
        parentName: '金刚区产品-别动333',
        preview: false,
        productId: 'PROD100000089',
        speedRate: '0',
        spnum: 0,
        units: [
          {
            downloadable: false,
            handouts: false,
            id: 'UNIT10003582',
            name: '测试PDF',
            nodeType: 'CU',
            num: 1,
            parentName: '111',
            preview: false,
            previewLength: 0,
            productId: 'PROD100000089',
            productName: '金刚区产品-别动',
            speedRate: '0',
            spnum: 0,
            type: 0,
            uncoil: false,
          },
        ],
        type: 1,
        next: [
          {
            downloadable: false,
            handouts: false,
            id: 'UNIT10003582',
            name: '测试PDF',
            nodeType: 'CU',
            num: 1,
            parentName: '111',
            preview: false,
            previewLength: 0,
            productId: 'PROD100000089',
            productName: '金刚区产品-别动',
            speedRate: '0',
            spnum: 0,
            type: 0,
            uncoil: false,
            isUnit: true,
          },
        ],
      },
    ],
    nodeType: 'P',
    preview: false,
    speedRate: '0',
    spnum: 0,
    type: 1,
  },
];

const App = () => {
  return (
    <div>
      <RecursionLevelList list={list} />
      {/* <RecursionLevelList /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
