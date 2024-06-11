export interface IChapterCourse {
  name: string;
  nodeType: string;
  type: number;
  preview?: boolean;
  next?: IChapterCourse[];
  isPurchase?: boolean; // 是否购买
  isUnit?: boolean; // 是否是单元
  speedRate?: number;
  done?: boolean;
  total?:number; //
  spnum?: number; // 人数

}

export interface IPropType {
  list: IChapterCourse[]; // 接口使用缓存
  statsList?: any[]; // 最新的统计数(覆盖部分缓存数据)
  key: string; // 唯一key
  callback?: Function; // 自定义最小层级点击事件回调函数
  onlyView?: boolean; // 无操作，只展示
}

export interface ILive {
  status: number;
  onlyView: boolean;
  liveStartTime: string;
  duration: string;
}
