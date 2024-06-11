/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { RoundedProgressBar } from './RoundedProgressBar';
import { assembleData } from './utils/index';
import { RenderProgress } from './components/common';
import CommonType from './components/CommonType'; // 普通类型
import UnitType from './components/UnitType'; // 普通类型
import './css/RecurisonLevelChildRen.css';
import { IPropType, IChapterCourse } from "./interface/index";

export default function RecursionLevelChildren(props: IPropType) {
  const { list = [], callback, stats = [] } = props;
  const [preClickIdArr, setPreClickIdArr] = useState<any>([]);

  // 箭头打开/收起
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
    <div>
      {list.map((item: IChapterCourse, index: number) => {
        console.log('item---', item)
        const { name, next, preview, isPurchase, isUnit, type } = item;
        // 学习进度
        const currentData = assembleData(item, stats);
        const { speedRate = 0, spnum = 0 } = currentData;
        if (next && next.length > 0) {
          return (
            <div key={name}>
              <div className="group2-child" key={name}>
                <div
                  onClick={() => {
                    openClose(item);
                  }}
                >
                  <CommonType
                    hasPreClickId={hasPreClickId}
                    name={name}
                    preview={false}
                    speedRate={speedRate}
                    spnum={spnum}
                    index={index}
                  />
                </div>
              </div>
              {hasPreClickId(name) && (
                <RecursionLevelChildren
                  list={next}
                  stats={stats}
                  callback={callback}
                />
              )}
            </div>
          );
        } else {
          // 展示单元数据
          return isUnit ? (
            <UnitType
              item={item}
              type={type}
              callback={() => {
                (preview || isPurchase) &&
                  callback &&
                  callback({ ...item, ...currentData });
              }}
              name={name}
            />
          ) : (
            <CommonType
              hasPreClickId={hasPreClickId}
              name={name}
              preview={false}
              speedRate={speedRate}
              spnum={spnum}
              index={index}
            />
          );
        }
      })}
    </div>
  );
}
