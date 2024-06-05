/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { RoundedProgressBar } from './RoundedProgressBar';
import './css/RecurisonLevelChildRen.css';

interface IChapterCourse {
  name: string;
  next: IChapterCourse[];
  nodeType: string;
  isPurchase?: boolean; // 是否购买
  preview?: boolean;
}
interface IPropType {
  list: IChapterCourse[]; // 列表
  stats: any[]; // 统计数据
  callback?: Function; // 回调函数，点击单条数据调用，可自行处理跳转
}

export default function RecursionLevelChildren(props: IPropType) {
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
  // 类型 0资料,1视频 ,2 题库 ,4直播
  const renderIcon = (type: any) => {
    switch (type.type) {
      case 0:
        return (
          <div className="icon-practice-1">
            <img
              src="https://app.static.wangxiao.cn/libs/images/unit_icon_practice.svg"
              alt=""
              className="arrow_up_down_icon"
            />
          </div>
        );
      case 1:
        return (
          <div className="icon-videocast-1">
            <img
              src="https://app.static.wangxiao.cn/libs/images/unit_icon_videocast.svg"
              alt=""
              className="arrow_up_down_icon"
            />
          </div>
        );
      case 2:
        return (
          <div className="icon-details-1">
            <img
              src="https://app.static.wangxiao.cn/libs/images/unit_icon_details.svg"
              alt=""
              className="arrow_up_down_icon"
            />
          </div>
        );
      case 3:
        return (
          <div className="icon-exams-1">
            <img
              src="https://app.static.wangxiao.cn/libs/images/unit_icon_exams.svg"
              alt=""
              className="arrow_up_down_icon"
            />
          </div>
        );
      case 4:
        return (
          <div className="icon-live-1">
            <img
              src="https://app.static.wangxiao.cn/libs/images/unit_icon_live.svg"
              alt=""
              className="arrow_up_down_icon"
            />
          </div>
        );
    }
    return null;
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

  // 资料/题库
  const RenderPracticeExamProgress = (item: any) => {
    const {
      speedRate = 0,
      done,
      total,
      spnum = 0,
      isUnit,
      preview,
      isPurchase,
    } = item;

    return (
      <div className="stats-item-wrap">
        <div style={{ position: 'relative', top: 1.5 }}>
          <RoundedProgressBar
            progress={speedRate}
            width={40}
            height={6}
            color="#E51600"
            trailColor={'rgba(0,0,0,0.06)'}
          />
        </div>
        <span className="text5-child">
          {done || 0}/{total || 0}
          {item.type == 0 ? '页' : '道'}
        </span>

        <span className="text6-child">{spnum}人关注</span>

        {isUnit ? (
          preview || isPurchase ? (
            <div className="group12-child">
              <div
                className="text9-child btn-pointer"
                onClick={e => {
                  e.stopPropagation();
                  (preview || isPurchase) && callback && callback(item);
                }}
              >
                {item.type == 1 ? (
                  <div
                    className="iconfont icon-playing1"
                    style={{ marginRight: '4px' }}
                  ></div>
                ) : null}
                {renderText(item)}
              </div>
            </div>
          ) : (
            <div className="group13-child btn-pointer">
              <div className="iconfont icon-lock_1  lock-icon-style"></div>
            </div>
          )
        ) : null}
      </div>
    );
  };

  // 视频
  const RenderVideoProgress = (item: any) => {
    const { speedRate = 0, spnum = 0, isUnit, preview, isPurchase } = item;
    return (
      <div className="stats-item-wrap">
        {speedRate ? (
          <div className="stats-speedrate">
            <RoundedProgressBar
              progress={speedRate}
              width={40}
              height={6}
              color="#E51600"
              borderRadius={4}
              trailColor={'rgba(0,0,0,0.06)'}
            />
            <span className="text5">{speedRate * 100}%</span>
          </div>
        ) : null}
        <span className="text6">{spnum}人关注</span>

        {isUnit ? (
          preview || isPurchase ? (
            <div className="group12-child btn-pointer">
              <span
                className="text9-child"
                onClick={e => {
                  e.stopPropagation();
                  (preview || isPurchase) && callback && callback(item);
                }}
              >
                {item.type == 1 ? (
                  <div
                    className="iconfont icon-playing1"
                    style={{ marginRight: '4px' }}
                  ></div>
                ) : null}
                {renderText(item)}
              </span>
            </div>
          ) : (
            <div className="group13-child btn-pointer">
              {/* <BaseIcon name="lock" size={18} style={currentStyles.baseIcon} /> */}
              <div
                className="iconfont icon-lock_1   lock-icon-style "
                // onClick={() => callback && callback(item)}
              ></div>
            </div>
          )
        ) : null}
      </div>
    );
  };
  // 产品树重新组装统计数据
  function assembleData(item: any, stats: any) {
    const current: any = stats?.find((it: any) => {
      // J-科目类型 P-产品类型 C-章类型 S-节类型 CU-学习单元类型(章) SU-学习单元类型(节)
      // console.log(item.id === it.id && it.nodeType === item.nodeType)
      // nodeType=== CU 和SU   nodetype和id匹配
      // nodeType=== S  nodeType和parentName和name匹配
      // nodeType=== C  nodeType和productId和name匹配
      // nodeType=== p  nodeType和parentId存在，parentId和id一起匹配，不存在直接用id匹配
      switch (item.nodeType) {
        case 'CU':
        case 'SU':
          if (item.id === it.id && item.nodeType === it.nodeType) {
            return true;
          }
          break;
        case 'S':
          if (
            item.name === it.name &&
            item.nodeType === it.nodeType &&
            item.parentName === it.parentName
          ) {
            return true;
          }
          break;
        case 'C':
          if (
            item.name === it.name &&
            item.nodeType === it.nodeType &&
            item.parentId === it.parentId
          ) {
            return true;
          }
          break;
        case 'P':
          if (item.id === it.id && item.nodeType === it.nodeType) {
            return true;
          }
          break;
        default:
          return false;
      }
      return;
    });
    if (current) {
      return {
        ...item,
        ...current,
      };
    } else {
      return item;
    }
  }
  // 直播
  const RenderLiveProgress = (item: any) => {
    const { isUnit, preview, isPurchase } = item;
    return (
      <div className="stats-item-wrap">
        <span
          className={
            item.status === 0
              ? 'living-child'
              : item.status === 1
              ? 'living-child'
              : 'textTip-child'
          }
        >
          {item.status === 0
            ? '待直播'
            : item.status === 1
            ? '直播中'
            : item.status === 2
            ? '已结束'
            : '已关闭'}
        </span>
        <span className="livetime-child">
          {item.status === 0
            ? `${item.liveStartTime}直播`
            : item.status === 1
            ? `${item.liveStartTime}直播`
            : item.status === 2
            ? `${item.duration}分钟`
            : null}
        </span>
        {isUnit ? (
          preview || isPurchase ? (
            <div className="group12-child btn-pointer">
              <span
                className="text9-child"
                onClick={e => {
                  e.stopPropagation();
                  (preview || isPurchase) && callback && callback(item);
                }}
              >
                {item.type == 1 ? (
                  <div
                    className="iconfont icon-playing1"
                    style={{ marginRight: '4px' }}
                  ></div>
                ) : null}
                {renderText(item)}
              </span>
            </div>
          ) : (
            <div className="group13-child btn-pointer">
              <div className="iconfont icon-lock_1   lock-icon-style "></div>
            </div>
          )
        ) : null}
      </div>
    );
  };

  // 渲染列表进度 类型 0资料,1视频 ,2 题库 3 考试,4直播
  const RenderProgress = (item: any) => {
    switch (item.type) {
      case 0:
        return <RenderPracticeExamProgress {...item} />;
      case 1:
        return <RenderVideoProgress {...item} />;
      case 2:
      case 3:
        return <RenderPracticeExamProgress {...item} />;
      case 4:
        return <RenderLiveProgress {...item} />;
    }
    return null;
  };

  return (
    <div>
      {list.map((item: IChapterCourse) => {
          const { name, next, nodeType, preview, isPurchase } = item;
          // 学习进度
          const currentData = assembleData(item, stats);
          if (next && next.length > 0) {
            return (
              <div key={name}>
                <div className="group2-child" key={name}>
                  <div
                    onClick={() => {
                      openClose(item);
                    }}
                  >
                    <div className="group3-child">
                      {nodeType == 'P' ? (
                        hasPreClickId(preClickIdArr, name) ? (
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
                        )
                      ) : null}
                      {nodeType == 'C' ? (
                        hasPreClickId(preClickIdArr, name) ? (
                          <div className="IconExpand2-svg">
                            <img
                              src="https://app.static.wangxiao.cn/libs/images/arrow2_down.svg"
                              alt=""
                              className="arrow_up_down_icon"
                            />
                          </div>
                        ) : (
                          <div className="IconShrink2-svg ">
                            <img
                              src="https://app.static.wangxiao.cn/libs/images/arrow2_right.svg"
                              alt=""
                              className="arrow_up_down_icon"
                            />
                          </div>
                        )
                      ) : null}
                      {nodeType == 'S' ? (
                        hasPreClickId(preClickIdArr, name) ? (
                          <div className="IconExpand2-svg">
                            <img
                              src="https://app.static.wangxiao.cn/libs/images/arrow2_down.svg"
                              alt=""
                              className="arrow_up_down_icon"
                            />
                          </div>
                        ) : (
                          <div className="IconShrink2-svg ">
                            <img
                              src="https://app.static.wangxiao.cn/libs/images/arrow2_right.svg"
                              alt=""
                              className="arrow_up_down_icon"
                            />
                          </div>
                        )
                      ) : null}
                      <span
                        className={'text1-child'}
                        style={{ fontWeight: 400 }}
                      >
                        {name}
                      </span>
                    </div>
                  </div>
                  <div className="group4-child">
                    {RenderProgress({ ...item, ...currentData })}
                  </div>
                </div>
                {hasPreClickId(preClickIdArr, name) ? (
                  <RecursionLevelChildren
                    list={next}
                    stats={stats}
                    callback={callback}
                  />
                ) : null}
              </div>
            );
          } else {
            return nodeType === 'CU' || nodeType === 'SU' ? (
              <div className={'group5-child'} key={name}>
                <div
                  onClick={() =>
                    (preview || isPurchase) &&
                    callback &&
                    callback({ ...item, ...currentData })
                  }
                >
                  <div className="group6-child">
                    <div className="children6-child">{renderIcon(item)}</div>
                    <span className={'text4-child'}>{name}</span>
                  </div>
                  <div className="group7-child">
                    {RenderProgress({ ...item, ...currentData })}
                  </div>
                </div>
              </div>
            ) : (
              <div className="group2-child" key={name}>
                <div
                  onClick={() => {
                    openClose(item);
                  }}
                >
                  <div className="group3-child">
                    {hasPreClickId(preClickIdArr, name) ? (
                      <div className="iconfont IconExpand2 icon-expand_3_1 ">
                        <img
                          src="https://app.static.wangxiao.cn/libs/images/arrow2_down.svg"
                          alt=""
                          className="arrow_up_down_icon"
                        />
                      </div>
                    ) : (
                      <div className="iconfont IconShrink2  icon-expand_3_2">
                        <img
                          src="https://app.static.wangxiao.cn/libs/images/arrow2_right.svg"
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
