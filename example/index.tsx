import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../dist/recursion-level-list.cjs.development.css'
import { RecursionLevelList } from '../dist/index';
// import { RecursionLevelList } from "../dist/index";



const list = [
  {
      "id": "PROD100000261",
      "name": "证书详情-去学习11",
      "next": [
          {
              "name": "证书详情-去学习22",
              "nodeType": "C",
              "parentId": "PROD100000261",
              "parentName": "证书详情-去学习",
              "preview": true,
              "productId": "PROD100000261",
              "speedRate": "0",
              "spnum": 0,
              "units": [
                  {
                      "downloadable": false,
                      "handouts": false,
                      "id": "UNIT10006447",
                      "name": "证书详情-去学习",
                      "nodeType": "CU",
                      "num": 5,
                      "parentName": "证书详情-去学习",
                      "preview": true,
                      "previewLength": 60,
                      "productId": "PROD100000261",
                      "productName": "证书详情-去学习",
                      "speedRate": "0",
                      "spnum": 0,
                      "type": 3,
                      "uncoil": true
                  }
              ],
              "type": 1,
              "next": [
                  {
                      "downloadable": false,
                      "handouts": false,
                      "id": "UNIT10006447",
                      "name": "证书详情-去学习33",
                      "nodeType": "CU",
                      "num": 5,
                      "parentName": "证书详情-去学习",
                      "preview": true,
                      "previewLength": 60,
                      "productId": "PROD100000261",
                      "productName": "证书详情-去学习",
                      "speedRate": "0",
                      "spnum": 0,
                      "type": 3,
                      "uncoil": true,
                      "isUnit": true
                  }
              ]
          }
      ],
      "nodeType": "P",
      "preview": true,
      "speedRate": "0",
      "spnum": 0,
      "type": 1
  }
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
