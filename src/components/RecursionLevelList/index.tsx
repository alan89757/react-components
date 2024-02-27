/* eslint-disable */
import React, { useState, useEffect } from 'react';
import RecursionLevelChildren from './RecursionLevelChildren';
import { RoundedProgressBar } from './RoundedProgressBar';
import { assembleData } from './utils/index';
import './css/RecursionLevelList.css';

interface IChapterCourse {
  name: string;
  next: IChapterCourse[];
}

interface IPropType {
  list: IChapterCourse[]; // 产品树
  stats?: any[]; // 统计数据
  callback?: Function; // 回调函数，点击当前行自定义处理
}

export default function RecursionLevelList(props: IPropType) {
  const { list = [], callback, stats = [] } = props;
  const [preClickIdArr, setPreClickIdArr] = useState([]);
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
  const hasPreClickId = (arr: any, name: any) => {
    if (arr.indexOf(name) > -1) {
      return true;
    } else {
      return false;
    }
  };

  const findPreview = (next: any) => {
    const find = (next: any) => {
      return next.find((item: any) => {
        if (item.next) {
          return find(item.next);
        }
        if (item.preview) {
          return true;
        }
      });
    };
    return !!find(next);
  };

  return (
    <div className="page1">
      <div className="group1">
        {list &&
          list.map((item: any, index: number) => {
            const { next } = item;
            // 查找是否有试学
            let isPreivew = findPreview(next);
            // 学习进度
            const { speedRate = 0, spnum = 0 } = assembleData(item, stats);

            return (
              <div key={item.name}>
                <div className="group2">
                  <div
                    onClick={() => {
                      openClose(item);
                    }}
                  >
                    {item.nodeType === 'J' ? (
                      <div
                        className={'group21'}
                        style={{
                          marginTop: index > 0 ? 20 : 0,
                        }}
                      >
                        <div className={'group23'}>
                          <span className="text21"> </span>
                          <span className={'text22'}>{item.name}</span>
                        </div>
                        {hasPreClickId(preClickIdArr, item.name) ? (
                          <div
                            className="iconfont  icon-symbol_up"
                            style={{
                              marginRight: 20,
                            }}
                          ></div>
                        ) : (
                          <div
                            className="iconfont  icon-symbol_down"
                            style={{
                              marginRight: 20,
                            }}
                          ></div>
                        )}
                      </div>
                    ) : (
                      <div
                        style={{
                          paddingTop: 16,
                          paddingRight: 10,
                          paddingLeft: 10,
                        }}
                      >
                        <div className={index == 0 ? 'group3Top' : 'group3'}>
                          {hasPreClickId(preClickIdArr, item.name) ? (
                            <div className="expand_1_1 iconfont icon-expand_1_1">
                              <img src="https://app.static.wangxiao.cn/libs/images/arrow1_down.svg" alt="" className="arrow_up_down_icon" />
                            </div>
                          ) : (
                            <div className="expand_1_2 iconfont icon-expand_1_2">
                              <img src="https://app.static.wangxiao.cn/libs/images/arrow1_right.svg" alt="" className="arrow_up_down_icon" />
                            </div>
                          )}
                          <div className="text1Wrap">
                            <span className={'text1'}>{item.name}</span>
                            {isPreivew ? (
                              <span className="text10">试学</span>
                            ) : null}
                          </div>
                        </div>
                        <div className="group4">
                          {speedRate ? (
                            <RoundedProgressBar
                              progress={speedRate}
                              width={40}
                              height={6}
                              color="#E51600"
                              borderRadius={4}
                              trailColor={'rgba(0,0,0,0.06)'}
                            />
                          ) : null}
                          {speedRate ? (
                            <span className="text2">{speedRate * 100}%</span>
                          ) : null}
                          <span className="text3">{spnum}人关注</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {hasPreClickId(preClickIdArr, item.name) ? (
                  item.next && item.next.length > 0 ? (
                    <RecursionLevelChildren
                      list={item.next}
                      stats={stats}
                      callback={callback}
                    />
                  ) : (
                    <div className="group15" key={item.name}>
                      <div className="group16">
                        <span className="group18">课程内容正在制作中</span>
                      </div>
                    </div>
                  )
                ) : null}
              </div>
            );
          })}
      </div>
    </div>
  );
}
