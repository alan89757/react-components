export const list = [
  {
    id: 'PROD100000261',
    name: '证书详情-去学习11',
    next: [
      {
        name: '证书详情-去学习22',
        nodeType: 'C',
        parentId: 'PROD100000261',
        parentName: '证书详情-去学习',
        preview: true,
        productId: 'PROD100000261',
        speedRate: '0.2',
        spnum: 20,
        units: [
          {
            downloadable: false,
            handouts: false,
            id: 'UNIT10006447',
            name: '证书详情-去学习',
            nodeType: 'CU',
            num: 5,
            parentName: '证书详情-去学习',
            preview: true,
            previewLength: 60,
            productId: 'PROD100000261',
            productName: '证书详情-去学习',
            speedRate: '0.3',
            spnum: 30,
            type: 3,
            uncoil: true,
          },
        ],
        type: 1,
        next: [
          {
            downloadable: false,
            handouts: false,
            id: 'UNIT10006447',
            name: '证书详情-去学习33',
            nodeType: 'CU',
            num: 5,
            parentName: '证书详情-去学习',
            preview: true,
            previewLength: 60,
            productId: 'PROD100000261',
            productName: '证书详情-去学习',
            speedRate: '0.4',
            spnum: 40,
            type: 1,
            uncoil: true,
            isUnit: true,
            done: 10,
            total: 30,
          },
        ],
      },
    ],
    nodeType: 'P',
    preview: true,
    speedRate: '0.5',
    spnum: 10,
    type: 1,
  },
];


export const statsList =  [
  {
      "id": "PROD100000261",
      "isPurchase": false,
      "name": "我是产品类型",
      "nodeType": "P",
      "speedRate": "0.6",
      "spnum": 60
  },
  {
      "isPurchase": false,
      "name": "证书详情-去学习22",
      "nodeType": "C",
      "parentId": "PROD100000261",
      "parentName": "不支持回访的直播",
      "productId": "PROD100023485",
      "speedRate": "0.7",
      "spnum": 70
  },
  {
      "done": "0",
      "id": "UNIT10006447",
      "isPurchase": false,
      "name": "我是单元",
      "nodeType": "CU",
      "parentName": "不支持回访的直播",
      "productId": "PROD100023485",
      "speedRate": "0.8",
      "spnum": 80,
      "total": "100"
  }
];