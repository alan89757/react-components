import React from 'react';
import { RoundedProgressBar } from '../RoundedProgressBar';

interface Iprops {
  index: number; // 数组的下标
  name: string; // 名称
  preview: boolean; // 是否试学
  speedRate: number; // 学习进度
  spnum: number; // 关注人数
  hasPreClickId: Function;
}

const CommonType = (props: Iprops) => {
  const { index, name, hasPreClickId, preview, speedRate, spnum } = props;
  return (
    <div
      style={{
        paddingTop: 16,
        paddingRight: 10,
        paddingLeft: 10,
      }}
      key={index}
    >
      <div className={index == 0 ? 'group3Top' : 'group3'}>
        {hasPreClickId(name) ? (
          <div className="expand_1_1 iconfont icon-expand_1_1">
            <img
              src="https://resource.wangxiao.cn/libs/images/arrow1_down.svg"
              alt=""
              className="arrow_up_down_icon"
            />
          </div>
        ) : (
          <div className="expand_1_2 iconfont icon-expand_1_2">
            <img
              src="https://resource.wangxiao.cn/libs/images/arrow1_right.svg"
              alt=""
              className="arrow_up_down_icon"
            />
          </div>
        )}
        <div className="text1Wrap">
          <span className={'text1'}>{name}</span>
          {preview ? <span className="text10">试学</span> : null}
        </div>
      </div>
      <div className="group4">
        {speedRate ? (
          <RoundedProgressBar
            speedRate={speedRate}
            width={40}
            height={6}
            color="#E51600"
            borderRadius={4}
            trailColor={'rgba(0,0,0,0.06)'}
          />
        ) : null}
        {speedRate ? <span className="text2">{speedRate * 100}%</span> : null}
        <span className="text3">{spnum}人关注</span>
      </div>
    </div>
  );
};

export default CommonType;
