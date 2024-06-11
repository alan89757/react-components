/* eslint-disable */
import React, { useState, useEffect } from 'react';
import SubjectType from './components/SubjectType'; // 科目类型
import CommonType from './components/CommonType'; // 普通类型
import RecursionLevelChildren from './RecursionLevelChildren';
import { assembleData } from './utils/index';
import './css/RecursionLevelList.css';
import { IPropType, IChapterCourse } from "./interface/index";


// nodeType注释
/**
  J-科目类型 P-产品类型 C-章类型 S-节类型 CU-学习单元类型(章) SU-学习单元类型(节)
  console.log(item.id === it.id && it.nodeType === item.nodeType)
  nodeType=== CU 和SU   nodetype和id匹配
  nodeType=== S  nodeType和parentName和name匹配
  nodeType=== C  nodeType和productId和name匹配
  nodeType=== p  nodeType和parentId存在，parentId和id一起匹配，不存在直接用id匹配
*/

export default function RecursionLevelList(props: IPropType) {
  const { list = [], callback, stats = [] } = props;
  const [preClickIdArr, setPreClickIdArr] = useState<string[]>([]);

  // 切换箭头打开/关闭
  const openClose = (item: any) => {
    const currentVal = item.name;
    let preClickIdArr2 = JSON.parse(JSON.stringify(preClickIdArr));
    if (preClickIdArr2.indexOf(currentVal) === -1) {
      preClickIdArr2.push(currentVal);
    } else {
      preClickIdArr2.splice(preClickIdArr2.indexOf(currentVal), 1);
    }
    setPreClickIdArr(preClickIdArr2);
  };

  // 判断是否默认打开
  const hasPreClickId = (name: string) => {
    if (preClickIdArr.indexOf(name) > -1) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="page1">
      <div className="group1">
        {list.length > 0 ? (
          list.map((item: IChapterCourse, index: number) => {
            const { next, name, nodeType, preview = false } = item;
            // 学习进度
            const { speedRate = 0, spnum = 0 } = assembleData(item, stats);
            return (
              <div key={name}>
                <div className="group2">
                  <div
                    onClick={() => {
                      openClose(item);
                    }}
                  >
                    {/* J - 科目类型 */}
                    {nodeType === 'J' ? (
                      <SubjectType
                        index={index}
                        name={name}
                        hasPreClickId={hasPreClickId}
                      />
                    ) : (
                      <CommonType
                        hasPreClickId={hasPreClickId}
                        name={name}
                        preview={preview}
                        speedRate={speedRate}
                        spnum={spnum}
                        index={index}
                      />
                    )}
                  </div>
                </div>
                {/* 是否展开 */}
                {hasPreClickId(name) && (
                  <RecursionLevelChildren
                    list={next}
                    stats={stats}
                    callback={callback}
                  />
                )}
              </div>
            );
          })
        ) : (
          <div className="group15">
            <div className="group16">
              <span className="group18">课程内容正在制作中</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
