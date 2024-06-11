import React from 'react';
import { RoundedProgressBar } from '../RoundedProgressBar';
import { IPropType, IChapterCourse, ILive } from "../interface/index";

// 类型 0资料,1视频 ,2 题库 ,4直播
export const renderIcon = (type: number) => {
  switch (type) {
    case 0:
      return (
        <div className="icon-practice-1">
          <img
            src="https://resource.wangxiao.cn/libs/images/unit_icon_practice.svg"
            alt=""
            className="arrow_up_down_icon"
          />
        </div>
      );
    case 1:
      return (
        <div className="icon-videocast-1">
          <img
            src="https://resource.wangxiao.cn/libs/images/unit_icon_videocast.svg"
            alt=""
            className="arrow_up_down_icon"
          />
        </div>
      );
    case 2:
      return (
        <div className="icon-details-1">
          <img
            src="https://resource.wangxiao.cn/libs/images/unit_icon_details.svg"
            alt=""
            className="arrow_up_down_icon"
          />
        </div>
      );
    case 3:
      return (
        <div className="icon-exams-1">
          <img
            src="https://resource.wangxiao.cn/libs/images/unit_icon_exams.svg"
            alt=""
            className="arrow_up_down_icon"
          />
        </div>
      );
    case 4:
      return (
        <div className="icon-live-1">
          <img
            src="https://resource.wangxiao.cn/libs/images/unit_icon_live.svg"
            alt=""
            className="arrow_up_down_icon"
          />
        </div>
      );
    default:
      return null;
  }
  return null;
};

// 4 直播（直播中-播放）
export const RenderLive = (item: IChapterCourse & ILive) => {
  const { isUnit, preview, isPurchase, onlyView, type, status, liveStartTime, duration } = item;
  return (
    <div className="stats-item-wrap">
      <span
        className={
          status === 0
            ? 'living-child'
            : status === 1
            ? 'living-child'
            : 'textTip-child'
        }
      >
        {status === 0
          ? '待直播'
          : status === 1
          ? '直播中'
          : status === 2
          ? '已结束'
          : '已关闭'}
      </span>
      <span className="livetime-child">
        {status === 0
          ? `${liveStartTime}直播`
          : status === 1
          ? `${liveStartTime}直播`
          : status === 2
          ? `${duration}分钟`
          : null}
      </span>
      {onlyView ? (
        preview || isPurchase ? (
          <div className="group12-child btn-pointer">
            <span
              className="text9-child"
              onClick={(e) => {
                e.stopPropagation();
                // callback && callback();
              }}
            >
              {type == 1 ? (
                <div
                  className="iconfont icon-playing1"
                  style={{ marginRight: '4px' }}
                ></div>
              ) : null}
              {renderText(type)}
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

//3 考试（道-考试）
const RenderExam = (item: IChapterCourse & ILive) => {
  const {
    speedRate = 0,
    done,
    total,
    spnum = 0,
    isUnit,
    preview,
    isPurchase,
    onlyView,
    type,
  } = item;

  return (
    <div className="stats-item-wrap">
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
      <span className="text5-child">
        {total && done ? `${done}/${total}道` : ''}
      </span>
      <span className="text6-child">{spnum}人关注</span>
      {!onlyView ? (
        preview || isPurchase ? (
          <div className="group12-child">
            <div className="text9-child btn-pointer">{renderText(type)}</div>
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

// 2 题库(道-练习)
export const RenderPractice = (item: IChapterCourse & ILive) => {
  const {
    speedRate = 0,
    done,
    total,
    spnum = 0,
    isUnit,
    preview,
    onlyView,
    isPurchase,
    type,
  } = item;

  return (
    <div className="stats-item-wrap">
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
      <span className="text5-child">
        {total && done ? `${done}/${total}道` : ''}
      </span>
      <span className="text6-child">{spnum}人关注</span>
      {!onlyView ? (
        preview || isPurchase ? (
          <div className="group12-child">
            <div className="text9-child btn-pointer">{renderText(type)}</div>
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

// 1 视频（分钟-播放）
export const RenderVideo = (item: IChapterCourse & ILive) => {
  const {
    speedRate = 0,
    spnum = 0,
    isUnit,
    preview,
    isPurchase,
    done,
    total,
    onlyView,
    type,
  } = item;
  return (
    <div className="stats-item-wrap">
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
      <span className="text5-child">
        {total && done ? `${done}/${total}分钟` : ''}
      </span>
      <span className="text6">{spnum}人关注</span>
      {!onlyView ? (
        preview || isPurchase ? (
          <div className="group12-child">
            <div className="text9-child btn-pointer">{renderText(type)}</div>
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

// 按钮文案
// 类型 0资料,1视频 ,2 题库 3 考试 ,4直播
export const renderText = (type: number) => {
  switch (type) {
    case 0:
      return '查看';
    case 1:
      return '播放';
    case 2:
      return '练习';
    case 3:
      return '考试';
    case 4:
      return '播放';
  }
  return '学习';
};

// 0 资料(页-查看)
export const RenderMaterial = (item: IChapterCourse & ILive) => {
  const {
    speedRate = 0,
    done,
    total,
    spnum = 0,
    isUnit,
    type,
    preview,
    onlyView,
    isPurchase,
  } = item;

  return (
    <div className="stats-item-wrap">
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
      <span className="text5-child">
        {total && done ? `${done}/${total}页` : ''}
      </span>
      <span className="text6-child">{spnum}人关注</span>
      {!onlyView ? (
        preview || isPurchase ? (
          <div className="group12-child">
            <div className="text9-child btn-pointer">{renderText(type)}</div>
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

// 渲染列表进度 类型 0 资料(页-查看), 1 视频（分钟-播放） ,2 题库(道-练习) 3 考试（道-考试）,4 直播（直播中-播放）
export const RenderProgress = (item: any, onlyView: boolean) => {
  const { type } = item;
  switch (type) {
    case 0: // 资料
      return <RenderMaterial {...item} onlyView={onlyView} />;
    case 1: // 视频
      return <RenderVideo {...item} onlyView={onlyView} />;
    case 2: // 题库(练习)
      return <RenderPractice {...item} onlyView={onlyView} />;
    case 3: // 考试
      return <RenderExam {...item} onlyView={onlyView} />;
    case 4: // 直播
      return <RenderLive {...item} onlyView={onlyView} />;
  }
  return null;
};
