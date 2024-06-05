import React from 'react';
import { renderIcon, RenderProgress } from "../components/common";

interface Iprops {
  name: string;
  callback?: Function;
  type: number;
}

// 科目类型-样式不一样
const UnitType = (props: Iprops) => {
  const { callback, name, type } = props;
  return (
    <div className={'group5-child'} key={name}>
      <div onClick={() => callback && callback()}>
        <div className="group6-child">
          <div className="children6-child">{renderIcon(type)}</div>
          <span className={'text4-child'}>{name}</span>
        </div>
        <div className="group7-child">
          {/* {RenderProgress({ ...item, ...currentData })} */}
        </div>
      </div>
    </div>
  );
};

export default UnitType;
