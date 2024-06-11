export interface IChapterCourse {
  name: string;
  nodeType: string;
  type: number;
  preview?: boolean;
  next?: IChapterCourse[];
  isPurchase?: boolean; // 是否购买
  isUnit?: boolean; // 是否是单元
}

export interface IPropType {
  list: IChapterCourse[]; // 产品树
  stats?: any[]; // 统计数据(实时的)
  callback?: Function; // 回调函数，点击当前行自定义处理
}