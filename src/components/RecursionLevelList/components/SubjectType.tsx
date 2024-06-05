import React from 'react';


interface Iprops {
  index: number;
  name: string;
  hasPreClickId:Function;
}



// 科目类型-样式不一样
const SubjectType = (props: Iprops) => {
  const { index, name, hasPreClickId } = props;
  return (
    <div
    className={'group21'}
    style={{
      marginTop: index > 0 ? 20 : 0,
    }}
  >
    <div className={'group23'}>
      <span className="text21"> </span>
      <span className={'text22'}>{name}</span>
    </div>
    {hasPreClickId(name) ? (
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
  )
}

export default SubjectType;