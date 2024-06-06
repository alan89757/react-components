/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { RoundedProgressBar } from './RoundedProgressBar';
import { assembleData } from './utils/index';
import { RenderProgress } from "./components/common";
import CommonType from './components/CommonType'; // 普通类型
import UnitType from './components/UnitType'; // 普通类型
import './css/RecurisonLevelChildRen.css';

interface IChapterCourse {
  name: string;
  next?: IChapterCourse[];
  nodeType: string;
  type: number;
  isPurchase?: boolean; // 是否购买
  preview?: boolean;
  isUnit?: boolean; // 是否是单元
}
interface IPropType {
  list?: IChapterCourse[]; // 列表
  stats: any[]; // 统计数据
  callback?: Function; // 回调函数，点击单条数据调用，可自行处理跳转
}

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

  // 按钮文案
  // 类型 0资料,1视频 ,2 题库 3 考试 ,4直播
  const renderText = (type: any) => {
    // return "手机学习";
    switch (type.type) {
      case 0:
        return '查看';
      case 1:
        return '播放';
      case 2:
        return '手机学习';
      // return "练习";
      case 3:
        return '手机学习';
      // return "考试";
      case 4:
        return '手机学习';
      // return "播放";
    }
    return '学习';
  };

  return (
    <div>
      {list.map((item: IChapterCourse, index: number) => {
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
              {hasPreClickId(name) ? (
                <RecursionLevelChildren
                  list={next}
                  stats={stats}
                  callback={callback}
                />
              ) : null}
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
            <div className="group2-child" key={name}>
              <div
                onClick={() => {
                  openClose(item);
                }}
              >
                <div className="group3-child">
                  {hasPreClickId(name) ? (
                    <div className="iconfont IconExpand2 icon-expand_3_1 ">
                      <img
                        src="https://resource.wangxiao.cn/libs/images/arrow2_down.svg"
                        alt=""
                        className="arrow_up_down_icon"
                      />
                    </div>
                  ) : (
                    <div className="iconfont IconShrink2  icon-expand_3_2">
                      <img
                        src="https://resource.wangxiao.cn/libs/images/arrow2_right.svg"
                        alt=""
                        className="arrow_up_down_icon"
                      />
                    </div>
                  )}
                  <span className="text1-child">{name}</span>
                </div>
              </div>
              <div className="group4-child">
                {RenderProgress({ ...item, ...currentData })}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
