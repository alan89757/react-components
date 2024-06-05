import React from 'react';
import { RoundedProgressBar } from '../RoundedProgressBar';

interface IProps {
  index: number; // 数组的下标
  name: string; // 名称
  preview: boolean; // 是否试学
  speedRate: number; // 学习进度
  spnum: number; // 关注人数
  hasPreClickId: Function;
}

// 普通类型
const CommonType2 = (props: IProps) => {
  const { index, name, hasPreClickId } = props;
  return (
    <div className="group3-child">
      {hasPreClickId(name) ? (
        <div className="expand_1_1 iconfont icon-expand_1_1 ">
          <img
            src="https://app.static.wangxiao.cn/libs/images/arrow2_down.svg"
            alt=""
            className="arrow_up_down_icon"
          />
        </div>
      ) : (
        <div className="expand_1_2 iconfont icon-expand_1_2">
          <img
            src="https://app.static.wangxiao.cn/libs/images/arrow2_right.svg"
            alt=""
            className="arrow_up_down_icon"
          />
        </div>
      )}
      <span className={'text1-child'} style={{ fontWeight: 400 }}>
        {name}
      </span>
    </div>
  );
};

export default CommonType2;
