import React from 'react';
import { renderIcon, RenderProgress } from '../components/common';

interface Iprops {
  name: string;
  callback?: Function;
  type: number;
  item: any;
}

// 单元类型：0资料,1视频 ,2 题库 3 考试,4直播
const UnitType = (props: Iprops) => {
  console.log('00111---', props);
  const { callback, name, type, item } = props;
  return (
    <div className={'group5-child'} key={name}>
      <div onClick={() => callback && callback()}>
        <div className="group6-child">
          <div className="children6-child">{renderIcon(type)}</div>
          <span className={'text4-child'}>{name}</span>
        </div>
        <div className="group7-child">{RenderProgress(item)}</div>
      </div>
    </div>
  );
};

export default UnitType;
