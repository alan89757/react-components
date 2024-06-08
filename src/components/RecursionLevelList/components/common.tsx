import React from 'react';
import { RoundedProgressBar } from '../RoundedProgressBar';

// 类型 0资料,1视频 ,2 题库 ,4直播
export const renderIcon = (type: any) => {
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
  }
  return null;
};

// 资料
export const RenderPracticeProgress = (item: any) => {
  console.log('0033---', item);
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
      <span className="text5-child">
        {done || 0}/{total || 0}页
      </span>

      <span className="text6-child">{spnum}人关注</span>

      {preview || isPurchase ? (
        <div className="group12-child">
          <div
            className="text9-child btn-pointer"
            onClick={(e) => {
              e.stopPropagation();
              // (preview || isPurchase) && callback && callback(item);
            }}
          >
            {item.type == 1 ? (
              <div
                className="iconfont icon-playing1"
                style={{ marginRight: '4px' }}
              ></div>
            ) : null}
            {/* {renderText(item)} */}
          </div>
        </div>
      ) : (
        <div className="group13-child btn-pointer">
          <div className="iconfont icon-lock_1  lock-icon-style"></div>
        </div>
      )}
    </div>
  );
};

// 题库
export const RenderPracticeExamProgress = (item: any) => {
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
        {/* <RoundedProgressBar
          speedRate={speedRate}
          width={40}
          height={6}
          color="#E51600"
          trailColor={'rgba(0,0,0,0.06)'}
        /> */}
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
                // (preview || isPurchase) && callback && callback(item);
              }}
            >
              {item.type == 1 ? (
                <div
                  className="iconfont icon-playing1"
                  style={{ marginRight: '4px' }}
                ></div>
              ) : null}
              {/* {renderText(item)} */}
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

// 4 直播（直播中-播放）
export const RenderLive = (item: any) => {
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
                // callback && callback();
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

//3 考试（道-考试）
const RenderExam = (item: any) => {
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
      {preview || isPurchase ? (
        <div className="group12-child">
          <div className="text9-child btn-pointer">{renderText(item)}</div>
        </div>
      ) : (
        <div className="group13-child btn-pointer">
          <div className="iconfont icon-lock_1  lock-icon-style"></div>
        </div>
      )}
    </div>
  );
};

// 2 题库(道-练习)
const RenderPractice = (item: any) => {
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
      {preview || isPurchase ? (
        <div className="group12-child">
          <div className="text9-child btn-pointer">{renderText(item)}</div>
        </div>
      ) : (
        <div className="group13-child btn-pointer">
          <div className="iconfont icon-lock_1  lock-icon-style"></div>
        </div>
      )}
    </div>
  );
};

// 1 视频（分钟-播放）
export const RenderVideo = (item: any) => {
  console.log('RenderVideo---', item);
  const { speedRate = 0, spnum = 0, isUnit, preview, isPurchase, done, total } = item;
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

      {preview || isPurchase ? (
        <div className="group12-child btn-pointer">
          <span className="text9-child">
            <div
              className="iconfont icon-playing1"
              style={{ marginRight: '4px' }}
            ></div>
            {renderText(item)}
          </span>
        </div>
      ) : (
        <div className="group13-child btn-pointer">
          {/* 一把锁图标 */}
          {/* <BaseIcon name="lock" size={18} style={currentStyles.baseIcon} /> */}
          <div
            className="iconfont icon-lock_1   lock-icon-style "
            // onClick={() => callback && callback(item)}
          ></div>
        </div>
      )}
    </div>
  );
};

// 按钮文案
// 类型 0资料,1视频 ,2 题库 3 考试 ,4直播
const renderText = (type: any) => {
  switch (type.type) {
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
const RenderMaterial = (item: any) => {
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
      {preview || isPurchase ? (
        <div className="group12-child">
          <div className="text9-child btn-pointer">{renderText(item)}</div>
        </div>
      ) : (
        <div className="group13-child btn-pointer">
          <div className="iconfont icon-lock_1  lock-icon-style"></div>
        </div>
      )}
    </div>
  );
};

// 渲染列表进度 类型 0 资料(页-查看), 1 视频（分钟-播放） ,2 题库(道-练习) 3 考试（道-考试）,4 直播（直播中-播放）
export const RenderProgress = (item: any) => {
  console.log('0011---', item);
  switch (item.type) {
    case 0: // 资料
      return <RenderMaterial {...item} />;
    case 1: // 视频
      return <RenderVideo {...item} />;
    case 2: // 题库(练习)
      return <RenderPractice {...item} />;
    case 3: // 考试
      return <RenderExam {...item} />;
    case 4: // 直播
      return <RenderLive {...item} />;
  }
  return null;
};
