/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { RoundedProgressBar } from './RoundedProgressBar';
import { assembleData } from './utils/index';
import CommonType2 from './components/CommonType2'; // 普通类型
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
            speedRate={speedRate}
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
                onClick={(e) => {
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
              speedRate={speedRate}
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
                onClick={(e) => {
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
                onClick={(e) => {
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
      {list.map((item: IChapterCourse, index: number) => {
        const { name, next, nodeType, preview, isPurchase } = item;
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
                  <CommonType2
                    hasPreClickId={hasPreClickId}
                    name={name}
                    preview={false}
                    speedRate={speedRate}
                    spnum={spnum}
                    index={index}
                  />
                </div>
                <div className="group4-child">
                  {RenderProgress({ ...item, ...currentData })}
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
                  {hasPreClickId(name) ? (
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
